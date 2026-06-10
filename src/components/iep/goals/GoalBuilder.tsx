import { useState } from "react";
import { X, CheckCircle2, AlertTriangle, ChevronRight, Brain } from "lucide-react";

interface GoalBuilderProps {
  onClose: () => void;
}

export function GoalBuilder({ onClose }: GoalBuilderProps) {
  const [step, setStep] = useState(1);
  const [statement, setStatement] = useState("");

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex justify-end">
      {/* Full screen drawer on desktop, full screen modal on mobile */}
      <div className="bg-white w-full max-w-2xl h-full shadow-[-8px_0_24px_rgba(0,0,0,0.1)] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Goal Builder</h2>
            <p className="text-xs text-slate-500 font-medium">Step {step} of 4</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
           
           {step === 1 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">What do you want to work on?</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Communication', 'Regulation', 'Social Participation', 'Executive Functioning'].map(d => (
                    <button 
                      key={d} 
                      onClick={() => setStep(2)}
                      className="p-4 border border-slate-200 rounded-xl text-left hover:border-indigo-300 hover:bg-indigo-50/30 transition-all font-bold text-slate-700 text-sm"
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl space-y-3">
                     <div className="flex items-center gap-2 text-blue-800 mb-2">
                       <Brain className="w-4 h-4" />
                       <h4 className="font-bold text-sm">Suggested Based on Priorities</h4>
                     </div>
                     <button onClick={() => setStep(2)} className="w-full text-left p-3 bg-white border border-blue-200 rounded-lg text-sm font-bold text-slate-800 hover:shadow-sm">
                       Reading comprehension contextual questions
                     </button>
                  </div>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Draft Goal Statement</h3>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Baseline</label>
                    <textarea 
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 bg-white h-20"
                      placeholder="Describe the current level of participation..."
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Goal Statement</label>
                    <div className="text-xs text-slate-500 mb-2">Include context, support permitted, expected outcome, and time period.</div>
                    <textarea 
                      value={statement}
                      onChange={(e) => setStatement(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 bg-white h-32"
                      placeholder="Given [support], [Name] will [action] in [environment]..."
                    />
                  </div>

                  <button onClick={() => setStep(3)} className="w-full px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold flex flex-row items-center justify-center gap-2 hover:bg-slate-800">
                    Run Quality Check <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Quality Check</h3>
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-800 italic">
                  "{statement || 'Given visual supports, Manan will...'}"
                </div>

                <div className="space-y-3">
                   <div className="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="font-bold text-emerald-900 text-sm">Observable Outcome</p>
                        <p className="text-xs text-emerald-700">The action is clearly observable.</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-bold text-amber-900 text-sm">Review Compliance Language</p>
                        <p className="text-xs text-amber-800 mt-1">This goal may focus heavily on compliance. Consider rewriting to focus on participation and access.</p>
                        <button className="mt-2 text-xs font-bold bg-white text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-lg shadow-sm">
                          Apply Neuro-affirmative Rewrite
                        </button>
                      </div>
                   </div>
                </div>

                <button onClick={() => setStep(4)} className="w-full px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold flex flex-row items-center justify-center gap-2 hover:bg-slate-800 mt-6">
                    Configure Measurement <ChevronRight className="w-4 h-4" />
                </button>
             </div>
           )}

           {step === 4 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Measurement & Implementation</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Measurement Method</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 bg-white">
                        <option>Successful Opportunities</option>
                        <option>Frequency</option>
                        <option>Duration</option>
                        <option>Level of Support</option>
                        <option>Level of Independence</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Sub Target / Criterion</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 bg-white">
                        <option>Accuracy (%)</option>
                        <option>Consecutive Sessions</option>
                        <option>Number of Prompts</option>
                        <option>Time (Minutes/Seconds)</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Target Constraint</label>
                    <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white" placeholder="e.g. 4 out of 5 opportunities" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Responsible Team</label>
                    <div className="flex flex-wrap gap-2">
                       {['Shadow Teacher', 'Therapist', 'Parent', 'Class Teacher'].map(t => (
                         <label key={t} className="flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-lg text-sm cursor-pointer hover:bg-slate-50">
                           <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                           {t}
                         </label>
                       ))}
                    </div>
                  </div>
                </div>
             </div>
           )}

        </div>

        {/* Footer */}
        {step === 4 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0 flex gap-3 justify-end">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={onClose}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Add Goal to IEP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
