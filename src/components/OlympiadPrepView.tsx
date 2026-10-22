import React, { useState } from 'react';
import { Award, BookOpen, CheckCircle2, ArrowRight, Play, RotateCcw, FileText, Sparkles, AlertCircle, XCircle } from 'lucide-react';
import { SUBJECTS, MOCK_QUESTIONS_BANK } from '../data/mockData';

export const OlympiadPrepView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedSubject, setSelectedSubject] = useState('Vật lí');
  const [selectedGrade, setSelectedGrade] = useState('8');
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState('Nâng cao');
  
  // Quiz state for Step 3 & 5
  const [questions, setQuestions] = useState<any[]>(MOCK_QUESTIONS_BANK);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  const fetchAIQuiz = async () => {
    setLoadingQuiz(true);
    try {
      const res = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          subject: selectedSubject, 
          grade: selectedGrade, 
          topic: 'Chuyên đề bồi dưỡng HSG KHTN', 
          count: questionCount, 
          difficulty 
        })
      });
      const data = await res.json();
      if (res.ok && data.questions) {
        setQuestions(data.questions);
        setCurrentQIndex(0);
        setUserAnswers({});
        setSubmitted(false);
      }
    } catch {
      // fallback to mock
    } finally {
      setLoadingQuiz(false);
    }
  };

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [qIdx]: optIdx });
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-slate-900 rounded-3xl text-white p-8 sm:p-12 shadow-xl">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            src="/src/assets/images/science_olympiad_banner_1792679704607.jpg"
            alt="Luyện thi HSG"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Award className="w-4 h-4" />
            <span>Hệ thống Luyện thi Học sinh Giỏi 5 Bước</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Chinh Phục Đỉnh Cao Khoa Học Tự Nhiên</h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Cấu hình số câu hỏi và để Trợ lý AI tự động biên soạn bộ đề ôn luyện chuẩn xác theo năng lực của bạn.
          </p>
        </div>
      </div>

      {/* 5 Steps Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { step: 1, title: '1. Cấu hình & Khảo sát', desc: 'Tùy chỉnh số câu & mức độ' },
          { step: 2, title: '2. Học chuyên đề', desc: 'Lý thuyết trọng tâm' },
          { step: 3, title: '3. Luyện bài tập AI', desc: 'Làm bài & nhận kết quả' },
          { step: 4, title: '4. Phân tích lời giải', desc: 'Chi tiết từng câu' },
          { step: 5, title: '5. Kiểm tra định kỳ', desc: 'Thi thử chuẩn HSG' }
        ].map((item) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(item.step as any)}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeStep === item.step
                ? 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/20'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`text-xs font-bold ${activeStep === item.step ? 'text-cyan-200' : 'text-cyan-600'}`}>
              Bước {item.step}
            </div>
            <div className="text-sm font-bold mt-1">{item.title}</div>
            <div className={`text-[11px] mt-0.5 ${activeStep === item.step ? 'text-slate-100' : 'text-slate-500'}`}>
              {item.desc}
            </div>
          </button>
        ))}
      </div>

      {/* Step Content Area */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl">
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-slate-900">Cấu Hình Bài Luyện Thi & Khảo Sát AI</h2>
              <p className="text-sm text-slate-600 mt-1">
                Tùy chọn môn học, khối lớp, mức độ khó và số lượng câu hỏi mong muốn. Trợ lý AI sẽ tự động tạo bộ đề độc quyền cho bạn.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Chọn Môn Học</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value="Sinh học">Sinh học</option>
                  <option value="Vật lí">Vật lí</option>
                  <option value="Hóa học">Hóa học</option>
                  <option value="Khoa học Trái Đất">Khoa học Trái Đất</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Khối Lớp</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value="6">Lớp 6</option>
                  <option value="7">Lớp 7</option>
                  <option value="8">Lớp 8</option>
                  <option value="9">Lớp 9</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Số lượng câu hỏi</label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value={5}>5 câu (Nhanh)</option>
                  <option value={10}>10 câu (Tiêu chuẩn)</option>
                  <option value={15}>15 câu (Nâng cao)</option>
                  <option value={20}>20 câu (Thử thách)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mức độ khó</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value="Cơ bản">Cơ bản</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Nâng cao">Nâng cao</option>
                  <option value="Vận dụng cao">Vận dụng cao (HSG)</option>
                </select>
              </div>
            </div>

            <button
              onClick={async () => {
                await fetchAIQuiz();
                setActiveStep(3);
              }}
              disabled={loadingQuiz}
              className="px-7 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-600/25 flex items-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              <span>{loadingQuiz ? 'Trợ lý AI đang tạo bộ đề...' : 'Tạo đề AI & Bắt đầu luyện tập ngay'}</span>
              {loadingQuiz ? <RotateCcw className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Học Chuyên Đề Nâng Cao</h2>
              <p className="text-sm text-slate-600 mt-1">
                Hệ thống chuyên đề bồi dưỡng học sinh giỏi được biên soạn theo chuẩn năng lực môn KHTN 2018.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Chuyên đề 1: Động học & Định luật Newton', subject: 'Vật lí 8', count: '6 bài học' },
                { title: 'Chuyên đề 2: Trao đổi chất & Chuyển hóa năng lượng', subject: 'Sinh học 7', count: '5 bài học' },
                { title: 'Chuyên đề 3: Tính toán theo phương trình hóa học', subject: 'Hóa học 8', count: '8 bài học' }
              ].map((cd, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2.5 py-1 rounded-md">{cd.subject}</span>
                    <h3 className="text-base font-bold text-slate-900 mt-3">{cd.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{cd.count} bao gồm lý thuyết, ví dụ và bài tập mẫu.</p>
                  </div>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                  >
                    Vào học chuyên đề
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeStep === 3 || activeStep === 5) && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {activeStep === 3 ? 'Luyện Bài Tập Nâng Cao (AI Generated)' : 'Kiểm Tra Định Kỳ & Thi Thử'}
                </h2>
                <p className="text-sm text-slate-600 mt-0.5">
                  Môn: {selectedSubject} — Lớp {selectedGrade} ({questions.length} câu hỏi | Mức độ: {difficulty})
                </p>
              </div>
              <button
                onClick={fetchAIQuiz}
                disabled={loadingQuiz}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-2 border border-slate-200"
              >
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>{loadingQuiz ? 'Đang tạo...' : 'Tạo đề AI mới'}</span>
              </button>
            </div>

            {loadingQuiz ? (
              <div className="py-24 text-center space-y-4 bg-slate-50 border border-slate-200 rounded-3xl">
                <RotateCcw className="w-10 h-10 animate-spin text-cyan-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Trợ lý AI đang soạn {questionCount} câu hỏi môn {selectedSubject}...</h3>
                <p className="text-xs text-slate-500">Đang tổng hợp các câu hỏi phân hóa cao theo đúng cấu trúc đề thi HSG.</p>
              </div>
            ) : !submitted ? (
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Câu hỏi {currentQIndex + 1} / {questions.length}</span>
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-bold">{difficulty}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
                    {questions[currentQIndex]?.question}
                  </h3>

                  <div className="space-y-3 pt-2">
                    {questions[currentQIndex]?.options.map((opt: string, optIdx: number) => {
                      const isSelected = userAnswers[currentQIndex] === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleSelectOption(currentQIndex, optIdx)}
                          className={`p-4 rounded-2xl border text-sm font-semibold cursor-pointer transition-all flex items-center gap-3.5 ${
                            isSelected
                              ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm ring-2 ring-cyan-500/20'
                              : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                            isSelected ? 'bg-cyan-600 text-white border-cyan-600' : 'border-slate-300 text-slate-500'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
                    disabled={currentQIndex === 0}
                    className="px-5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                  >
                    Câu trước
                  </button>

                  <div className="text-xs font-semibold text-slate-500">
                    Đã trả lời: {Object.keys(userAnswers).length} / {questions.length} câu
                  </div>

                  {currentQIndex < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQIndex(currentQIndex + 1)}
                      className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-sm font-bold shadow-md"
                    >
                      Câu tiếp theo
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/20 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Nộp bài & Xem tổng hợp kết quả</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Comprehensive Summary Report after submission */
              <div className="space-y-8 py-4">
                <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto text-3xl font-extrabold font-mono">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">Tổng Hợp Kết Quả Luyện Tập</h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto">
                    Môn: <strong className="text-white">{selectedSubject}</strong> — Khối {selectedGrade} ({difficulty})
                  </p>

                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-4 border-t border-slate-700">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <div className="text-xl font-bold font-mono text-emerald-400">{score}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Câu đúng</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <div className="text-xl font-bold font-mono text-rose-400">{questions.length - score}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Câu sai</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <div className="text-xl font-bold font-mono text-cyan-400">{questions.length}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Tổng số câu</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setUserAnswers({});
                      setCurrentQIndex(0);
                    }}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm shadow-md"
                  >
                    Làm lại bộ đề này
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl text-sm shadow-md flex items-center gap-2"
                  >
                    <span>Xem chi tiết giải thích</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Phân Tích Lời Giải Chi Tiết</h2>
              <p className="text-sm text-slate-600 mt-1">
                Xem lại giải thích từng bước, bản chất khoa học và đáp án chính xác cho từng câu hỏi trong đề.
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Câu {idx + 1}: {q.question}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Đúng' : 'Sai'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1">
                      <div>Lựa chọn của bạn: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-600'}>{userAns !== undefined ? q.options[userAns] : 'Chưa trả lời'}</strong></div>
                      {!isCorrect && <div>Đáp án đúng: <strong className="text-emerald-700">{q.options[q.correctIndex]}</strong></div>}
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                      <strong>Giải thích chi tiết:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
