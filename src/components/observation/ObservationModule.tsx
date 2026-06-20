import { useState } from "react";
import { Plus, Search, FileText, CheckCircle2, Clock, MapPin, Target, Settings, ChevronRight, X } from "lucide-react";
import { ClinicalBrainPanel } from "./ClinicalBrainPanel";
import { ObservationMainContent } from "./ObservationMainContent";
import { TopHeader } from "./TopHeader";
import { CLIENTS } from "../TopHeader";

export function ObservationModule({ onNavigate, client }: { onNavigate?: (nav: string) => void, client?: { id: string; name: string; grade: string; support?: string } }) {
  const [view, setView] = useState<'dashboard' | 'report'>('dashboard');
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Create Modal state
  const [selectedCase, setSelectedCase] = useState(client ? client.id : "manan");
  const [periodStart, setPeriodStart] = useState("2026-05-05");
  const [periodEnd, setPeriodEnd] = useState("2026-05-23");

  const handleCreate = () => {
    setShowCreateModal(false);
    setView('report');
  };

  const clientName = client?.name || "Manan Sarda";

  if (view === 'report') {
    return (
      <div className="flex flex-col h-full bg-[#fafafa] relative w-full overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
          <button 
            onClick={() => setView('dashboard')}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
        <TopHeader onNavigate={onNavigate} />
        <div className="flex flex-1 overflow-hidden relative max-w-[1600px] mx-auto w-full">
          <ObservationMainContent />
          <ClinicalBrainPanel />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#fafafa] relative w-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 xl:p-12 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Observation Reports</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage and compile observation synthesis reports.</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Create Observation Report
          </button>
        </div>

        {/* Dashboard Stats / Quick filters if needed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
             <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-700">Submitted</h3>
             </div>
             <p className="text-2xl font-bold text-slate-900">12</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
             <div className="flex items-center gap-3 mb-2">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Clock className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-700">Drafts</h3>
             </div>
             <p className="text-2xl font-bold text-slate-900">3</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
             <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Target className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-700">Awaiting CM Review</h3>
             </div>
             <p className="text-2xl font-bold text-slate-900">2</p>
          </div>
        </div>

        {/* Past Reports List */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
             <h2 className="font-bold text-slate-800">Recent Reports</h2>
             <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search client..." className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
             </div>
          </div>
          <div className="divide-y divide-slate-100">
             
             {/* Report Item 1 */}
             <div className="p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer" onClick={() => setView('report')}>
                <div className="flex items-center gap-4">
                   <div className="bg-amber-100 p-3 rounded-xl text-amber-600 shrink-0">
                     <FileText className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">{clientName}</h3>
                     <p className="text-xs text-slate-500 font-medium">Period: 5 May 2026 - 23 May 2026</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 justify-between md:justify-end">
                   <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                     Draft
                   </span>
                   <p className="text-xs text-slate-400 font-medium w-24 text-right">Last edited 2h ago</p>
                   <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
             </div>

             {/* Report Item 2 */}
             <div className="p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-center gap-4">
                   <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
                     <FileText className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">Aisha Khan</h3>
                     <p className="text-xs text-slate-500 font-medium">Period: 1 Apr 2026 - 30 Apr 2026</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 justify-between md:justify-end">
                   <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                     Submitted
                   </span>
                   <p className="text-xs text-slate-400 font-medium w-24 text-right">May 2, 2026</p>
                   <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
             </div>

             {/* Report Item 3 */}
             <div className="p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-center gap-4">
                   <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
                     <FileText className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">Leo Carmichael</h3>
                     <p className="text-xs text-slate-500 font-medium">Period: 15 Mar 2026 - 15 Apr 2026</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 justify-between md:justify-end">
                   <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                     Submitted
                   </span>
                   <p className="text-xs text-slate-400 font-medium w-24 text-right">Apr 18, 2026</p>
                   <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
             </div>
             
          </div>
        </div>

      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                 <h2 className="font-bold text-slate-900">Create Observation Report</h2>
                 <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                   <X className="w-5 h-5" />
                 </button>
              </div>
              <div className="p-6 space-y-5">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Select Client / Case</label>
                   <select 
                     value={selectedCase} 
                     onChange={(e) => setSelectedCase(e.target.value)}
                     className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                   >
                     <option value="" disabled>Select a client...</option>
                     {CLIENTS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                   </select>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Start Date</label>
                     <input 
                       type="date" 
                       value={periodStart}
                       onChange={(e) => setPeriodStart(e.target.value)}
                       className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" 
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">End Date</label>
                     <input 
                       type="date" 
                       value={periodEnd}
                       onChange={(e) => setPeriodEnd(e.target.value)}
                       className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none" 
                     />
                   </div>
                 </div>
                 
                 <p className="text-xs text-slate-500 leading-relaxed bg-blue-50 p-3 rounded-lg border border-blue-100">
                   The Clinical Brain will automatically synthesize all sessions, inputs, and strategies logged during this period for you to review.
                 </p>
                 
                 <div className="pt-4 flex justify-end gap-3">
                    <button 
                      onClick={() => setShowCreateModal(false)}
                      className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleCreate}
                      disabled={!selectedCase || !periodStart || !periodEnd}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Start Compilation
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
