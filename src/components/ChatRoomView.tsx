import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, Plus, Trash2, Bookmark, Sparkles, RefreshCw } from 'lucide-react';

export const ChatRoomView: React.FC = () => {
  const [sessions, setSessions] = useState([
    { id: '1', title: 'Quang hợp và hô hấp ở thực vật', subject: 'Sinh học', time: '10 phút trước' },
    { id: '2', title: 'Định luật Ohm và mạch điện', subject: 'Vật lí', time: 'Hôm qua' }
  ]);
  const [activeSessionId, setActiveSessionId] = useState('1');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'model'; text: string }>>([
    { role: 'user', text: 'Hãy giải thích quá trình quang hợp ở thực vật lớp 7.' },
    { role: 'model', text: 'Chào em! Quang hợp là quá trình thực vật sử dụng năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ từ nước và khí carbon dioxide...\n\n1. Trả lời trực tiếp: Quang hợp diễn ra ở lục lạp nhờ chất diệp lục.\n2. Phương trình: 6CO2 + 6H2O --(Ánh sáng)--> C6H12O6 + 6O2\n3. Ý nghĩa: Cung cấp O2 và thức ăn cho muôn loài.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputVal.trim()) return;
    const newMsgs = [...messages, { role: 'user' as const, text: inputVal }];
    setMessages(newMsgs);
    const q = inputVal;
    setInputVal('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scientistId: 'biologist', grade: '7', subject: 'Sinh học', prompt: q, history: messages })
      });
      const data = await res.json();
      if (res.ok) {
        setMessages([...newMsgs, { role: 'model', text: data.reply }]);
      } else {
        setMessages([...newMsgs, { role: 'model', text: 'Xin lỗi, không thể phản hồi lúc này.' }]);
      }
    } catch {
      setMessages([...newMsgs, { role: 'model', text: 'Lỗi kết nối mạng.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[700px]">
        
        {/* Left Sidebar: Sessions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Phòng Trò Chuyện</h3>
            <button
              onClick={() => {
                const newId = String(Date.now());
                setSessions([{ id: newId, title: 'Cuộc trò chuyện mới', subject: 'KHTN', time: 'Vừa xong' }, ...sessions]);
                setActiveSessionId(newId);
                setMessages([{ role: 'model', text: 'Xin chào! Hãy đặt câu hỏi bất kỳ về KHTN.' }]);
              }}
              className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Mới</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2">
            {sessions.map((s) => (
              <div
                key={s.id}
                onClick={() => setActiveSessionId(s.id)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  activeSessionId === s.id
                    ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-semibold'
                    : 'bg-white border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-xs font-semibold truncate">{s.title}</div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>{s.subject}</span>
                  <span>{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Chat Area */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col overflow-hidden">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Trợ Lý AI Khoa Học Tổng Hợp</h3>
                <p className="text-[11px] text-slate-300">Giải đáp chi tiết mọi thắc mắc KHTN THCS</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((m, idx) => {
              const isUser = m.role === 'user';
              return (
                <div key={idx} className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 ${
                    isUser ? 'bg-slate-900' : 'bg-cyan-600 shadow-md'
                  }`}>
                    {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    isUser ? 'bg-slate-900 text-white rounded-tr-xs' : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-tl-xs'
                  }`}>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                  </div>
                </div>
              );
            })}
            {loading && (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-slate-500 text-sm flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-600" />
                  <span>AI đang soạn câu trả lời...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập câu hỏi thảo luận..."
              className="flex-1 px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleSend}
              disabled={loading || !inputVal.trim()}
              className="px-5 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Gửi</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
