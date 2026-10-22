import React, { useState, useEffect } from 'react';
import { Award, BookOpen, CheckCircle2, ArrowRight, Play, RotateCcw, FileText, Sparkles, AlertCircle, XCircle, Filter, Compass, Flame, ShieldCheck } from 'lucide-react';
import { getQuestionsBySubjectAndLevel, QuestionItem, normalizeSubject, normalizeDifficulty } from '../data/quizBank';

const SUBJECT_LIST = [
  { id: 'Sinh học', name: 'Sinh học', icon: '🌿', color: 'emerald', bg: 'bg-emerald-500/10 text-emerald-700 border-emerald-300' },
  { id: 'Vật lí', name: 'Vật lí', icon: '⚡', color: 'sky', bg: 'bg-sky-500/10 text-sky-700 border-sky-300' },
  { id: 'Hóa học', name: 'Hóa học', icon: '🧪', color: 'violet', bg: 'bg-violet-500/10 text-violet-700 border-violet-300' },
  { id: 'Khoa học Trái Đất', name: 'Khoa học Trái Đất', icon: '🌍', color: 'amber', bg: 'bg-amber-500/10 text-amber-700 border-amber-300' },
];

const DIFFICULTY_LEVELS = [
  { 
    id: 'Cơ bản', 
    name: 'Cơ bản', 
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: 'Nhận biết & Thông hiểu: khái niệm cốt lõi, định nghĩa, định luật nền tảng CT GDPT 2018.' 
  },
  { 
    id: 'Vận dụng', 
    name: 'Vận dụng', 
    badge: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: 'Vận dụng kiến thức, tính toán cơ bản và giải thích các hiện tượng khoa học thực tế.' 
  },
  { 
    id: 'Nâng cao', 
    name: 'Nâng cao', 
    badge: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: 'Tư duy tổng hợp, so sánh hiện tượng, bài tập logic phân loại điểm 8-9.' 
  },
  { 
    id: 'Chuyên đề ôn HSG', 
    name: 'Chuyên đề ôn HSG', 
    badge: 'bg-amber-100 text-amber-800 border-amber-400',
    desc: 'Đề thi chọn Học sinh Giỏi cấp huyện/tỉnh, câu hỏi thực nghiệm & tình huống khoa học sâu sắc.' 
  },
];

