import { User, Mic, Sparkles } from "lucide-react";

export function ChildSnapshotSection() {
  return (
    <section id="snapshot" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
          <User className="w-5 h-5" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Child Snapshot</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-slate-100">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Name</p>
          <p className="font-bold text-slate-900 text-sm">Manan Sarda</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Age</p>
          <p className="font-bold text-slate-900 text-sm">5 Years 2 Months</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Grade / School</p>
          <p className="font-bold text-slate-900 text-sm">Kindergarten • Oakridge</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Observation</p>
          <p className="font-bold text-slate-900 text-sm">5 May - 23 May</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-3">
          <label className="text-sm font-bold text-slate-800">About The Child</label>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100">
            <Mic className="w-3.5 h-3.5" /> Voice Record
          </button>
        </div>
        
        <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-4 mb-4">
          <p className="text-xs font-bold text-blue-800 flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AI Insights from Logs
          </p>
          <ul className="space-y-2 text-sm text-blue-900/80 font-medium list-disc list-inside">
            <li>Highly responsive to visual schedules and countdowns.</li>
            <li>Shows strong interest in mechanical objects and building blocks.</li>
            <li>Struggles with unexpected transitions but recovers quickly with deep pressure input.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Additional Pointers</p>
          <textarea 
            placeholder="Add more pointers through a strengths-based lens..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none h-24 leading-relaxed text-slate-700"
          />
        </div>
      </div>
    </section>
  );
}
