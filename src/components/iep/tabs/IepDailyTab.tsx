import { CheckCircle2, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';

export function IepDailyTab() {
  const priorities = [
    {
      title: 'Comprehension Access',
      contexts: ['Literacy', 'Word problems', 'Written instructions'],
      strategies: ['Visual task breakdown', 'Familiar-interest examples', 'Choice of response format'],
      observe: ['Task initiation', 'Understanding', 'Support level', 'Child comfort'],
      avoid: ['Repeating long verbal instructions rapidly', 'Removing choice of response']
    },
    {
      title: 'Predictability in shifting contexts',
      contexts: ['Recess/Lunch to class', 'Switching subjects', 'End of day'],
      strategies: ['Visual timeline preview', 'Transitional object'],
      observe: ['Anxiety signs', 'Repeated questioning', 'Ease of shifting'],
      avoid: ['Rushing without warning']
    }
  ];

  return (
    <div className="max-w-5xl space-y-6">
      <div className="bg-emerald-900 rounded-2xl shadow-lg border border-emerald-800 p-6 text-white mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-2">Today's Support Plan</h3>
        <p className="text-emerald-50 text-sm leading-relaxed mb-4">
          Focus on providing visual structure during language-heavy tasks and ensuring predictable transitions. Remember to look out for his repeated questioning as a sign of seeking safety.
        </p>
        <div className="flex gap-4 items-center">
            <span className="text-xs font-semibold bg-emerald-800/50 text-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-700/50">
               Child Prefers: Clear visual choices
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {priorities.map((priority, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
             <div className="md:w-64 bg-slate-50 border-r border-slate-100 p-6">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Priority Focus</span>
                <h4 className="text-base font-bold text-slate-900 mb-4">{priority.title}</h4>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Contexts</span>
                <ul className="space-y-1">
                  {priority.contexts.map((c, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-center gap-1.5 font-medium"><ChevronRight className="w-3.5 h-3.5 text-slate-400"/> {c}</li>
                  ))}
                </ul>
             </div>

             <div className="flex-1 p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 bg-emerald-50 inline-block px-2 py-1 rounded-md">Implement Today</h4>
                      <ul className="space-y-2">
                        {priority.strategies.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm text-slate-700">
                             <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 bg-slate-100 inline-block px-2 py-1 rounded-md">Observe & Record</h4>
                      <ul className="space-y-2">
                        {priority.observe.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm text-slate-700">
                             <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Avoid
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {priority.avoid.map((item, i) => (
                       <li key={i} className="text-xs text-amber-800 bg-amber-50 border border-amber-200/50 px-2 py-1 rounded-md font-medium">
                         {item}
                       </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
