import { CheckCircle2, ChevronRight, Download, Eye, AlertTriangle } from 'lucide-react';

export function IepReviewTab() {
  const flags = [
    { title: 'Goal contains "eye contact"', active: false },
    { title: 'Goal contains "stop stimming"', active: false },
    { title: 'Goal has no measurement method', active: false },
    { title: 'Goal has no child or parent relevance', active: false },
    { title: 'Child voice needs confirmation', active: true, warning: true },
    { title: 'Two strategies need supervisor review', active: true, warning: true }
  ];

  return (
    <div className="max-w-5xl space-y-6">
      <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6 text-white mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">Review & Publish</h3>
        <p className="text-slate-200 text-sm leading-relaxed mb-6">
          Validate the plan against clinical guidelines and generate the parent-friendly version.
        </p>
        
        <div className="flex flex-wrap gap-3">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-2">
               Submit for Clinical Review <ChevronRight className="w-4 h-4" />
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors border border-slate-600 flex items-center gap-2">
               <Eye className="w-4 h-4" /> Preview Parent Version
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors border border-slate-600 flex items-center gap-2">
               <Download className="w-4 h-4" /> Generate PDF
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Clinical Flags */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-[#FDFCFB] px-6 py-4 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900">Clinical Quality Flags</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-500 mb-4">The system checks for clinical cautions. Review any active warnings.</p>
            <ul className="space-y-3">
              {flags.map((flag, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                   {flag.active ? (
                     <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                   ) : (
                     <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0" />
                   )}
                   <span className={`text-sm ${flag.active ? 'text-amber-800 font-medium' : 'text-slate-400 line-through'}`}>
                     {flag.title}
                   </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approval Workflow */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-[#FDFCFB] px-6 py-4 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900">Approval Workflow</h3>
          </div>
          <div className="p-6">
             <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-0 bottom-0 left-[11px] w-px bg-slate-200"></div>

                <div className="space-y-6 relative">
                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-slate-900">Drafted</h4>
                       <p className="text-xs text-slate-500">Dhvani Manchanda • In Progress</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-300 shrink-0 z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                     </div>
                     <div>
                       <h4 className="text-sm font-medium text-slate-600">Clinical Review</h4>
                       <p className="text-xs text-slate-400">Case Manager (Epahi Das Vijay)</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 shrink-0 z-10"></div>
                     <div>
                       <h4 className="text-sm font-medium text-slate-400">Parent Acknowledgement</h4>
                       <p className="text-xs text-slate-400">Pending clinical approval</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 shrink-0 z-10"></div>
                     <div>
                       <h4 className="text-sm font-medium text-slate-400">Active Plan</h4>
                       <p className="text-xs text-slate-400">Ready for implementation</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
