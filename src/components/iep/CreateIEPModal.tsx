import { useState } from "react";
import { X, Check } from "lucide-react";

export function CreateIEPModal({ onClose, onCreate }: { onClose: () => void, onCreate: (id: string) => void }) {
  const [selectedCase, setSelectedCase] = useState("");
  const [report, setReport] = useState("latest");
  const [startDate, setStartDate] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [serviceType, setServiceType] = useState("shadow");

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      {/* Container max-h-[90vh] supports vertical scrolling on mobile */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0 rounded-t-2xl">
          <h2 className="font-bold text-slate-900 text-lg">Create New IEP</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Select Child / Case</label>
              <select 
                value={selectedCase} 
                onChange={(e) => setSelectedCase(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-white transition-shadow"
              >
                <option value="" disabled>Select a child...</option>
                <option value="manan">Manan Sarda</option>
                <option value="aisha">Aisha Khan</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Source Observation Report</label>
              <select 
                value={report} 
                onChange={(e) => setReport(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-white transition-shadow"
              >
                <option value="latest">May 2026 - Final Clinical Synthesis</option>
                <option value="previous">Nov 2025 - Mid-Year Review</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">IEP Start Date</label>
                <input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-white transition-shadow" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Review Date (6mo)</label>
                <input 
                  type="date" 
                  value={reviewDate}
                  onChange={(e) => setReviewDate(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-white transition-shadow" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Service Type</label>
              <select 
                value={serviceType} 
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-white transition-shadow"
              >
                <option value="shadow">Shadow Support</option>
                <option value="ei">Early Intervention</option>
                <option value="special_ed">Special Education</option>
              </select>
            </div>
          </div>

          {/* Data Readiness Box */}
          {selectedCase && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Data Readiness
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-xs text-emerald-800">
                <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500" /> Observation Report: Complete</div>
                <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500" /> Parent Inputs: Available</div>
                <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500" /> School Inputs: Available</div>
                <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500" /> Session Logs: 18 reviewed</div>
              </div>
              <div className="pt-2 border-t border-emerald-200/50">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Ready to create IEP</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0 flex gap-3 justify-end rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => onCreate(selectedCase || "new-iep")}
            disabled={!selectedCase || !startDate || !reviewDate}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Create IEP Draft
          </button>
        </div>
      </div>
    </div>
  );
}
