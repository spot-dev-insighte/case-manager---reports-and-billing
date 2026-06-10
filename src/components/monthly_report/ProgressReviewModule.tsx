import { useState } from 'react';
import { Target, TrendingUp, AlertTriangle, MessageSquare, Plus, ChevronDown, CheckCircle2 } from 'lucide-react';

export function ProgressReviewModule() {
  return (
    <div className="h-full flex flex-col w-full overflow-hidden bg-[#fafafa]">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold font-serif text-slate-900 tracking-tight">Progress & IEP Review</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Manan Sarda • Review Period: Feb 1 - Feb 28, 2026</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold border border-indigo-200 hover:bg-indigo-100 shadow-sm flex items-center gap-2">
             <MessageSquare className="w-4 h-4" /> Share with Parents
           </button>
           <button className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-slate-800">
             Save Review
           </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-[1000px] mx-auto space-y-8">
          
          {/* Summary Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm text-center">
               <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                 <TrendingUp className="w-5 h-5" />
               </div>
               <p className="text-3xl font-bold text-slate-900 mb-1">68%</p>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Avg Goal Progress</p>
             </div>
             
             <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm text-center">
               <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                 <AlertTriangle className="w-5 h-5" />
               </div>
               <p className="text-3xl font-bold text-slate-900 mb-1">2</p>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Goals Off Track</p>
             </div>

             <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm text-center">
               <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                 <CheckCircle2 className="w-5 h-5" />
               </div>
               <p className="text-3xl font-bold text-slate-900 mb-1">1</p>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mastered Goal</p>
             </div>
          </div>

          <h2 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-2">Living Document: Goal Adjustments</h2>
          
          <div className="space-y-6">
            {/* Goal 1: On Track */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="p-5 border-b border-slate-100 flex items-start justify-between bg-emerald-50/30">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold text-[10px] uppercase tracking-wider">Communication</span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px] uppercase tracking-wider">On Track</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Requesting help during unstructured transitions</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Trend</p>
                    <p className="font-bold text-emerald-600 text-lg">75% (Target 80%)</p>
                  </div>
               </div>
               
               <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Original Goal</h4>
                    <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      Given a visual transition countdown, Manan will request "help" instead of dropping to the floor in 4 out of 5 opportunities.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Adjustment / Note</h4>
                    <textarea 
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Add clinical observation or adjust target..."
                      defaultValue="Responding very well to visual countdowns. Recommend fading countdown to 10 seconds next month to generalize."
                    />
                  </div>
               </div>
            </div>

            {/* Goal 2: Off Track */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden border-amber-200 relative">
               <div className="absolute top-0 left-0 bottom-0 w-1 bg-amber-500"></div>
               <div className="p-5 border-b border-slate-100 flex items-start justify-between bg-amber-50/50 pl-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold text-[10px] uppercase tracking-wider">Social</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold text-[10px] uppercase tracking-wider">Off Track</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Peer entry during unstructured play</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Trend</p>
                    <p className="font-bold text-amber-600 text-lg">20% (Target 60%)</p>
                  </div>
               </div>
               
               <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white pl-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Original Goal</h4>
                    <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      Manan will independently initiate peer interactions during recess for 3 minutes without redirection.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Adjustment / Note</h4>
                    <textarea 
                      className="w-full border border-amber-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500/20 bg-amber-50/20"
                      placeholder="Add clinical observation or adjust target..."
                      defaultValue="Goal currently too demanding. Modifying to include guided social scripts before recess begins. Expected target adjusted to 1 minute."
                    />
                  </div>
               </div>
               <div className="pl-6 p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                 <span className="text-sm font-bold text-slate-700">Modification active for next session logging.</span>
                 <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:underline">
                   View Session Evidence
                 </button>
               </div>
            </div>

          </div>

          {/* New Adjustments / Adding Goals */}
          <div className="border border-dashed border-slate-300 rounded-2xl p-6 text-center hover:bg-slate-50 cursor-pointer transition-colors bg-white">
            <Plus className="w-6 h-6 text-slate-400 mx-auto mb-2" />
            <p className="font-bold text-slate-700">Add Mid-Cycle Goal Adjustment</p>
            <p className="text-sm text-slate-500">Address new concerns dynamically.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
