import { School, Plus, X } from "lucide-react";
import { useState } from "react";

export function SchoolInputsSection() {
  const [concerns, setConcerns] = useState([
    "Difficulty sitting during circle time"
  ]);
  const [goals, setGoals] = useState([
    "Improve peer interaction during recess"
  ]);

  return (
    <section id="school-inputs" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
            <School className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">School & Therapist Inputs</h2>
        </div>
        <button className="px-4 py-2 text-xs font-bold bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors w-fit">
          + Add School Meeting Note
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-bold text-slate-800 block mb-3">Teacher / Therapist Concerns</label>
          <div className="space-y-2 mb-3">
            {concerns.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700">
                <span>{item}</span>
                <button className="text-slate-400 hover:text-amber-500 shrink-0"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-amber-600 bg-amber-50 rounded-xl border border-dashed border-amber-200 hover:bg-amber-100 transition-colors">
            <Plus className="w-4 h-4" /> Add Concern
          </button>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-800 block mb-3">School Goals</label>
          <div className="space-y-2 mb-3">
            {goals.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700">
                <span>{item}</span>
                <button className="text-slate-400 hover:text-amber-500 shrink-0"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-amber-600 bg-amber-50 rounded-xl border border-dashed border-amber-200 hover:bg-amber-100 transition-colors">
            <Plus className="w-4 h-4" /> Add Goal
          </button>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
         <label className="text-sm font-bold text-slate-800 block mb-3">Accommodations Currently Used</label>
         <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium resize-none h-20 leading-relaxed text-slate-700 placeholder-slate-400"
            placeholder="e.g., Noise canceling headphones, visual schedule, preferential seating..."
         />
      </div>
    </section>
  );
}
