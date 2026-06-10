import { useState } from "react";
import { Brain, Star, Target, Zap, AlertTriangle, Lightbulb, ChevronRight, X } from "lucide-react";

interface ClinicalBrainPanelProps {
  onClose?: () => void;
}

export function ClinicalBrainPanel({ onClose }: ClinicalBrainPanelProps) {
  const [activeTab, setActiveTab] = useState<'insights' | 'goals' | 'strategies' | 'data'>('insights');

  return (
    <div className="h-full flex flex-col bg-slate-50 relative">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 text-indigo-700">
          <Brain className="w-5 h-5" />
          <h2 className="font-bold">Clinical Brain</h2>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
             <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white shrink-0 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab('insights')}
          className={`flex-1 min-w-[80px] py-3 text-xs font-bold text-center border-b-2 transition-colors ${activeTab === 'insights' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Insights
        </button>
        <button 
          onClick={() => setActiveTab('goals')}
          className={`flex-1 min-w-[80px] py-3 text-xs font-bold text-center border-b-2 transition-colors ${activeTab === 'goals' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Goals
        </button>
        <button 
          onClick={() => setActiveTab('strategies')}
          className={`flex-1 min-w-[80px] py-3 text-xs font-bold text-center border-b-2 transition-colors ${activeTab === 'strategies' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Strategies
        </button>
        <button 
          onClick={() => setActiveTab('data')}
          className={`flex-1 min-w-[80px] py-3 text-xs font-bold text-center border-b-2 transition-colors ${activeTab === 'data' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Data Qty
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {activeTab === 'insights' && (
          <>
            <div className="bg-white border border-indigo-100 p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-indigo-700 mb-2">
                <Lightbulb className="w-4 h-4" />
                <h3 className="font-bold text-sm">Visual Processing Strength</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Manan successfully completed academic tasks 85% of the time when instructions were presented visually, compared to 30% with verbal-only instructions.
              </p>
              <div className="pt-3 border-t border-indigo-50 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">12 Session Logs</span>
                <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:text-indigo-800">
                  View Evidence <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-white border border-amber-100 p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="font-bold text-sm">Transition Difficulty</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Increased distress observed during unstructured transitions, particularly from preferred logical tasks (like math) to open-ended creative tasks.
              </p>
              <div className="pt-3 border-t border-amber-50 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">8 Session Logs</span>
                <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:text-indigo-800">
                  Add Priority <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'goals' && (
          <div className="bg-white border text-center p-6 rounded-xl border-slate-200">
             <Target className="w-8 h-8 text-slate-300 mx-auto mb-3" />
             <h3 className="font-bold text-slate-700 text-sm">Goal Recommendations</h3>
             <p className="text-xs text-slate-500 mt-2">Clinical Brain will suggest goals once priority areas are defined.</p>
          </div>
        )}

        {/* ... other tabs would be similarly structured ... */}
        {activeTab !== 'insights' && activeTab !== 'goals' && (
          <div className="text-center p-6 text-slate-500 text-xs">
            Review synthesis data here.
          </div>
        )}

      </div>

      {/* Ask Clinical Brain */}
      <div className="p-4 border-t border-slate-200 bg-white shrink-0 pb-6 xl:pb-4">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Ask Clinical Brain</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="e.g. Which strategies improved comprehension?"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
