export function IepPrioritiesTab() {
  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <p className="text-slate-500 text-sm">Priorities establish clinical direction based on the child's needs and interests.</p>
        <div className="flex gap-2">
          <button className="bg-emerald-800 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-900 transition-colors shadow-sm whitespace-nowrap">
            Identify Priority
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Priority Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-emerald-900 px-6 py-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Accessing language-heavy comprehension
            </h3>
          </div>
          
          <div className="p-6 space-y-6 flex-1">
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Why it matters</h4>
              <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                Supports meaningful classroom participation and allows the child to demonstrate understanding.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Current Pattern</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                The child reads fluently but disengages when comprehension tasks are abstract, lengthy or presented only verbally.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Strengths Building</h4>
                 <ul className="text-sm text-slate-700 space-y-1">
                   <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> Strong recall</li>
                   <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> Visual engagement</li>
                 </ul>
              </div>
              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Helpful Strategies</h4>
                 <ul className="text-sm text-slate-700 space-y-1">
                   <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> Visual breakdown</li>
                   <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> Choice of format</li>
                 </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FDFCFB] border-t border-slate-100 p-4 flex justify-between items-center mt-auto">
            <span className="text-xs font-semibold text-slate-500">Linked to Goal 1</span>
            <button className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800">Edit Priority &rarr;</button>
          </div>
        </div>

        {/* Priority Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-slate-800 px-6 py-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              Predictability in shifting contexts
            </h3>
          </div>
          
          <div className="p-6 space-y-6 flex-1">
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Why it matters</h4>
              <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                Enables smooth daily transitions, reduces anxiety, and builds autonomy in moving between activities.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Current Pattern</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                 Displays repeated questioning and anxiety during high-noise unstructured transitions. Participation becomes harder when next steps are unclear.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Strengths Building</h4>
                 <ul className="text-sm text-slate-700 space-y-1">
                   <li className="flex items-start gap-1"><span className="text-slate-500">•</span> Values predictability</li>
                   <li className="flex items-start gap-1"><span className="text-slate-500">•</span> Strong routine adherence</li>
                 </ul>
              </div>
              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Helpful Strategies</h4>
                 <ul className="text-sm text-slate-700 space-y-1">
                   <li className="flex items-start gap-1"><span className="text-slate-500">•</span> Visual schedules</li>
                   <li className="flex items-start gap-1"><span className="text-slate-500">•</span> Pre-warnings</li>
                 </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FDFCFB] border-t border-slate-100 p-4 flex justify-between items-center mt-auto">
            <span className="text-xs font-semibold text-slate-500">Linked to Goal 2</span>
            <button className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-800">Edit Priority &rarr;</button>
          </div>
        </div>

      </div>
    </div>
  );
}
