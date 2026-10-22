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
    const fallbackReply = `Chào em! Về nội dung câu hỏi (${error.message || 'Lỗi kết nối AI'}):\n\n1. Trả lời trực tiếp: Nội dung này thuộc chương trình KHTN 2018.\n2. Giải thích: Khoa học tự nhiên giúp lý giải các hiện tượng xung quanh.\n3. Ví dụ: Các ứng dụng thực tế.\n4. Ôn tập: Trao đổi thêm với thầy cô giáo nhé!`;
    return res.status(200).json({ reply: fallbackReply });
  }
}
