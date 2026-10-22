/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ScientistsView } from './components/ScientistsView';
import { ChatRoomView } from './components/ChatRoomView';
import { OlympiadPrepView } from './components/OlympiadPrepView';
import { QuestionBankView } from './components/QuestionBankView';
import { ProfileView } from './components/ProfileView';
import { TeacherDashboardView } from './components/TeacherDashboardView';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedScientist, setSelectedScientist] = useState('biologist');
  const [userRole, setUserRole] = useState<'student' | 'teacher'>('student');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userRole={userRole}
        setUserRole={setUserRole}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            setCurrentTab={setCurrentTab}
            setSelectedScientist={setSelectedScientist}
          />
        )}
        {currentTab === 'scientists' && (
          <ScientistsView
            selectedScientist={selectedScientist}
            setSelectedScientist={setSelectedScientist}
            setCurrentTab={setCurrentTab}
          />
        )}
        {currentTab === 'chat' && <ChatRoomView />}
        {currentTab === 'olympiad' && <OlympiadPrepView />}
        {currentTab === 'questions' && <QuestionBankView />}
        {currentTab === 'profile' && <ProfileView />}
        {currentTab === 'teacher' && <TeacherDashboardView />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-300">
            KHTN TƯƠNG TÁC – TRỢ LÝ AI NHẬP VAI CÁC NHÀ KHOA HỌC
          </p>
          <p>
            Phục vụ học tập môn Khoa học Tự nhiên THCS (Lớp 6–9) theo Chương trình Giáo dục phổ thông 2018. Tối ưu cho giáo viên và học sinh vùng cao.
          </p>
          <p className="text-slate-400 pt-2 font-medium">
            Ứng dụng được phát triển bởi tổ KHTN-Trường PTDTBT THCS Pu Nhi- xã Pu Nhi- Tỉnh Điện Biên
          </p>
        </div>
      </footer>
    </div>
  );
}
