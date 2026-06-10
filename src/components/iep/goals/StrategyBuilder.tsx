import { useState } from "react";
import { X, CheckCircle2, ChevronRight, Brain } from "lucide-react";

interface StrategyBuilderProps {
  onClose: () => void;
  onAdd?: (strategyTitle: string) => void;
}

export function StrategyBuilder({ onClose, onAdd }: StrategyBuilderProps) {
  const [step, setStep] = useState(1);
  const [strategyContent, setStrategyContent] = useState("");

  const handleFinish = () => {
    if (onAdd && strategyContent) {
      onAdd(strategyContent);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full shadow-[-8px_0_24px_rgba(0,0,0,0.1)] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Strategy Builder</h2>
            <p className="text-xs text-slate-500 font-medium">Step {step} of 2</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
           {step === 1 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Strategy Category</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Environmental', 'Instructional', 'Sensory Support', 'Visual Support'].map(d => (
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
                  <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl space-y-3">
                     <div className="flex items-center gap-2 text-indigo-800 mb-2">
                       <Brain className="w-4 h-4" />
                       <h4 className="font-bold text-sm">Clinical Brain Suggestions</h4>
                     </div>
                     <button onClick={() => { setStrategyContent("Visual task breakdown with checkmarks"); setStep(2); }} className="w-full text-left p-3 flex items-center justify-between bg-white border border-indigo-200 rounded-lg text-sm font-bold text-slate-800 hover:shadow-sm">
                       Visual task breakdown with checkmarks
                       <ChevronRight className="w-4 h-4 text-slate-400" />
                     </button>
                  </div>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Define Strategy Detail</h3>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Strategy Outline</label>
                    <textarea 
                      value={strategyContent}
                      onChange={(e) => setStrategyContent(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500/20 bg-white h-32 leading-relaxed text-slate-700"
                      placeholder="e.g. Provide a visual schedule and wait 5 seconds before prompting..."
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">When to Use</label>
                    <textarea 
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 bg-white h-20"
                      placeholder="e.g. During transitions to non-preferred activities..."
                    />
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="font-bold text-emerald-900 text-sm">Evidence-Based Practice</p>
                          <p className="text-xs text-emerald-700">This strategy aligns with standard behavioral practices.</p>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
           )}
        </div>

        {/* Footer */}
        {step === 2 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0 flex gap-3 justify-end">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleFinish}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Add Strategy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
