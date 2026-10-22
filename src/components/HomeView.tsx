import React from 'react';
import { Atom, Sparkles, BookOpen, MessageSquare, Award, ArrowRight, CheckCircle2, Flame, Compass, GraduationCap } from 'lucide-react';
import { SUBJECTS, SCIENTISTS } from '../data/mockData';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  setSelectedScientist: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentTab, setSelectedScientist }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section with High-Fidelity Scientific Illustration */}
      <section className="relative overflow-hidden bg-slate-950 rounded-3xl text-white shadow-2xl mx-4 sm:mx-6 lg:mx-8 mt-6 border border-slate-800">
        <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
          <img
            src="/src/assets/images/science_hero_banner_v2_1792681055301.jpg"
            alt="KHTN Tương Tác"
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-20 lg:py-32 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Chương trình Giáo dục Phổ thông 2018</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            KHTN Tương Tác – Trợ Lý AI Nhập Vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Các Nhà Khoa Học</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Khám phá đỉnh cao Sinh học, Vật lí, Hóa học và Khoa học Trái Đất cùng 4 chuyên gia AI hàng đầu. Thiết kế chuyên sâu cho học sinh THCS, khơi nguồn đam mê sáng tạo khoa học.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setCurrentTab('scientists')}
              className="px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl shadow-cyan-500/30 flex items-center gap-2.5 text-sm sm:text-base cursor-pointer scale-105"
            >
              <span>Trò chuyện với Nhà khoa học AI</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentTab('olympiad')}
              className="px-7 py-4 bg-slate-900/80 hover:bg-slate-900 text-white font-semibold rounded-2xl border border-slate-700 transition-all backdrop-blur-md flex items-center gap-2.5 text-sm sm:text-base cursor-pointer shadow-lg"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span>Luyện thi HSG & Kiểm tra</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80 w-full mt-6 text-left">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">Lớp 6–9</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Toàn bộ CT KHTN 2018</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">4 Chuyên gia</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Nhập vai AI khoa học</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">5 Bước</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Luyện thi HSG chuẩn</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-violet-400">Tương tác</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Phản hồi siêu tốc</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 AI Scientists Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Gặp gỡ 4 Nhà Khoa Học AI Chuyên Sâu</h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
            Chọn chuyên gia AI để đặt câu hỏi, giải đáp thắc mắc và khám phá thí nghiệm khoa học theo từng lĩnh vực.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCIENTISTS.map((sci) => (
            <div
              key={sci.id}
              onClick={() => {
                setSelectedScientist(sci.id);
                setCurrentTab('scientists');
              }}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-md hover:shadow-2xl hover:border-cyan-400 transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {sci.avatar}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {sci.name}
                </h3>
                <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mt-0.5">
                  {sci.title}
                </div>
                <p className="text-xs text-slate-500 mt-3 line-clamp-3 leading-relaxed">
                  {sci.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700">
                <span>Vào phòng hỏi đáp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Curriculums Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Khám phá 4 Môn Khoa Học Tự Nhiên</h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
            Hệ thống kiến thức chuẩn từ lớp 6 đến lớp 9 với các chủ đề trọng tâm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUBJECTS.map((sub) => (
            <div key={sub.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-cyan-600/20">
                  <Atom className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{sub.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{sub.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {sub.topics.map((t) => (
                  <div key={t.id} className="bg-slate-50 hover:bg-cyan-50/50 p-4 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-all flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2.5 py-0.5 rounded-md">
                        {t.grade}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1.5">{t.title}</h4>
                    </div>
                    <button
                      onClick={() => setCurrentTab('olympiad')}
                      className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      <span>Ôn tập</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
