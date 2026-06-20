import { useState, useEffect } from 'react';
import { Play, Calendar, User, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { DailySessionLog } from './DailySessionLog';
import { PatientBanner } from '../PatientBanner';

interface SessionLogModuleProps {
  autoStart?: boolean;
  onExitAutoStart?: () => void;
  client?: { id: string; name: string; grade: string; support?: string };
}

export function SessionLogModule({ autoStart, onExitAutoStart, client }: SessionLogModuleProps) {
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  useEffect(() => {
    if (autoStart) {
      setIsSessionStarted(true);
    }
  }, [autoStart]);

  if (isSessionStarted) {
    return <DailySessionLog onExit={() => {
      setIsSessionStarted(false);
      onExitAutoStart?.();
    }} client={client} />;
  }

  const clientName = client?.name || "Manan Sarda";

  return (
    <div className="h-full flex flex-col bg-[#fafafa]">
      <PatientBanner 
        name={clientName} 
        id={`#${(client?.id || '0001').padStart(4, '0')}`} 
        dob="14 Aug 2017" 
        age={client ? client.grade : "8 yrs"} 
        diagnosis="Autism Spectrum Disorder" 
        status="Active" 
      />
      <div className="flex-1 overflow-y-auto w-full relative p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-emerald-900 px-8 py-10 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
              <div className="relative z-10">
                <h1 className="text-3xl font-serif font-bold mb-2">Today's Session</h1>
                <p className="text-emerald-100/80 font-medium">Capture evidence, track progress, and log your daily support.</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Session Setup</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">14 May 2026</p>
                        <p className="text-xs text-slate-500 font-medium">Therapist: Dhvani R.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">8:10 AM – 12:30 PM</p>
                        <p className="text-xs text-slate-500 font-medium">Scheduled Time</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Clinical Context</h2>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-emerald-700" />
                      <span className="text-sm font-bold text-slate-900">IEP Progress Mode</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                      Active IEP: November 2026 – April 2027
                    </p>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Priorities</span>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Comprehension access</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transition predictability</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Social participation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-slate-100">
                <button 
                  onClick={() => setIsSessionStarted(true)}
                  className="flex items-center gap-2 bg-emerald-800 text-white hover:bg-emerald-900 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm"
                >
                  <Play className="w-5 h-5" />
                  Start Session Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