export const OlympiadPrepView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedSubject, setSelectedSubject] = useState('Vật lí');
  const [selectedGrade, setSelectedGrade] = useState('8');
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState<'Cơ bản' | 'Vận dụng' | 'Nâng cao' | 'Chuyên đề ôn HSG'>('Nâng cao');
  
  // Quiz state for Step 3 & 5
  const [questions, setQuestions] = useState<QuestionItem[]>(() => 
    getQuestionsBySubjectAndLevel('Vật lí', '8', 'Nâng cao', 5)
  );
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  // Synchronize initial or updated questions strictly based on user filters
  const loadQuiz = async (sub = selectedSubject, gr = selectedGrade, diff = difficulty, count = questionCount) => {
    setLoadingQuiz(true);
    // Instant fallback guarantee: never empty, never cross-subject
    const localCurriculum = getQuestionsBySubjectAndLevel(sub, gr, diff, count);
    setQuestions(localCurriculum);
    setCurrentQIndex(0);
    setUserAnswers({});
    setSubmitted(false);

    try {
      const res = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          subject: sub, 
          grade: gr, 
          topic: `Chuyên đề ${sub} bồi dưỡng KHTN 2018`, 
          count: count, 
          difficulty: diff 
        })
      });
      const data = await res.json();
      if (res.ok && Array.isArray(data.questions) && data.questions.length > 0) {
        // Validate that returned questions match the requested subject
        const validSubject = data.questions.filter((q: any) => 
          normalizeSubject(q.subject || sub) === normalizeSubject(sub)
        );
        if (validSubject.length > 0) {
          setQuestions(validSubject);
        }
      }
    } catch {
      // Local curriculum bank already in place
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

  // Change subject and reload
  const handleSwitchSubject = (sub: string) => {
    setSelectedSubject(sub);
    loadQuiz(sub, selectedGrade, difficulty, questionCount);
  };

  // Change difficulty and reload
  const handleSwitchDifficulty = (diff: 'Cơ bản' | 'Vận dụng' | 'Nâng cao' | 'Chuyên đề ôn HSG') => {
    setDifficulty(diff);
    loadQuiz(selectedSubject, selectedGrade, diff, questionCount);
  };

  // Change grade and reload
  const handleSwitchGrade = (gr: string) => {
    setSelectedGrade(gr);
    loadQuiz(selectedSubject, gr, difficulty, questionCount);
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
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Award className="w-4 h-4" />
            <span>Hệ Thống Luyện Thi Học Sinh Giỏi KHTN 2018 - 4 Mức Độ Phân Hóa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Chinh Phục Đỉnh Cao Khoa Học Tự Nhiên
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phân định rõ ràng 4 môn học (Sinh học, Vật lí, Hóa học, Khoa học Trái Đất) cùng 4 mức độ: 
            <strong> Cơ bản, Vận dụng, Nâng cao, Chuyên đề ôn HSG</strong>. AI đồng hành biên soạn đề chuẩn mực.
          </p>
        </div>
      </div>

      {/* 5 Steps Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { step: 1, title: '1. Cấu hình & Khảo sát', desc: 'Chọn môn & 4 mức độ' },
          { step: 2, title: '2. Học chuyên đề', desc: 'Lý thuyết trọng tâm' },
          { step: 3, title: '3. Luyện bài tập AI', desc: 'Làm bài & tương tác trực tiếp' },
          { step: 4, title: '4. Phân tích lời giải', desc: 'Chi tiết từng phương án' },
          { step: 5, title: '5. Kiểm tra định kỳ', desc: 'Thi thử chuẩn đề HSG' }
        ].map((item) => (
          <button
            key={item.step}
            onClick={() => {
              setActiveStep(item.step as any);
              if (item.step === 3 || item.step === 5) {
                if (questions.length === 0 || questions[0]?.subject !== selectedSubject) {
                  loadQuiz();
                }
              }
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
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
        {/* ================= STEP 1 ================= */}
        {activeStep === 1 && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Cấu Hình Đề Luyện Thi Khoa Học Tự Nhiên
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Lựa chọn chính xác môn học, khối lớp và mức độ tư duy. Hệ thống đảm bảo phân môn rành mạch, không trùng lẫn kiến thức.
              </p>
            </div>

            {/* Subject Selection Tabs */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Chọn Phân Môn Khoa Học Tự Nhiên
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SUBJECT_LIST.map((sub) => {
                  const isSelected = selectedSubject === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubject(sub.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-950 ring-2 ring-cyan-500/30 font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700'
                      }`}
                    >
                      <span className="text-2xl">{sub.icon}</span>
                      <div>
                        <div className="text-sm font-bold">{sub.name}</div>
                        <div className="text-[11px] text-slate-500">Phân môn KHTN</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4 Difficulty Levels */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Phân Biệt 4 Mức Độ Đánh Giá Năng Lực
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {DIFFICULTY_LEVELS.map((diff) => {
                  const isSelected = difficulty === diff.id;
                  return (
                    <div
                      key={diff.id}
                      onClick={() => setDifficulty(diff.id as any)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/80 shadow-md ring-2 ring-cyan-500/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${diff.badge}`}>
                            {diff.name}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-600" />}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-2">
                          {diff.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grade & Question Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">3. Khối Lớp Học</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value="6">Lớp 6 (KHTN Khám phá thế giới tự nhiên)</option>
                  <option value="7">Lớp 7 (KHTN Chuyển hóa & Tốc độ)</option>
                  <option value="8">Lớp 8 (KHTN Áp suất, Phản ứng hóa học, Tuần hoàn)</option>
                  <option value="9">Lớp 9 (KHTN Điện, Di truyền học, Hợp chất hữu cơ)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">4. Số Lượng Câu Hỏi</label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold"
                >
                  <option value={5}>5 câu hỏi (Luyện nhanh 10 phút)</option>
                  <option value={10}>10 câu hỏi (Tiêu chuẩn 20 phút)</option>
                  <option value={15}>15 câu hỏi (Chuyên sâu 35 phút)</option>
                  <option value={20}>20 câu hỏi (Thử thách đề thi hoàn chỉnh)</option>
                </select>
              </div>
            </div>

            {/* Start Button */}
            <div className="pt-2">
              <button
                onClick={async () => {
                  await loadQuiz(selectedSubject, selectedGrade, difficulty, questionCount);
                  setActiveStep(3);
                }}
                disabled={loadingQuiz}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-600/25 flex items-center gap-3 cursor-pointer text-base"
              >
                <Sparkles className="w-5 h-5" />
                <span>
                  {loadingQuiz 
                    ? `Đang biên soạn đề ${selectedSubject}...` 
                    : `Tạo Đề AI Môn ${selectedSubject} (${difficulty}) & Bắt Đầu`}
                </span>
                {loadingQuiz ? <RotateCcw className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: CHUYÊN ĐỀ ================= */}
        {activeStep === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Học Chuyên Đề Bồi Dưỡng KHTN 2018</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Hệ thống chuyên đề trọng điểm 4 phân môn phục vụ các kì thi chọn học sinh giỏi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  subject: 'Sinh học', 
                  icon: '🌿', 
                  title: 'Di truyền & Cân bằng nội môi', 
                  desc: 'Quy luật Mendel, đột biến NST, cơ chế điều hòa hô hấp và chức năng thận.',
                  grade: 'Lớp 8-9',
                  count: '8 bài học'
                },
                { 
                  subject: 'Vật lí', 
                  icon: '⚡', 
                  title: 'Áp suất, Archimedes & Mạch điện', 
                  desc: 'Bình thông nhau, mạch cầu Wheastone, đòn bẩy và quang hình học thấu kính.',
                  grade: 'Lớp 8-9',
                  count: '10 bài học'
                },
                { 
                  subject: 'Hóa học', 
                  icon: '🧪', 
                  title: 'Kim loại, Acid & Hợp chất hữu cơ', 
                  desc: 'Tăng giảm khối lượng thanh kim loại, khử oxide bằng CO, xác định CTPT.',
                  grade: 'Lớp 8-9',
                  count: '9 bài học'
                },
                { 
                  subject: 'Khoa học Trái Đất', 
                  icon: '🌍', 
                  title: 'Kiến tạo mảng & Khí quyển', 
                  desc: 'Vành đai lửa, lực Coriolis, biến đổi khí hậu toàn cầu và chu kì thiên văn.',
                  grade: 'Lớp 6-9',
                  count: '7 bài học'
                }
              ].map((cd, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:border-cyan-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{cd.icon}</span>
                      <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2.5 py-0.5 rounded-full">{cd.grade}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-500 mt-2">{cd.subject}</div>
                    <h3 className="text-base font-bold text-slate-900 mt-1">{cd.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{cd.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSubject(cd.subject);
                      loadQuiz(cd.subject, selectedGrade, 'Chuyên đề ôn HSG', questionCount);
                      setActiveStep(3);
                    }}
                    className="mt-5 w-full py-2.5 bg-slate-900 hover:bg-cyan-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Luyện chuyên đề này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 3 & STEP 5: LUYỆN BÀI TẬP & KIỂM TRA ================= */}
        {(activeStep === 3 || activeStep === 5) && (
          <div className="space-y-6">
            {/* Quick Switch Toolbar on Step 3 & 5 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span>{activeStep === 3 ? 'Luyện Bài Tập AI Theo Môn & Mức Độ' : 'Đề Kiểm Tra Định Kỳ & Thi Thử HSG'}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                      {questions.length} câu hỏi
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Chuyển nhanh phân môn và mức độ ngay bên dưới để AI cập nhật bộ đề tương ứng.
                  </p>
                </div>

                <button
                  onClick={() => loadQuiz(selectedSubject, selectedGrade, difficulty, questionCount)}
                  disabled={loadingQuiz}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 self-start lg:self-auto"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${loadingQuiz ? 'animate-spin' : ''}`} />
                  <span>{loadingQuiz ? 'Đang tạo bộ đề...' : 'Tạo đề mới'}</span>
                </button>
              </div>

              {/* Subject Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 mr-1">Môn học:</span>
                {SUBJECT_LIST.map((sub) => {
                  const isActive = selectedSubject === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => handleSwitchSubject(sub.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                        isActive
                          ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{sub.icon}</span>
                      <span>{sub.name}</span>
                    </button>
                  );
                })}

                <div className="h-4 w-px bg-slate-300 mx-2 hidden sm:block" />

                <span className="text-xs font-bold text-slate-500 mr-1">Lớp:</span>
                {['6', '7', '8', '9'].map((gr) => (
                  <button
                    key={gr}
                    onClick={() => handleSwitchGrade(gr)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedGrade === gr
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Lớp {gr}
                  </button>
                ))}
              </div>

              {/* Difficulty Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 mr-1">Mức độ:</span>
                {DIFFICULTY_LEVELS.map((diff) => {
                  const isActive = difficulty === diff.id;
                  return (
                    <button
                      key={diff.id}
                      onClick={() => handleSwitchDifficulty(diff.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {diff.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quiz Content */}
            {loadingQuiz ? (
              <div className="py-20 text-center space-y-4 bg-slate-50 border border-slate-200 rounded-3xl">
                <RotateCcw className="w-10 h-10 animate-spin text-cyan-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  Đang khởi tạo câu hỏi môn {selectedSubject} - Mức độ {difficulty}...
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Hệ thống phân lập nội dung kiến thức chuẩn xác theo chương trình GDPT 2018.
                </p>
              </div>
            ) : questions.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-slate-50 rounded-3xl border border-slate-200">
                <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                <p className="text-sm font-semibold text-slate-700">Chưa tải được câu hỏi cho phân môn này.</p>
                <button
                  onClick={() => loadQuiz()}
                  className="px-5 py-2 bg-cyan-600 text-white rounded-xl text-xs font-bold"
                >
                  Tải lại câu hỏi
                </button>
              </div>
            ) : !submitted ? (
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6">
                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500 pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">Câu hỏi {currentQIndex + 1} / {questions.length}</span>
                      <span className="bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md font-semibold">
                        Môn: {questions[currentQIndex]?.subject || selectedSubject}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-bold">
                        {questions[currentQIndex]?.difficulty || difficulty}
                      </span>
                      {questions[currentQIndex]?.topic && (
                        <span className="hidden sm:inline-block text-slate-500 text-[11px]">
                          ({questions[currentQIndex]?.topic})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    {questions[currentQIndex]?.question}
                  </h3>

                  {/* Options */}
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
                          <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                            isSelected ? 'bg-cyan-600 text-white border-cyan-600' : 'border-slate-300 text-slate-500 bg-slate-50'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span className="leading-snug">{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
                    disabled={currentQIndex === 0}
                    className="px-5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
                  >
                    Câu trước
                  </button>

                  <div className="text-xs font-semibold text-slate-500">
                    Đã hoàn thành: <strong className="text-cyan-700">{Object.keys(userAnswers).length}</strong> / {questions.length} câu
                  </div>

                  {currentQIndex < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQIndex(currentQIndex + 1)}
                      className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-sm font-bold shadow-md cursor-pointer"
                    >
                      Câu tiếp theo
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Nộp bài & Xem kết quả</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Summary Report */
              <div className="space-y-8 py-4">
                <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto text-3xl font-extrabold font-mono">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">Kết Quả Luyện Tập {selectedSubject}</h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto">
                    Môn: <strong className="text-white">{selectedSubject}</strong> — Lớp {selectedGrade} (Mức độ: {difficulty})
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

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setUserAnswers({});
                      setCurrentQIndex(0);
                    }}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm shadow-md cursor-pointer"
                  >
                    Làm lại bộ đề này
                  </button>
                  <button
                    onClick={() => loadQuiz(selectedSubject, selectedGrade, difficulty, questionCount)}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Tạo bộ đề mới cùng mức độ</span>
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl text-sm shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Xem chi tiết lời giải</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= STEP 4: PHÂN TÍCH LỜI GIẢI ================= */}
        {activeStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Phân Tích Lời Giải Chi Tiết</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Môn: <strong className="text-cyan-700">{selectedSubject}</strong> | Mức độ: <strong className="text-purple-700">{difficulty}</strong> (Lớp {selectedGrade})
                </p>
              </div>
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl"
              >
                Quay lại làm bài
              </button>
            </div>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-800">
                        Câu {idx + 1}: {q.question}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shrink-0 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Đúng' : 'Chưa đúng'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1 pt-1">
                      <div>Lựa chọn của bạn: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-600'}>{userAns !== undefined ? q.options[userAns] : 'Chưa trả lời'}</strong></div>
                      {!isCorrect && <div>Đáp án đúng: <strong className="text-emerald-700">{q.options[q.correctIndex]}</strong></div>}
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-cyan-800">Bản chất khoa học & Giải thích:</strong> {q.explanation}
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
