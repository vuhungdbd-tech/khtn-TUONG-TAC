import { GoogleGenAI } from '@google/genai';
import { getQuestionsBySubjectAndLevel, normalizeSubject, normalizeDifficulty } from '../src/data/quizBank';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {}
    }
    const { 
      subject = 'Vật lí', 
      grade = '8', 
      count = 5, 
      difficulty = 'Nâng cao',
      topic = ''
    } = body || {};

    const cleanSubject = normalizeSubject(subject);
    const cleanDifficulty = normalizeDifficulty(difficulty);
    const cleanGrade = String(grade).replace(/\D/g, '') || '8';
    const numCount = Math.max(1, Math.min(20, Number(count) || 5));

    // Curated pedagogical fallback questions strictly matching subject, grade & level
    const fallbackQuestions = getQuestionsBySubjectAndLevel(cleanSubject, cleanGrade, cleanDifficulty, numCount);

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return res.status(200).json({ questions: fallbackQuestions });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
    });

    try {
      const difficultyGuidance: Record<string, string> = {
        'Cơ bản': 'Mức độ Cơ bản (Nhận biết, Thông hiểu): kiểm tra định nghĩa, khái niệm, công thức nền tảng hoặc nhận diện hiện tượng thực tế đơn giản.',
        'Vận dụng': 'Mức độ Vận dụng: yêu cầu áp dụng công thức vào bài toán tính toán cơ bản hoặc giải thích hiện tượng khoa học thực tiễn trong đời sống.',
        'Nâng cao': 'Mức độ Nâng cao: bài toán tổng hợp liên hệ nhiều kiến thức, suy luận logic, so sánh hoặc phân tích đồ thị/thực nghiệm.',
        'Chuyên đề ôn HSG': 'Mức độ Chuyên đề ôn HSG (Học sinh Giỏi): câu hỏi trắc nghiệm chuyên sâu theo cấu trúc đề thi HSG cấp huyện/tỉnh, câu hỏi phân loại cao, tình huống thực nghiệm khoa học phức hợp.'
      };

      const prompt = `Bạn là chuyên gia Khảo thí Khoa học Tự nhiên Việt Nam (CT GDPT 2018).
Hãy tạo chính xác ${numCount} câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D) cho:
- Phân môn: ${cleanSubject} (tuyệt đối chỉ ra câu hỏi môn ${cleanSubject}, không lẫn sang môn khác)
- Khối lớp: Lớp ${cleanGrade}
- Mức độ yêu cầu: ${cleanDifficulty} (${difficultyGuidance[cleanDifficulty] || ''})
${topic ? `- Chuyên đề định hướng: ${topic}` : ''}

Yêu cầu xuất sắc:
1. Nội dung câu hỏi khoa học chuẩn mực, bám sát sách KHTN 2018.
2. 4 phương án A, B, C, D rõ ràng, không trùng lặp, có 1 đáp án đúng duy nhất.
3. correctIndex là chỉ số 0 (A), 1 (B), 2 (C), hoặc 3 (D).
4. explanation giải thích cặn kẽ từng bước, công thức và bản chất khoa học.

Định dạng trả về JSON thuần túy dạng mảng:
[
  {
    "id": "q1",
    "subject": "${cleanSubject}",
    "grade": "${cleanGrade}",
    "difficulty": "${cleanDifficulty}",
    "topic": "Tên chủ đề...",
    "question": "Nội dung câu hỏi...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "correctIndex": 0,
    "explanation": "Giải thích chi tiết..."
  }
]`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.6,
          maxOutputTokens: 2500
        }
      });

      let text = response.text || '[]';
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const generated = JSON.parse(text);

      if (Array.isArray(generated) && generated.length > 0) {
        const validated = generated.slice(0, numCount).map((q: any, idx: number) => ({
          id: q.id || `q_${cleanSubject}_${cleanGrade}_${idx + 1}_${Date.now()}`,
          subject: cleanSubject,
          grade: cleanGrade,
          difficulty: cleanDifficulty,
          topic: q.topic || topic || `Chuyên đề ${cleanSubject} ${cleanDifficulty}`,
          question: q.question,
          options: Array.isArray(q.options) && q.options.length === 4 ? q.options : fallbackQuestions[idx % fallbackQuestions.length].options,
          correctIndex: typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3 ? q.correctIndex : 0,
          explanation: q.explanation || 'Đáp án chính xác theo chương trình KHTN 2018.'
        }));
        return res.status(200).json({ questions: validated });
      }

      return res.status(200).json({ questions: fallbackQuestions });
    } catch (aiErr: any) {
      console.warn('AI Quiz generation failed, returning curriculum bank:', aiErr?.message);
      return res.status(200).json({ questions: fallbackQuestions });
    }
  } catch (error: any) {
    console.error('Generate Quiz Error:', error);
    const { subject = 'Vật lí', grade = '8', difficulty = 'Nâng cao', count = 5 } = req.body || {};
    const safeSub = normalizeSubject(subject);
    const safeDiff = normalizeDifficulty(difficulty);
    const fallback = getQuestionsBySubjectAndLevel(safeSub, grade, safeDiff, Number(count) || 5);
    return res.status(200).json({ questions: fallback });
  }
}
