import React, { useState } from 'react';
import { Shield, Users, BookOpen, Database, CheckCircle2, Plus, ArrowRight, Settings, BarChart3 } from 'lucide-react';

export const TeacherDashboardView: React.FC = () => {
  const [supabaseConnected, setSupabaseConnected] = useState(false);
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  const handleConnectSupabase = (e: React.FormEvent) => {
    e.preventDefault();
    if (supabaseUrl && supabaseKey) {
      setSupabaseConnected(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Teacher Dashboard Header */}
      <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Shield className="w-4 h-4" />
            <span>Bảng Điều Khiển Giáo Viên & Quản Trị</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Quản Lý Lớp Học & Tiến Độ Học Sinh</h1>
          <p className="text-sm text-slate-300 mt-1">Theo dõi kết quả luyện thi, quản lý ngân hàng câu hỏi và cấu hình cơ sở dữ liệu Supabase.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 bg-white/10 rounded-xl backdrop-blur-md text-xs font-semibold">
            Trạng thái DB: <span className={supabaseConnected ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {supabaseConnected ? 'Đã kết nối Supabase' : 'Chế độ Cục bộ (Demo)'}
            </span>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">42 học sinh</div>
            <div className="text-xs text-slate-500 font-medium">Lớp 8A - Vùng cao</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">12 chuyên đề</div>
            <div className="text-xs text-slate-500 font-medium">Đã giao cho học sinh</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">86.4%</div>
            <div className="text-xs text-slate-500 font-medium">Tỷ lệ hoàn thành bài tập</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-slate-900">150+ câu hỏi</div>
            <div className="text-xs text-slate-500 font-medium">Trong ngân hàng đã duyệt</div>
          </div>
        </div>
      </div>

      {/* Supabase Configuration Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Cấu Hình Kết Nối Supabase PostgreSQL</h2>
            <p className="text-xs text-slate-500">Đồng bộ dữ liệu học sinh, điểm số và ngân hàng câu hỏi trên đám mây dùng chung.</p>
          </div>
        </div>

        {supabaseConnected ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-emerald-900">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold">Đã kết nối thành công với cơ sở dữ liệu Supabase PostgreSQL.</span>
            </div>
            <button
              onClick={() => setSupabaseConnected(false)}
              className="text-xs font-semibold text-rose-600 hover:underline"
            >
              Ngắt kết nối
            </button>
          </div>
        ) : (
          <form onSubmit={handleConnectSupabase} className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Supabase Project URL</label>
              <input
                type="text"
                value={supabaseUrl}
                onChange={(e) => setSupabaseUrl(e.target.value)}
                placeholder="https://xyzproject.supabase.co"
                required
                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Supabase Anon / Service Key</label>
              <input
                type="password"
                value={supabaseKey}
                onChange={(e) => setSupabaseKey(e.target.value)}
                placeholder="eyJhbGciOi..."
                required
                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-md"
            >
              Kết nối Supabase ngay
            </button>
          </form>
        )}
      </div>

      {/* Class Students Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Danh Sách Học Sinh Lớp 8A</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                <th className="p-4">Họ và tên</th>
                <th className="p-4">Điểm trung bình KHTN</th>
                <th className="p-4">Số bài hoàn thành</th>
                <th className="p-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { name: 'Nguyễn Văn Hùng', score: '9.2', count: '24', status: 'Đang tiến bộ' },
                { name: 'Lò Thị Mai', score: '8.8', count: '21', status: 'Tích cực' },
                { name: 'Vàng A Lử', score: '8.5', count: '19', status: 'Tích cực' },
                { name: 'Giàng Thị Mua', score: '9.0', count: '22', status: 'Đang tiến bộ' }
              ].map((st, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{st.name}</td>
                  <td className="p-4 font-mono font-semibold text-cyan-700">{st.score}</td>
                  <td className="p-4 font-mono">{st.count} bài</td>
                  <td className="p-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {st.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
