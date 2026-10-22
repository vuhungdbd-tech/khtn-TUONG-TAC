import { GoogleGenAI } from '@google/genai';

const SPECIFIC_QUESTION_BANKS: Record<string, any[]> = {
  'Vật lí_8': [
    {
      id: 'p8_1',
      question: 'Áp suất chất lỏng tác dụng lên một điểm ở độ sâu h tính theo công thức nào (với d là trọng lượng riêng của chất lỏng)?',
      options: ['A. p = d * h', 'B. p = d / h', 'C. p = h / d', 'D. p = d * h * h'],
      correctIndex: 0,
      explanation: 'Công thức tính áp suất chất lỏng đứng yên ở độ sâu h là p = d * h.'
    },
    {
      id: 'p8_2',
      question: 'Một người đứng bằng hai chân trên sàn nhà. Trọng lượng của người là 500 N, diện tích tiếp xúc của mỗi bàn chân với mặt sàn là 0,01 m2. Áp suất người đó tác dụng lên sàn là bao nhiêu?',
      options: ['A. 5000 Pa', 'B. 25000 Pa', 'C. 10000 Pa', 'D. 50000 Pa'],
      correctIndex: 1,
      explanation: 'Diện tích tiếp xúc tổng cộng S = 2 * 0,01 = 0,02 m2. Áp suất p = F / S = 500 / 0,02 = 25000 Pa.'
    },
    {
      id: 'p8_3',
      question: 'Lực đẩy Archimedes tác dụng lên một vật nhúng trong chất lỏng phụ thuộc vào những yếu tố nào?',
      options: [
        'A. Trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị vật chiếm chỗ.',
        'B. Khối lượng của vật và chiều sâu nhúng vật.',
        'C. Trọng lượng của vật và thể tích của vật.',
        'D. Hình dạng của vật và bản chất của chất lỏng.'
      ],
      correctIndex: 0,
      explanation: 'Theo định luật Archimedes, lực đẩy Fa = d * V.'
    }
  ],
  'Sinh học_7': [
    {
      id: 'b7_1',
      question: 'Quá trình quang hợp ở thực vật diễn ra chủ yếu ở bào quan nào?',
      options: ['A. Ti thể', 'B. Lục lạp', 'C. Ribosome', 'D. Không bào'],
      correctIndex: 1,
      explanation: 'Lục lạp chứa chất diệp lục thực hiện quang hợp.'
    }
  ],
  'Hóa học_8': [
    {
      id: 'c8_1',
      question: 'Phân biệt hiện tượng vật lí và hiện tượng hóa học dựa vào dấu hiệu chính nào?',
      options: [
        'A. Có sự tạo thành chất mới hay không.',
        'B. Sự thay đổi về nhiệt độ.',
        'C. Sự thay đổi trạng thái rắn sang lỏng.',
        'D. Sự thay đổi kích thước của vật.'
      ],
      correctIndex: 0,
      explanation: 'Hiện tượng hóa học là hiện tượng có tạo ra chất mới.'
    }
  ],
  'Khoa học Trái Đất_6': [
    {
      id: 'e6_1',
      question: 'Cấu tạo bên trong của Trái Đất gồm bao nhiêu lớp chính?',
      options: ['A. 3 lớp (Vỏ, Mantin, Nhân)', 'B. 2 lớp (Vỏ và Nhân)', 'C. 4 lớp', 'D. 5 lớp'],
      correctIndex: 0,
      explanation: 'Cấu tạo Trái Đất gồm 3 lớp: Vỏ, Mantin và Nhân.'
    }
  ]
};

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
    const { subject = 'Vật lí', grade = '8', count = 5, difficulty = 'Nâng cao' } = body || {};
    
    const key = `${subject}_${grade}`;
    const bank = SPECIFIC_QUESTION_BANKS[key] || SPECIFIC_QUESTION_BANKS['Vật lí_8'];
    
    let baseQuestions = [...bank];
    while (baseQuestions.length < Number(count)) {
      baseQuestions = baseQuestions.concat(bank);
    }
    const selectedQuestions = baseQuestions.slice(0, Number(count) || 5).map((q, idx) => ({
      ...q,
      id: `q_${subject}_${grade}_${idx + 1}_${Date.now()}`,
      difficulty
    }));

    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = apiKey ? new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
    }) : null;

    if (!ai) {
      return res.status(200).json({ questions: selectedQuestions });
    }

    try {
      const prompt = `Hãy tạo chính xác ${count || 5} câu hỏi trắc nghiệm Khoa học Tự nhiên chuẩn xác theo chương trình GDPT 2018 cho môn ${subject}, lớp ${grade}, độ khó "${difficulty}". 
      Trả về định dạng JSON thuần túy dạng mảng:
      [
        {
          "id": "q1",
          "question": "Nội dung...",
          "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
          "correctIndex": 0,
          "explanation": "Giải thích..."
        }
      ]`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
          maxOutputTokens: 1500
        }
      });

      let text = response.text || '[]';
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const questions = JSON.parse(text);
      if (Array.isArray(questions) && questions.length > 0) {
        return res.status(200).json({ questions });
      }
      return res.status(200).json({ questions: selectedQuestions });
    } catch {
      return res.status(200).json({ questions: selectedQuestions });
    }
  } catch (error: any) {
    console.error('Generate Quiz Error:', error);
    return res.status(500).json({ error: error.message || 'Lỗi khi tạo câu hỏi.' });
  }
}
