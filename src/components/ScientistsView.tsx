import React, { useState } from 'react';
import { SCIENTISTS, SUBJECTS } from '../data/mockData';
import { Sparkles, Send, Bot, User, BookOpen, RefreshCw, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

import { findBestScienceAnswer } from '../data/scienceEngine';

interface ScientistsViewProps {
  selectedScientist: string;
  setSelectedScientist: (id: string) => void;
  setCurrentTab: (tab: string) => void;
}

export const ScientistsView: React.FC<ScientistsViewProps> = ({ selectedScientist, setSelectedScientist, setCurrentTab }) => {
  const [grade, setGrade] = useState('8');
  const [subject, setSubject] = useState('Sinh học');
  const [promptInput, setPromptInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'model'; text: string }>>([
    {
      role: 'model',
      text: 'Chào em! Tôi là trợ lý AI khoa học của em. Em muốn cùng tôi khám phá hiện tượng khoa học nào hôm nay?'
    }
  ]);

  const SCIENTIST_DEFAULT_SUBJECTS: Record<string, string> = {
    biologist: 'Sinh học',
    physicist: 'Vật lí',
    chemist: 'Hóa học',
    earth: 'Khoa học Trái Đất'
  };

  const SCIENTIST_SUGGESTIONS: Record<string, string[]> = {
    biologist: [
      'Cây hấp thụ dinh dưỡng như thế nào?',
      'Giải thích tại sao lá cây có màu xanh và quá trình quang hợp?',
      'Hô hấp tế bào giải phóng năng lượng ATP ra sao?',
      'Sự khác nhau giữa tế bào thực vật và tế bào động vật?'
    ],
    physicist: [
      'Định luật bảo toàn cơ năng áp dụng như thế nào trong thực tế?',
      'Lực đẩy Archimedes và điều kiện để một vật nổi hoặc chìm?',
      'Công thức tính áp suất chất lỏng ở độ sâu h?',
      'Định luật Ohm và cách tính điện trở trong đoạn mạch?'
    ],
    chemist: [
      'Làm thế nào để cân bằng phương trình hóa học nhanh chóng?',
      'Thang đo pH là gì và phân biệt dung dịch acid với base?',
      'Bảng tuần hoàn các nguyên tố hóa học được sắp xếp thế nào?',
      'Dãy hoạt động hóa học của kim loại và ứng dụng?'
    ],
    earth: [
      'Nguyên nhân nào gây ra hiện tượng biến đổi khí hậu ở vùng cao?',
      'Chu trình nước trong tự nhiên diễn ra như thế nào?',
      'Cấu tạo các lớp của Trái Đất và nguyên nhân gây động đất?',
      'Tại sao trên Trái Đất lại có hiện tượng ngày đêm và 4 mùa?'
    ]
  };

  const activeSci = SCIENTISTS.find(s => s.id === selectedScientist) || SCIENTISTS[0];
  const suggestedQuestions = SCIENTIST_SUGGESTIONS[selectedScientist] || SCIENTIST_SUGGESTIONS.biologist;

  const handleSelectScientist = (sciId: string) => {
    setSelectedScientist(sciId);
    const newSubj = SCIENTIST_DEFAULT_SUBJECTS[sciId] || 'Sinh học';
    setSubject(newSubj);
    const targetSci = SCIENTISTS.find(s => s.id === sciId) || activeSci;
    setMessages([
      {
        role: 'model',
        text: `Chào em! Tôi là ${targetSci.name} (${targetSci.title}). Tôi sẵn sàng đồng hành cùng em khám phá mọi bí ẩn trong môn ${newSubj} lớp ${grade} theo chuẩn KHTN 2018. Em muốn hỏi điều gì hôm nay?`
      }
    ]);
  };

  const handleSend = async (textToSend?: string) => {
    const q = textToSend || promptInput;
    if (!q.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, text: q }];
    setMessages(newMessages);
    if (!textToSend) setPromptInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scientistId: selectedScientist,
          grade,
          subject,
          prompt: q,
          history: messages
        })
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.reply && typeof data.reply === 'string' && data.reply.trim().length > 10) {
        setMessages([...newMessages, { role: 'model', text: data.reply }]);
        return;
      }

      // Khi server trả về lỗi hoặc không có reply, sử dụng tri thức khoa học sư phạm KHTN chuẩn 2018
      const fallbackReply = findBestScienceAnswer(q, selectedScientist, grade, subject);
      setMessages([...newMessages, { role: 'model', text: fallbackReply }]);
    } catch {
      // Khi mất kết nối mạng hoặc server không phản hồi, tự động cung cấp lời giải khoa học chuẩn mực ngay lập tức
      const fallbackReply = findBestScienceAnswer(q, selectedScientist, grade, subject);
      setMessages([...newMessages, { role: 'model', text: fallbackReply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Scientist Selection Header */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Nhập Vai Nhà Khoa Học AI</h1>
            <p className="text-slate-600 text-sm mt-1">
              Trò chuyện trực tiếp với 4 chuyên gia AI theo đúng chương trình KHTN THCS 2018.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Khối lớp:</span>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="text-sm font-bold text-slate-900 bg-transparent focus:outline-none"
              >
                <option value="6">Lớp 6</option>
                <option value="7">Lớp 7</option>
                <option value="8">Lớp 8</option>
                <option value="9">Lớp 9</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Môn:</span>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="text-sm font-bold text-slate-900 bg-transparent focus:outline-none"
              >
                <option value="Sinh học">Sinh học</option>
                <option value="Vật lí">Vật lí</option>
                <option value="Hóa học">Hóa học</option>
                <option value="Khoa học Trái Đất">Khoa học Trái Đất</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scientist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SCIENTISTS.map((sci) => {
            const isSelected = selectedScientist === sci.id;
            return (
              <div
                key={sci.id}
                onClick={() => handleSelectScientist(sci.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-cyan-50 border-cyan-500 shadow-md ring-2 ring-cyan-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-slate-100 shrink-0">{sci.avatar}</div>
                <div>
                  <h3 className={`text-sm font-bold ${isSelected ? 'text-cyan-900' : 'text-slate-900'}`}>
                    {sci.name}
                  </h3>
                  <div className="text-xs font-medium text-cyan-600">{sci.title}</div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{sci.specialty}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Interface with Active Scientist */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[650px]">
        {/* Chat Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl">
              {activeSci.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">{activeSci.name}</h2>
                <span className="text-[10px] bg-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded-full font-semibold">
                  Trực tuyến
                </span>
              </div>
              <p className="text-xs text-slate-300">{activeSci.title} — Lớp {grade} ({subject})</p>
            </div>
          </div>

          <button
            onClick={() => setMessages([{ role: 'model', text: `Chào em! Tôi là ${activeSci.name}. Em muốn tìm hiểu vấn đề gì hôm nay?` }])}
            className="px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
          >
            Làm mới hội thoại
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div key={idx} className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 ${
                  isUser ? 'bg-slate-900' : 'bg-cyan-600 shadow-md shadow-cyan-600/20'
                }`}>
                  {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>

                <div className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed ${
                  isUser
                    ? 'bg-slate-900 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-tl-xs'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-slate-500 text-sm flex items-center gap-2 shadow-xs">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-600" />
                <span>{activeSci.name} đang suy nghĩ và soạn câu trả lời chuẩn GDPT 2018...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Prompt Pills */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 shrink-0 pl-2">Gợi ý nhanh:</span>
          {suggestedQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => handleSend(sq)}
              className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 text-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200"
            >
              {sq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3">
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Hỏi ${activeSci.name} về chủ đề ${subject} lớp ${grade}...`}
            className="flex-1 px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !promptInput.trim()}
            className="px-5 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-md shadow-cyan-600/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Gửi</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
