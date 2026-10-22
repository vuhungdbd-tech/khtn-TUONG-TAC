import { GoogleGenAI } from '@google/genai';
import { findBestScienceAnswer } from './science-engine';

const SCIENTIST_PROMPTS: Record<string, string> = {
  biologist: `Bạn là Giáo sư Flora, Nhà Sinh học AI chuyên giải thích sinh học THCS (6-9) theo CT GDPT 2018. Trả lời chi tiết, khoa học, sư phạm, có ví dụ thực tế và câu hỏi ôn tập.`,
  physicist: `Bạn là Giáo sư Newton, Nhà Vật lí AI chuyên giải thích vật lí THCS (6-9) theo CT GDPT 2018. Trả lời chi tiết, nêu công thức, bản chất vật lí và ví dụ thực tế.`,
  chemist: `Bạn là Tiến sĩ Alchem, Nhà Hóa học AI chuyên hóa học THCS (6-9) theo CT GDPT 2018. Trả lời chi tiết, bản chất phản ứng, cân bằng phương trình chính xác và an toàn.`,
  earth: `Bạn là Tiến sĩ Geo, Nhà Khoa học Trái Đất AI chuyên khoa học Trái Đất & Môi trường THCS (6-9). Trả lời chi tiết, gắn với thực tiễn khí hậu và địa lí.`
};

export default async function handler(req: any, res: any) {
  // CORS headers for Vercel Serverless Function
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {}
  }
  const { 
    scientistId = 'biologist', 
    grade = '8', 
    subject = 'Sinh học', 
    prompt = '', 
    history = [] 
  } = body || {};

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Thiếu nội dung câu hỏi.' });
  }

  const cleanPrompt = prompt.trim();
  const rawKey = (process.env.GEMINI_API_KEY || '').trim();
  
  // Kiểm tra key có hợp lệ không (loại bỏ trường hợp placeholder hoặc key bị treo)
  const isSuspendedOrInvalidKey = rawKey.startsWith('AQ.Ab8') || rawKey.includes('MY_GEMINI_API_KEY') || rawKey.length < 10;
  const apiKey = isSuspendedOrInvalidKey ? '' : rawKey;

  // Nếu không có API key hợp lệ, sử dụng ngay bộ tri thức KHTN chuyên sâu chuẩn CT 2018
  if (!apiKey) {
    const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
    return res.status(200).json({ reply: scienceReply });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemPrompt = (SCIENTIST_PROMPTS[scientistId] || SCIENTIST_PROMPTS.biologist) +
      `\nĐối tượng học sinh: Lớp ${grade}, phân môn ${subject}. Cấu trúc phản hồi chuẩn GDPT 2018 gồm 4 phần:
1. Trả lời trực tiếp: Trả lời thẳng vào câu hỏi, nêu rõ khái niệm/kết luận chính.
2. Cơ chế & Giải thích khoa học: Giải thích chi tiết bản chất tự nhiên, công thức hoặc phương trình liên quan.
3. Ví dụ thực tế & Ứng dụng: Minh họa gần gũi trong đời sống hoặc bài thực hành.
4. Câu hỏi kiểm tra & Vận dụng: 1 câu hỏi để học sinh củng cố bài học.`;

    const contextText = (history || [])
      .slice(-3)
      .map((h: any) => `${h.role === 'user' ? 'Học sinh' : 'AI'}: ${h.text}`)
      .join('\n');
    const fullPrompt = contextText ? `${contextText}\nHọc sinh: ${cleanPrompt}` : cleanPrompt;

    let replyText = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: fullPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.6,
          maxOutputTokens: 800,
        }
      });
      replyText = response.text || '';
    } catch (modelErr: any) {
      console.warn('Primary model error, attempting fallback model:', modelErr?.message);
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: fullPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.6,
          maxOutputTokens: 600,
        }
      });
      replyText = fallbackResponse.text || '';
    }

    if (replyText && replyText.trim().length > 20) {
      return res.status(200).json({ reply: replyText });
    }

    // Nếu Gemini trả về rỗng, dùng tri thức chuyên sâu
    const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
    return res.status(200).json({ reply: scienceReply });
  } catch (error: any) {
    console.error('Gemini API call failed (e.g. invalid key or suspension), serving science answer:', error?.message);
    // Khi gọi API thất bại (403 CONSUMER_SUSPENDED, quota, network...), cung cấp câu trả lời khoa học đích thực
    const scienceReply = findBestScienceAnswer(cleanPrompt, scientistId, grade, subject);
    return res.status(200).json({ reply: scienceReply });
  }
}
