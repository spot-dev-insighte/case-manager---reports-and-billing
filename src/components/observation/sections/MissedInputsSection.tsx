import { AlertCircle } from "lucide-react";

export function MissedInputsSection() {
  return (
    <section id="missed-inputs" className="bg-white rounded-3xl border border-amber-200 shadow-sm p-6 md:p-8 space-y-6 bg-amber-50/20">
       <div className="flex items-center gap-2 mb-4">
         <AlertCircle className="w-5 h-5 text-amber-500" />
         <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600">Missed Inputs Center</h2>
       </div>
       <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white border border-amber-200 rounded-xl shadow-sm">
             <span className="text-sm font-medium text-slate-700">No playground observation logs found.</span>
             <button className="text-xs font-bold text-amber-700 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors">Fix</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white border border-amber-200 rounded-xl shadow-sm">
             <span className="text-sm font-medium text-slate-700">School Goals missing from school input.</span>
             <button className="text-xs font-bold text-amber-700 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors">Fix</button>
          </div>
       </div>
    </section>
  );
}
