import { Calendar } from "lucide-react";

export function ImplementationPlanSection() {
  return (
    <section id="section-implementation" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">15</span>
              <h2 className="text-xl font-bold text-slate-900">Service and Implementation Plan</h2>
            </div>
            <p className="text-sm text-slate-500">Service details and clinical responsibilities.</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-5 grid grid-cols-2 md:grid-cols-4 gap-6">
             <div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Service Type</p>
               <p className="text-sm font-bold text-slate-800">Shadow Support</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Frequency</p>
               <p className="text-sm font-bold text-slate-800">5 days / week</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
               <p className="text-sm font-bold text-slate-800">Heritage Xperiential</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Provider</p>
               <p className="text-sm font-bold text-slate-800">Jane Doe (Insighte)</p>
             </div>
          </div>

          <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Goal Implementation Responsibilities</h3>
          
          <div className="space-y-4">
            
            {/* Goal Row 1 */}
            <div className="border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 bg-white">
              <div className="flex-1 space-y-2">
                 <h4 className="font-bold text-slate-800 text-sm">Requesting help during unstructured transitions</h4>
                 <div className="flex flex-wrap gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Lead: Shadow Teacher</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Support: OT</span>
                 </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 md:flex items-center gap-4 text-xs">
                 <div>
                   <p className="text-slate-400 font-bold mb-0.5 uppercase">Frequency</p>
                   <p className="text-slate-700 font-medium whitespace-nowrap">Daily (Transitions)</p>
                 </div>
                 <div>
                   <p className="text-slate-400 font-bold mb-0.5 uppercase">Data Check</p>
                   <p className="text-slate-700 font-medium whitespace-nowrap">Weekly</p>
                 </div>
              </div>
            </div>

            {/* Goal Row 2 */}
            <div className="border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 bg-white">
              <div className="flex-1 space-y-2">
                 <h4 className="font-bold text-slate-800 text-sm">Reading comprehension contextual questions</h4>
                 <div className="flex flex-wrap gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Lead: Class Teacher</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Support: Shadow Teacher</span>
                 </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 md:flex items-center gap-4 text-xs">
                 <div>
                   <p className="text-slate-400 font-bold mb-0.5 uppercase">Frequency</p>
                   <p className="text-slate-700 font-medium whitespace-nowrap">3x / week</p>
                 </div>
                 <div>
                   <p className="text-slate-400 font-bold mb-0.5 uppercase">Data Check</p>
                   <p className="text-slate-700 font-medium whitespace-nowrap">Fortnightly</p>
                 </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-100 space-y-6">
            <div>
              <label className="text-sm font-bold text-slate-900 block mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" /> Planned Review Date
              </label>
              <input type="date" className="w-full md:w-64 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none" />
            </div>

            <div className="space-y-4 pt-4">
               <div>
                  <label className="text-sm font-bold text-slate-900 block mb-1">General Inputs & Instructions to Parents</label>
                  <p className="text-xs text-slate-500 mb-2">These will appear on the final IEP document given to parents.</p>
                  <textarea 
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none h-24 resize-none bg-white"
                    placeholder="Enter notes to parents..."
                  />
               </div>
               <div>
                  <label className="text-sm font-bold text-slate-900 block mb-1">Inputs & Instructions to Therapist(s)</label>
                  <p className="text-xs text-slate-500 mb-2">Confidential guidance for the internal clinical team.</p>
                  <textarea 
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none h-24 resize-none bg-white"
                    placeholder="Enter notes to therapists..."
                  />
               </div>
               <div>
                  <label className="text-sm font-bold text-slate-900 block mb-1">Additional Detailed Notes</label>
                  <p className="text-xs text-slate-500 mb-2">Any other context, attachments, or links to references.</p>
                  <textarea 
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none h-32 resize-none bg-white"
                    placeholder="Enter additional notes..."
                  />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
