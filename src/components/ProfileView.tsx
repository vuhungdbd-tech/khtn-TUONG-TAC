import React from 'react';
import { UserCheck, Award, BookOpen, CheckCircle2, TrendingUp, Flame, Shield } from 'lucide-react';

export const ProfileView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-4xl shadow-xl shadow-cyan-600/20">
          🧑‍🎓
        </div>
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Nguyễn Văn Hùng</h1>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-semibold">
              Học sinh Lớp 8A
            </span>
          </div>
          <p className="text-sm text-slate-600">Trường THCS Vùng Cao — Yêu thích môn Vật lí và Sinh học</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-xs font-semibold text-slate-500">
            <span>Tham gia: Tháng 10/2026</span>
            <span>·</span>
            <span>Tổng bài làm: 24 bài</span>
            <span>·</span>
            <span>Độ chính xác: 88.5%</span>
          </div>
        </div>
      </div>

      {/* Metrics & Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">18</div>
            <div className="text-xs text-slate-500 font-medium">Chủ đề đã hoàn thành</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">9.2 / 10</div>
            <div className="text-xs text-slate-500 font-medium">Điểm trung bình luyện thi</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">12 ngày</div>
            <div className="text-xs text-slate-500 font-medium">Chuỗi học tập liên tục</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">6 Huy hiệu</div>
            <div className="text-xs text-slate-500 font-medium">Thành tích khoa học</div>
          </div>
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Huy Hiệu & Thành Tích Đạt Được</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Nhà Khám Phá Tế Bào', desc: 'Hoàn thành xuất sắc chuyên đề Sinh học Lớp 6', icon: '🌱', date: '15/10/2026' },
            { title: 'Siêu Sao Vật Lí', desc: 'Đạt điểm tuyệt đối bài kiểm tra Cơ học', icon: '⚡', date: '18/10/2026' },
            { title: 'Bậc Thầy Cân Bằng Hóa Học', desc: 'Giải thành công 20 phương trình khó', icon: '🧪', date: '20/10/2026' }
          ].map((b, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center gap-4">
              <div className="text-3xl p-3 bg-white rounded-2xl shadow-xs">{b.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
                <span className="inline-block text-[10px] text-cyan-600 font-semibold mt-2">Đạt ngày {b.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
