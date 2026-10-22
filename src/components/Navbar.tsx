import React from 'react';
import { Atom, Sparkles, BookOpen, MessageSquare, Award, Database, UserCheck, Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  userRole: 'student' | 'teacher';
  setUserRole: (role: 'student' | 'teacher') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, userRole, setUserRole }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Atom },
    { id: 'scientists', label: 'Nhà khoa học AI', icon: Sparkles },
    { id: 'chat', label: 'Phòng trò chuyện', icon: MessageSquare },
    { id: 'olympiad', label: 'Luyện thi HSG', icon: Award },
    { id: 'questions', label: 'Ngân hàng câu hỏi', icon: Database },
    { id: 'profile', label: 'Hồ sơ học tập', icon: UserCheck },
    ...(userRole === 'teacher' ? [{ id: 'teacher', label: 'Quản trị giáo viên', icon: Shield }] : [])
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setCurrentTab('home')}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
              <Atom className="w-7 h-7 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                KHTN Tương Tác
              </span>
              <span className="block text-[11px] text-cyan-700 font-bold -mt-0.5 tracking-wider uppercase">
                Trợ lý AI Nhà Khoa Học
              </span>
            </div>
          </div>

          {/* Zone 2: 4-5 prominent navigation items */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 text-xs sm:text-sm font-semibold ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 scale-105'
                      : 'bg-slate-50 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 border border-slate-200/80 hover:border-cyan-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-600'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action (Role toggle) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setUserRole(userRole === 'student' ? 'teacher' : 'student')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-md cursor-pointer ${
                userRole === 'teacher'
                  ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/25'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/25'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{userRole === 'teacher' ? 'Chế độ: Giáo viên' : 'Chế độ: Học sinh'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 border border-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-cyan-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
