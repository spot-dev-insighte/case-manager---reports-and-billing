export function InternalNotesSection() {
  return (
    <section id="internal-notes" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
       <div>
         <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Internal Notes</h2>
         <p className="text-xs text-slate-500 font-medium">These notes are strictly for the clinical team. Not visible in client reports.</p>
       </div>
       
       <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-slate-800 block mb-3">Therapist Reflection & Recommendations</label>
            <textarea 
               placeholder="Your clinical thoughts on progress, barriers, or approach..."
               className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium resize-none h-32 leading-relaxed focus:ring-2 focus:ring-indigo-500/20 text-slate-700" 
            />
          </div>
          <div>
            <label className="text-sm font-bold border-l-4 border-rose-500 pl-2 text-rose-800 block mb-3">Any Risky Behaviours?</label>
            <textarea 
               placeholder="Log any instances of self-harm, elopement, or aggression if applicable..."
               className="w-full bg-rose-50/30 border border-rose-200 rounded-2xl p-4 text-sm font-medium resize-none h-24 leading-relaxed focus:ring-2 focus:ring-rose-500/20 text-slate-800 placeholder-rose-400" 
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-800 block mb-3">CM Discussion & Supervision Questions</label>
            <textarea 
               placeholder="Questions for your case manager or supervisor..."
               className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium resize-none h-24 leading-relaxed focus:ring-2 focus:ring-indigo-500/20 text-slate-700" 
            />
          </div>
       </div>
    </section>
  );
}
