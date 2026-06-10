import { Brain, Check, Edit2, AlertCircle, Sparkles, X } from "lucide-react";

export function ClinicalBrainPanel() {
  return (
    <div className="hidden xl:flex w-80 flex-col border-l border-slate-200 bg-slate-50 overflow-y-auto shrink-0 relative z-10 shadow-[-4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="sticky top-0 bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-2">
        <div className="bg-indigo-100 p-1.5 rounded-lg text-indigo-600">
          <Brain className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-800">Clinical Brain</h2>
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-0.5">Insights from 8 logs</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        
        {/* Patterns Found */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" /> Patterns Found
          </h3>
          <ul className="space-y-2">
            <li className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 shadow-sm leading-relaxed">
              <strong className="text-slate-900 block mb-1">Transition difficulty</strong>
              Observed in 7 logs. Extra processing time recommended.
            </li>
            <li className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 shadow-sm leading-relaxed">
              <strong className="text-slate-900 block mb-1">Visual Support</strong>
              Marked as helpful in 5 logs for Literacy and routines.
            </li>
            <li className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 shadow-sm leading-relaxed">
              <strong className="text-slate-900 block mb-1">Regulation concerns</strong>
              Noted twice related to noisy environments.
            </li>
          </ul>
        </section>

        {/* Missing Information */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
            <AlertCircle className="w-3 h-3" /> Missing Information
          </h3>
          <ul className="space-y-2">
            <li className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-medium text-amber-900 shadow-sm leading-relaxed">
              No school input added
            </li>
            <li className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-medium text-amber-900 shadow-sm leading-relaxed">
              No playground observation
            </li>
            <li className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-medium text-amber-900 shadow-sm leading-relaxed">
              Parent priorities missing
            </li>
          </ul>
        </section>

        {/* Suggested Goals */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Suggested Goals
          </h3>
          <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm space-y-3 flex flex-col items-start border-l-4 border-l-emerald-500">
             <p className="text-xs font-bold text-slate-800">Improve transition independence using visual schedules</p>
             <p className="text-[10px] text-slate-500">Based on 7 logs reporting difficulty.</p>
             <div className="flex gap-2 mt-1 w-full border-t border-slate-100 pt-2">
                <button className="flex-1 py-1.5 flex justify-center items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded hover:bg-emerald-100 transition-colors">
                  <Check className="w-3 h-3" /> Accept
                </button>
                <button className="px-2 py-1.5 flex justify-center items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 rounded hover:bg-slate-100 border border-slate-200">
                  <Edit2 className="w-3 h-3" />
                </button>
                <button className="px-2 py-1.5 flex justify-center items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 rounded hover:bg-slate-100 border border-slate-200">
                  <X className="w-3 h-3" />
                </button>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
