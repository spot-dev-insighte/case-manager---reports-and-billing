import { AlertTriangle, ThumbsUp, HelpCircle } from 'lucide-react';

export function IepStrategyPlannerTab() {
  const recommendations = [
    {
      title: 'Visual Task Breakdown',
      category: 'Executive functioning',
      rationale: 'A task has several steps or the endpoint is unclear.',
      howTo: [
        'Divide the activity into 2–4 visible steps.',
        'Show the beginning and ending point.',
        'Allow the child to check off each step.',
        'Offer a choice of response format where possible.'
      ],
      lookFor: ['Easier initiation', 'Reduced repeated clarification'],
      watchFor: ['Too many visuals', 'Visual becoming another demand'],
    },
    {
      title: 'Familiar-Interest Examples',
      category: 'Academic access',
      rationale: 'Language load or abstractness is creating friction in comprehension.',
      howTo: [
        'Swap generic characters/topics for child\'s preferred interests.',
        'Use family members or friends in word problems.',
        'Gradually fade back to neutral examples once confidence builds.'
      ],
      lookFor: ['Increased engagement', 'Quicker processing'],
      watchFor: ['Distraction by the subject instead of the task'],
    }
  ];

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <p className="text-slate-500 text-sm">Review recommended clinical strategies based on identified priorities and build your strategy pool.</p>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm">
            Browse Full Library
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((strategy, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 pb-4 border-b border-slate-100 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{strategy.title}</h3>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {strategy.category}
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md tracking-wider">Suggested</span>
            </div>
            
            <div className="p-6 space-y-5 flex-1">
              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><HelpCircle className="w-3.5 h-3.5" /> Useful when</h4>
                 <p className="text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">{strategy.rationale}</p>
              </div>

              <div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">How to use</h4>
                 <ul className="text-sm text-slate-700 space-y-1.5">
                   {strategy.howTo.map((step, i) => (
                     <li key={i} className="flex gap-2 items-start">
                        <span className="text-slate-400 shrink-0 font-medium">{i+1}.</span>
                        <span>{step}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50">
                   <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5" /> Look for</h4>
                   <ul className="text-xs text-slate-700 space-y-1">
                     {strategy.lookFor.map((item, i) => <li key={i}>• {item}</li>)}
                   </ul>
                 </div>
                 <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100/50">
                   <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2 flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> Watch for</h4>
                   <ul className="text-xs text-slate-700 space-y-1">
                     {strategy.watchFor.map((item, i) => <li key={i}>• {item}</li>)}
                   </ul>
                 </div>
              </div>
            </div>

            <div className="bg-[#FDFCFB] border-t border-slate-100 p-4 grid grid-cols-2 gap-3 mt-auto">
               <button className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Ask Supervisor</button>
               <button className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 hover:border-emerald-300 transition-colors">Add to Goal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
