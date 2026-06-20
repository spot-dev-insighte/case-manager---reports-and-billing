import { useState } from "react";
import { ProgressReportBuilder } from "./ProgressReportBuilder";
import { CLIENTS } from "../TopHeader";

export function ProgressReportModule({ onNavigate, client }: { onNavigate?: (nav: string) => void, client?: { id: string; name: string; grade: string; support?: string } }) {
  const [isBuildingReport, setIsBuildingReport] = useState(false);
  const [selectedClientToGenerate, setSelectedClientToGenerate] = useState(client ? client.id : "");
  const [selectedType, setSelectedType] = useState("Six-Month Progress Review");

  if (isBuildingReport) {
    const generatingClientName = CLIENTS.find(c => c.id === selectedClientToGenerate)?.name || client?.name || 'Manan Sarda';
    return <ProgressReportBuilder 
               onExit={() => setIsBuildingReport(false)} 
               onNavigate={onNavigate} 
               clientName={generatingClientName} 
               reportType={selectedType} 
           />;
  }

  return (
    <div className="h-full flex flex-col w-full overflow-hidden bg-[#fafafa]">
      <div className="bg-white border-b border-slate-200 px-6 py-4 shrink-0">
        <h1 className="text-xl font-bold font-serif text-slate-900 tracking-tight">Progress Reports</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Formal reviews, transitions, and case closures.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-[1000px] mx-auto space-y-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Generate New Report</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Select Client</label>
                   <select 
                     className="w-full text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                     value={selectedClientToGenerate}
                     onChange={(e) => setSelectedClientToGenerate(e.target.value)}
                   >
                     <option value="">Choose a client...</option>
                     {CLIENTS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                     <option value="aarav">Aarav Patel</option>
                   </select>
                </div>
                <div className="flex-1 w-full">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Report Type</label>
                   <select 
                     className="w-full text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                     value={selectedType}
                     onChange={(e) => setSelectedType(e.target.value)}
                   >
                     <option value="Six-Month Progress Review">Six-Month Progress Review</option>
                     <option value="End-of-IEP Review">End-of-IEP Review</option>
                     <option value="Therapist Transition Report">Therapist Transition Report</option>
                     <option value="Case Closure Report">Case Closure Report</option>
                   </select>
                </div>
                <button 
                  disabled={!selectedClientToGenerate}
                  onClick={() => setIsBuildingReport(true)}
                  className="sm:mt-5 flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
                >
                  Generate
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
