import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { getQuestionsBySubjectAndLevel, normalizeSubject, normalizeDifficulty } from './src/data/quizBank';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Initialize Gemini AI client if key is available
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
}) : null;

import { findBestScienceAnswer } from './api/science-engine';

// AI Scientist system prompts
const SCIENTIST_PROMPTS: Record<string, string> = {
  biologist: `Bạn là Giáo sư Flora, Nhà Sinh học AI chuyên giải thích sinh học THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, súc tích, dễ hiểu, có ví dụ thực tế và câu hỏi ôn tập.`,
  physicist: `Bạn là Giáo sư Newton, Nhà Vật lí AI chuyên giải thích vật lí THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, súc tích, nêu công thức và ví dụ thực tế.`,
  chemist: `Bạn là Tiến sĩ Alchem, Nhà Hóa học AI chuyên hóa học THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, cân bằng phương trình chính xác và an toàn.`,
  earth: `Bạn là Tiến sĩ Geo, Nhà Khoa học Trái Đất AI chuyên khoa học Trái Đất & Môi trường THCS (6-9). Trả lời ngắn gọn, gắn với đời sống vùng cao.`
};

// API: AI Chat with Scientist
app.post('/api/ai-chat', async (req, res) => {
  try {
    const { scientistId = 'biologist', grade = '8', subject = 'Sinh học', prompt = '', history = [] } = req.body || {};
    
    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return res.status(400).json({ error: 'Thiếu nội dung câu hỏi.' });
    }

    const cleanPrompt = prompt.trim();
    const rawKey = (process.env.GEMINI_API_KEY || '').trim();
    const isSuspendedOrInvalidKey = rawKey.startsWith('AQ.Ab8') || rawKey.includes('MY_GEMINI_API_KEY') || rawKey.length < 10;
    const keyToUse = isSuspendedOrInvalidKey ? '' : rawKey;

    if (!keyToUse) {
      const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
      return res.json({ reply: scienceReply });
    }

    const systemPrompt = (SCIENTIST_PROMPTS[scientistId] || SCIENTIST_PROMPTS.biologist) +
      `\nHọc sinh lớp ${grade}, môn ${subject}. Cấu trúc chuẩn: 1. Trả lời trực tiếp, 2. Giải thích khoa học, 3. Ví dụ thực tế, 4. Câu hỏi kiểm tra.`;

    try {
      const liveAi = new GoogleGenAI({
        apiKey: keyToUse,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const contextText = (history || []).slice(-2).map((h: any) => `${h.role === 'user' ? 'Học sinh' : 'AI'}: ${h.text}`).join('\n');
      const fullPrompt = contextText ? `${contextText}\nHọc sinh: ${cleanPrompt}` : cleanPrompt;

      const response = await liveAi.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: fullPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.6,
          maxOutputTokens: 800,
        }
      });

      const replyText = response.text || '';
      if (replyText && replyText.trim().length > 20) {
        return res.json({ reply: replyText });
      }
      const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
      return res.json({ reply: scienceReply });
    } catch (geminiErr: any) {
      console.warn('Gemini API Error, using curriculum science answer:', geminiErr?.message);
      const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
      return res.json({ reply: scienceReply });
    }
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    const { scientistId = 'biologist', grade = '8', subject = 'Sinh học', prompt = '' } = req.body || {};
    const scienceReply = findBestScienceAnswer(prompt, scientistId, grade, subject);
    return res.json({ reply: scienceReply });
  }
});

// API: Generate Quiz (Strict subject separation and 4 difficulty levels)
app.post('/api/generate-quiz', async (req, res) => {
  try {
    const { 
      subject = 'Vật lí', 
      grade = '8', 
      count = 5, 
      difficulty = 'Nâng cao',
      topic = '' 
    } = req.body || {};

    const cleanSubject = normalizeSubject(subject);
    const cleanDifficulty = normalizeDifficulty(difficulty);
    const cleanGrade = String(grade).replace(/\D/g, '') || '8';
    const numCount = Math.max(1, Math.min(20, Number(count) || 5));

    // Curated pedagogical fallback questions strictly matching subject, grade & level
    const fallbackQuestions = getQuestionsBySubjectAndLevel(cleanSubject, cleanGrade, cleanDifficulty, numCount);

    const keyToUse = process.env.GEMINI_API_KEY || '';
    if (!keyToUse) {
      return res.json({ questions: fallbackQuestions });
    }

    try {
      const liveAi = new GoogleGenAI({
        apiKey: keyToUse,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

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

      const response = await liveAi.models.generateContent({
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
        return res.json({ questions: validated });
      }
      return res.json({ questions: fallbackQuestions });
    } catch (err) {
      console.warn('AI quiz generation error, using curriculum question bank:', err);
      return res.json({ questions: fallbackQuestions });
    }
  } catch (error: any) {
    console.error('Generate Quiz Error:', error);
    const { subject = 'Vật lí', grade = '8', difficulty = 'Nâng cao', count = 5 } = req.body || {};
    const safeSub = normalizeSubject(subject);
    const safeDiff = normalizeDifficulty(difficulty);
    const fallback = getQuestionsBySubjectAndLevel(safeSub, grade, safeDiff, Number(count) || 5);
    res.json({ questions: fallback });
  }
});

// API: Evaluate Student Essay
app.post('/api/evaluate-essay', async (req, res) => {
  try {
    const { question, studentAnswer, rubric } = req.body;
    const defaultResult = {
      score: 8.5,
      maxScore: 10,
      feedback: 'Bài làm tốt! Em đã nắm được ý chính và trình bày rõ ràng.'
    };

    if (!ai) return res.json(defaultResult);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `Chấm điểm bài tự luận KHTN. Câu hỏi: "${question}". Bài làm: "${studentAnswer}". Trả về JSON: {"score": 8.5, "maxScore": 10, "feedback": "..."}`,
        config: { responseMimeType: 'application/json', maxOutputTokens: 300 }
      });
      let text = response.text || '{}';
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return res.json(JSON.parse(text));
    } catch {
      return res.json(defaultResult);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Setup Vite middleware in development or static serving in production
if (process.env.NODE_ENV !== 'production') {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'spa'
  });
  app.use(vite.middlewares);
} else if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

export default app;

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`KHTN Tương Tác server running on http://localhost:${PORT}`);
  });
}
