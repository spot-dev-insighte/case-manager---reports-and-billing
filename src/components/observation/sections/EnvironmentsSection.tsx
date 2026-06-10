import { MapPin, Plus, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function EnvironmentsSection() {
  const [environments, setEnvironments] = useState([
    {
      id: 1,
      name: "Classroom",
      location: "School",
      logs: 6,
      supports: ["Visual breakdown", "Seating near teacher"],
      difficulties: ["Unstructured floor time"],
      notes: "",
      transitions: "Using a First-Then board helps when moving from floor time to desk."
    }
  ]);

  const addEnvironment = () => {
    setEnvironments([...environments, {
      id: Date.now(),
      name: "New Environment",
      location: "Specify Location",
      logs: 0,
      supports: [],
      difficulties: [],
      notes: "",
      transitions: ""
    }]);
  };

  const removeEnvironment = (id: number) => {
    setEnvironments(environments.filter(e => e.id !== id));
  };

  return (
    <section id="environments" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
          <MapPin className="w-5 h-5" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Learning Environments</h2>
      </div>

      <div className="space-y-8">
        {environments.map((env) => (
          <div key={env.id} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
             <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    defaultValue={env.name} 
                    className="font-bold text-slate-900 text-base bg-transparent border-none focus:ring-0 p-0 max-w-[150px]" 
                    placeholder="Environment Name"
                  />
                  <span className="text-slate-400">•</span>
                  <input 
                    type="text" 
                    defaultValue={env.location} 
                    className="text-sm font-medium text-slate-600 bg-transparent border-none focus:ring-0 p-0 max-w-[120px]" 
                    placeholder="Location"
                  />
                  {env.logs > 0 && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                      {env.logs} Logs
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => removeEnvironment(env.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
             </div>
             
             <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-3">
                 <label className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">What Supports Success?</label>
                 <div className="flex flex-wrap gap-2">
                   {env.supports.map((s, i) => (
                     <span key={i} className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1.5 rounded-lg text-xs font-medium">
                       {s} <button className="ml-1 text-emerald-600 hover:text-emerald-900"><X className="w-3 h-3 inline"/></button>
                     </span>
                   ))}
                   <button className="bg-slate-50 text-slate-500 border border-dashed border-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-100"><Plus className="w-3.5 h-3.5 inline"/> Add</button>
                 </div>
               </div>
               
               <div className="space-y-3">
                 <label className="text-xs font-bold text-rose-700 uppercase tracking-widest block">What Creates Difficulty?</label>
                 <div className="flex flex-wrap gap-2">
                   {env.difficulties.map((s, i) => (
                     <span key={i} className="bg-rose-50 text-rose-800 border border-rose-100 px-3 py-1.5 rounded-lg text-xs font-medium">
                       {s} <button className="ml-1 text-rose-600 hover:text-rose-900"><X className="w-3 h-3 inline"/></button>
                     </span>
                   ))}
                   <button className="bg-slate-50 text-slate-500 border border-dashed border-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-100"><Plus className="w-3.5 h-3.5 inline"/> Add</button>
                 </div>
               </div>
               
               <div className="space-y-3 md:col-span-2">
                  <label className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">Helpful Transition Activities</label>
                  <textarea 
                    defaultValue={env.transitions}
                    placeholder="What transitions work in this environment? (e.g. visual schedule, transition songs...)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm resize-none h-16" 
                  />
               </div>

               <div className="space-y-3 md:col-span-2">
                 <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">Child Response Patterns & Therapist Notes</label>
                 <textarea 
                   defaultValue={env.notes}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm resize-none h-24" 
                 />
               </div>
             </div>
          </div>
        ))}
      </div>

      <button 
        onClick={addEnvironment}
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-bold text-slate-500 hover:border-slate-400 hover:bg-slate-50 transition-colors"
      >
        + Add Learning Environment
      </button>
    </section>
  );
}
