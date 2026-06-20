/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { ObservationModule } from './components/observation/ObservationModule';
import { IEPModule } from './components/iep/IEPModule';
import { SessionLogModule } from './components/session_log/SessionLogModule';
import { MonthlyReportModule } from './components/monthly_report/MonthlyReportModule';
import { ProgressReportModule } from './components/progress_report/ProgressReportModule';
import { CaseFileModule } from './components/case_file/CaseFileModule';
import { ReportHistory } from './components/reports/ReportHistory';
import { ClipboardList } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('cases');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeClient, setActiveClient] = useState({ id: 'manan', name: 'Manan Sarda', grade: 'Grade 4' });

  return (
    <div className="flex h-[100dvh] bg-[#F8F7F4] text-slate-800 font-sans">
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <Sidebar 
        activeNav={activeNav} 
        onNavigate={(nav) => {
          setActiveNav(nav);
          setIsMobileMenuOpen(false);
        }} 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-[100dvh]">
        <TopHeader 
          onMenuClick={() => setIsMobileMenuOpen(true)} 
          onNavigate={setActiveNav} 
          activeClient={activeClient}
          onClientChange={setActiveClient}
        />
        
        <main className="flex-1 overflow-y-auto w-full relative h-[100dvh]">
          {activeNav === 'cases' ? (
            <CaseFileModule onNavigate={setActiveNav} client={activeClient} />
          ) : activeNav === 'observation-report' ? (
            <ObservationModule onNavigate={setActiveNav} client={activeClient} />
          ) : activeNav === 'clinical-plan' ? (
            <IEPModule onNavigate={setActiveNav} client={activeClient} />
          ) : activeNav === 'sessions' ? (
            <SessionLogModule client={activeClient} />
          ) : activeNav === 'start-session' ? (
            <SessionLogModule autoStart={true} onExitAutoStart={() => setActiveNav('sessions')} client={activeClient} />
          ) : activeNav === 'monthly-report' ? (
            <MonthlyReportModule onNavigate={setActiveNav} client={activeClient} />
          ) : activeNav === 'progress-review' ? (
            <ProgressReportModule onNavigate={setActiveNav} client={activeClient} />
          ) : activeNav === 'report-history' ? (
            <ReportHistory client={activeClient} />
          ) : (
            <div className="p-8 flex flex-col items-center justify-center h-full text-slate-400 gap-4">
              <ClipboardList className="w-12 h-12 text-slate-300" />
              <p className="text-lg">Module "{activeNav}" is under construction.</p>
              <p className="text-sm">Check out "Observation Report", "Clinical Plan", or "Sessions".</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
