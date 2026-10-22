import { GoogleGenAI } from '@google/genai';

const SCIENTIST_PROMPTS: Record<string, string> = {
  biologist: `Bạn là Giáo sư Flora, Nhà Sinh học AI chuyên giải thích sinh học THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, súc tích, dễ hiểu, có ví dụ thực tế và câu hỏi ôn tập.`,
  physicist: `Bạn là Giáo sư Newton, Nhà Vật lí AI chuyên giải thích vật lí THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, súc tích, nêu công thức và ví dụ thực tế.`,
  chemist: `Bạn là Tiến sĩ Alchem, Nhà Hóa học AI chuyên hóa học THCS (6-9) theo CT GDPT 2018. Trả lời ngắn gọn, cân bằng phương trình chính xác và an toàn.`,
  earth: `Bạn là Tiến sĩ Geo, Nhà Khoa học Trái Đất AI chuyên khoa học Trái Đất & Môi trường THCS (6-9). Trả lời ngắn gọn, gắn với đời sống vùng cao.`
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { scientistId = 'biologist', grade = '8', subject = 'Sinh học', prompt, history = [] } = req.body || {};
    
    if (!prompt) {
      return res.status(400).json({ error: 'Thiếu nội dung câu hỏi.' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = apiKey ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    }) : null;

    const systemPrompt = (SCIENTIST_PROMPTS[scientistId] || SCIENTIST_PROMPTS.biologist) +
      `\nHọc sinh lớp ${grade}, môn ${subject}. Cấu trúc: 1. Trả lời trực tiếp, 2. Giải thích, 3. Ví dụ, 4. Câu hỏi kiểm tra.`;

    if (!ai) {
      const fallbackReply = `Chào em! (Chế độ phản hồi nhanh - Chưa cấu hình GEMINI_API_KEY trên Vercel). Về câu hỏi "${prompt}" trong môn ${subject} lớp ${grade}:\n\n1. Trả lời trực tiếp: Kiến thức trọng tâm KHTN 2018.\n2. Giải thích: Tuân theo định luật tự nhiên.\n3. Ví dụ: Quan sát thực tế.\n4. Ôn tập: Hãy suy nghĩ thêm nhé!`;
      return res.status(200).json({ reply: fallbackReply });
    }

    const contextText = history.slice(-2).map((h: any) => `${h.role === 'user' ? 'Học sinh' : 'AI'}: ${h.text}`).join('\n');
    const fullPrompt = contextText ? `${contextText}\nHọc sinh: ${prompt}` : prompt;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: fullPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.6,
        maxOutputTokens: 600,
      }
    });

    const replyText = response.text || 'Xin lỗi, AI chưa thể tạo câu trả lời lúc này.';
    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    const { subject = 'Khoa học Tự nhiên', grade = '8', prompt = '' } = req.body || {};
    const fallbackReply = `Chào em! Về câu hỏi "${prompt}" trong chương trình ${subject} lớp ${grade}:

1. Trọng tâm bài học: Kiến thức này là nội dung nền tảng trong chương trình KHTN 2018.
2. Bản chất khoa học: Hiện tượng và quy luật này giúp giải thích các biến đổi vật chất và tự nhiên trong đời sống.
3. Ứng dụng thực tiễn: Em hãy quan sát các thí nghiệm và hiện tượng liên quan trong thực tế hàng ngày.
4. Gợi ý học tập: Hãy ghi nhớ các định luật cơ bản và trao đổi thêm cùng thầy cô, bạn bè nhé!`;
    return res.status(200).json({ reply: fallbackReply });
  }
}
