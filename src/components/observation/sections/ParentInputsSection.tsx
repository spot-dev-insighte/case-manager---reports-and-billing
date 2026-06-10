import { Users, Plus, X } from "lucide-react";
import { useState } from "react";

export function ParentInputsSection() {
  const [priorities, setPriorities] = useState([
    "Smoother school drop-offs",
    "Increasing independent play time at home"
  ]);
  const [concerns, setConcerns] = useState([
    "Meltdowns after returning from school"
  ]);

  return (
    <section id="parent-inputs" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-rose-100 p-2 rounded-xl text-rose-600">
          <Users className="w-5 h-5" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Parent Inputs</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-bold text-slate-800 block mb-3">Parent Priorities & Goals</label>
          <div className="space-y-2 mb-3">
            {priorities.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700">
                <span>{item}</span>
                <button className="text-slate-400 hover:text-rose-500 shrink-0"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-rose-600 bg-rose-50 rounded-xl border border-dashed border-rose-200 hover:bg-rose-100 transition-colors">
            <Plus className="w-4 h-4" /> Add Priority
          </button>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-800 block mb-3">Parent Concerns</label>
          <div className="space-y-2 mb-3">
            {concerns.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700">
                <span>{item}</span>
                <button className="text-slate-400 hover:text-rose-500 shrink-0"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-rose-600 bg-rose-50 rounded-xl border border-dashed border-rose-200 hover:bg-rose-100 transition-colors">
            <Plus className="w-4 h-4" /> Add Concern
          </button>
        </div>
      </div>
      
      <div className="pt-4 border-t border-slate-100">
        <label className="text-sm font-bold text-slate-800 block mb-3">Home Context & Strengths Shared</label>
        <textarea 
          placeholder="Briefly note helpful context about the home environment..."
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500/20 resize-none h-24 leading-relaxed text-slate-700"
        />
      </div>
    </section>
  );
}
