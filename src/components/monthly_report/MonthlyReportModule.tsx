import { useState } from "react";
import { Calendar, CheckCircle2, Clock, FileText, ChevronDown, Plus } from "lucide-react";
import { MonthlyReportBuilder } from "./MonthlyReportBuilder";
import { CLIENTS } from "../TopHeader";

export function MonthlyReportModule({ onNavigate, client }: { onNavigate?: (nav: string) => void, client?: { id: string; name: string; grade: string; support?: string } }) {
  const [isBuildingReport, setIsBuildingReport] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("May 2026");
  const [selectedClientToGenerate, setSelectedClientToGenerate] = useState(client ? client.id : "");

  if (isBuildingReport) {
    const generatingClientName = CLIENTS.find(c => c.id === selectedClientToGenerate)?.name || client?.name || 'Manan Sarda';
    return <MonthlyReportBuilder onExit={() => setIsBuildingReport(false)} onNavigate={onNavigate} clientName={generatingClientName} reportMonth={selectedMonth} />;
  }

  return (
    <div className="h-full flex flex-col bg-[#fafafa]">
      <div className="flex-1 overflow-y-auto w-full relative p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header & Generation Action */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div>
               <h1 className="text-3xl font-serif font-bold text-slate-900 mb-1">Monthly Reports</h1>
               <p className="text-slate-500">Manage, review, and generate monthly progress reports.</p>
             </div>
             
             {/* Generate New Report Widget */}
             <div className="bg-white border border-slate-200 rounded-2xl p-4 flex max-sm:flex-col sm:items-center gap-4 shadow-sm">
                <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Generate for Client</label>
                   <select 
                     className="text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                     value={selectedClientToGenerate}
                     onChange={(e) => setSelectedClientToGenerate(e.target.value)}
                   >
                     <option value="">Select Client...</option>
                     {CLIENTS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                     <option value="aarav">Aarav Patel</option>
                     <option value="zoya">Zoya Khan</option>
                   </select>
                </div>
                <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Month</label>
                   <select 
                     className="text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                     value={selectedMonth}
                     onChange={(e) => setSelectedMonth(e.target.value)}
                   >
                     <option value="June 2026">June</option>
                     <option value="May 2026">May</option>
                     <option value="April 2026">April</option>
                   </select>
                </div>
                <button 
                  disabled={!selectedClientToGenerate}
                  onClick={() => setIsBuildingReport(true)}
                  className="sm:mt-5 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Generate
                </button>
             </div>
          </div>

          <div className="flex max-sm:flex-col items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
             <div className="relative">
               <select 
                 className="appearance-none pl-10 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
                 value={selectedMonth}
                 onChange={(e) => setSelectedMonth(e.target.value)}
               >
                 <option value="June 2026">June 2026</option>
                 <option value="May 2026">May 2026</option>
                 <option value="April 2026">April 2026</option>
               </select>
               <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
               <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
             </div>
             
             <div className="flex bg-slate-100 rounded-lg p-1">
               <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-white text-slate-800 shadow-sm">All Tasks</button>
               <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700">Pending Review</button>
               <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700">Drafts</button>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Tasks Column */}
             <div className="lg:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" /> Action Required (Tasks)
                </h3>
                
                {/* Task Item 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors cursor-pointer" onClick={() => setIsBuildingReport(true)}>
                   <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase tracking-widest">Pending Review</span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{selectedMonth}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{client?.name || "Manan Sarda"}</h4>
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case Manager</span>
                         <p className="text-sm font-bold text-slate-800">Sarah J.</p>
                      </div>
                   </div>
                   <div className="flex items-center justify-between mt-4 pb-4 border-b border-slate-100">
                     <div className="space-y-1">
                       <p className="text-xs text-slate-500"><span className="font-bold text-slate-700">18/18</span> Sessions Logs Completed</p>
                       <p className="text-xs text-slate-500"><span className="font-bold text-slate-700">4</span> Active Goals Updates</p>
                     </div>
                     <button className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-bold hover:bg-amber-100 transition-colors">
                       Review & Approve
                     </button>
                   </div>
                   <div className="pt-3">
                     <p className="text-xs text-slate-500"><span className="font-bold text-slate-700">Last edited:</span> Today, 10:30 AM by Jane D. (Therapist)</p>
                   </div>
                </div>

                {/* Task Item 2 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase tracking-widest">Draft in Progress</span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{selectedMonth}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">Aarav Patel</h4>
                      </div>
                   </div>
                   <div className="flex items-center justify-between mt-4 pb-4 border-b border-slate-100">
                     <div className="space-y-1">
                       <p className="text-xs text-slate-500"><span className="font-bold text-amber-600">14/15</span> Sessions Logs Completed</p>
                       <p className="text-xs text-slate-500"><span className="font-bold text-slate-700">3</span> Active Goals Updates</p>
                     </div>
                     <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                       Continue Draft
                     </button>
                   </div>
                </div>
             </div>

             {/* Completed Column */}
             <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Completed
                </h3>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                   <div>
                     <h4 className="font-bold text-slate-800">Zoya Khan</h4>
                     <p className="text-xs text-slate-500">{selectedMonth} Report</p>
                   </div>
                   <div className="flex flex-col items-end gap-2">
                     <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Sent to Parent</span>
                     <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                       <FileText className="w-3 h-3" /> View PDF
                     </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
