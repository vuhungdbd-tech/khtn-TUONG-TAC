import React, { useState } from 'react';
import { Database, Plus, Search, Filter, CheckCircle2, Trash2, Edit3, Download, Sparkles } from 'lucide-react';
import { MOCK_QUESTIONS_BANK } from '../data/mockData';

export const QuestionBankView: React.FC = () => {
  const [questions, setQuestions] = useState(MOCK_QUESTIONS_BANK);
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('Tất cả');
  const [gradeFilter, setGradeFilter] = useState('Tất cả');
  const [newModalOpen, setNewModalOpen] = useState(false);

  // New question form state
  const [newQ, setNewQ] = useState({
    subject: 'Sinh học',
    grade: 'Lớp 8',
    topic: 'Chủ đề chung',
    difficulty: 'Trung bình',
    question: '',
    options: ['', '', '', ''],
    correctIndex: 0,
    explanation: '',
    creator: 'Giáo viên'
  });

  const handleAddQuestion = () => {
    if (!newQ.question.trim()) return;
    setQuestions([
      {
        id: `q_${Date.now()}`,
        ...newQ,
        status: 'Đã duyệt'
      },
      ...questions
    ]);
    setNewQ({
      subject: 'Sinh học',
      grade: 'Lớp 8',
      topic: 'Chủ đề chung',
      difficulty: 'Trung bình',
      question: '',
      options: ['', '', '', ''],
      correctIndex: 0,
      explanation: '',
      creator: 'Giáo viên'
    });
    setNewModalOpen(false);
  };

  const filteredQuestions = questions.filter(q => {
    const matchSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSub = subjectFilter === 'Tất cả' || q.subject === subjectFilter;
    const matchGrade = gradeFilter === 'Tất cả' || q.grade === gradeFilter;
    return matchSearch && matchSub && matchGrade;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Ngân Hàng Câu Hỏi Khoa Học</h1>
          <p className="text-sm text-slate-600 mt-1">
            Quản lý, phân loại và duyệt hệ thống câu hỏi trắc nghiệm & tự luận KHTN 6-9.
          </p>
        </div>

        <button
          onClick={() => setNewModalOpen(true)}
          className="px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm câu hỏi mới</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm nội dung câu hỏi..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700"
          >
            <option value="Tất cả">Tất cả môn</option>
            <option value="Sinh học">Sinh học</option>
            <option value="Vật lí">Vật lí</option>
            <option value="Hóa học">Hóa học</option>
            <option value="Khoa học Trái Đất">Khoa học Trái Đất</option>
          </select>

          <select
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700"
          >
            <option value="Tất cả">Tất cả lớp</option>
            <option value="Lớp 6">Lớp 6</option>
            <option value="Lớp 7">Lớp 7</option>
            <option value="Lớp 8">Lớp 8</option>
            <option value="Lớp 9">Lớp 9</option>
          </select>
        </div>
      </div>

      {/* Questions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                <th className="p-4">Môn & Lớp</th>
                <th className="p-4">Nội dung câu hỏi</th>
                <th className="p-4">Độ khó</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredQuestions.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 whitespace-nowrap">
                    <span className="font-bold text-slate-900">{q.subject}</span>
                    <span className="block text-xs text-cyan-600 font-semibold">{q.grade}</span>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-900 line-clamp-2">{q.question}</div>
                    <div className="text-xs text-slate-400 mt-1">Chủ đề: {q.topic}</div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {q.difficulty}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {q.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setQuestions(questions.filter(item => item.id !== q.id))}
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Question */}
      {newModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-900">Thêm Câu Hỏi Mới vào Ngân Hàng</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Môn học</label>
                <select
                  value={newQ.subject}
                  onChange={(e) => setNewQ({ ...newQ, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm"
                >
                  <option value="Sinh học">Sinh học</option>
                  <option value="Vật lí">Vật lí</option>
                  <option value="Hóa học">Hóa học</option>
                  <option value="Khoa học Trái Đất">Khoa học Trái Đất</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Khối lớp</label>
                <select
                  value={newQ.grade}
                  onChange={(e) => setNewQ({ ...newQ, grade: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm"
                >
                  <option value="Lớp 6">Lớp 6</option>
                  <option value="Lớp 7">Lớp 7</option>
                  <option value="Lớp 8">Lớp 8</option>
                  <option value="Lớp 9">Lớp 9</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nội dung câu hỏi</label>
              <textarea
                value={newQ.question}
                onChange={(e) => setNewQ({ ...newQ, question: e.target.value })}
                rows={3}
                placeholder="Nhập nội dung câu hỏi khoa học..."
                className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-700">Các phương án trả lời</label>
              {newQ.options.map((opt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="correctOpt"
                    checked={newQ.correctIndex === i}
                    onChange={() => setNewQ({ ...newQ, correctIndex: i })}
                  />
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const opts = [...newQ.options];
                      opts[i] = e.target.value;
                      setNewQ({ ...newQ, options: opts });
                    }}
                    placeholder={`Phương án ${String.fromCharCode(65 + i)}`}
                    className="flex-1 px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Lời giải chi tiết</label>
              <textarea
                value={newQ.explanation}
                onChange={(e) => setNewQ({ ...newQ, explanation: e.target.value })}
                rows={2}
                placeholder="Giải thích tại sao đáp án đó đúng..."
                className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setNewModalOpen(false)}
                className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-semibold rounded-xl text-sm"
              >
                Hủy
              </button>
              <button
                onClick={handleAddQuestion}
                className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl text-sm shadow-md"
              >
                Lưu câu hỏi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
