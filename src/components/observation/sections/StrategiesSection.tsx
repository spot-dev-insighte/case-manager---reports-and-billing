import { Plus, X } from "lucide-react";
import { useState } from "react";
import { StrategyBuilder } from "../../iep/goals/StrategyBuilder";

export function StrategiesSection() {
  const [strategies, setStrategies] = useState([
    { id: 1, name: "Visual task breakdown", env: "Classroom", effectiveness: "Working" },
    { id: 2, name: "First-then board", env: "Transition", effectiveness: "Needs Adaptation" }
  ]);
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <section id="strategies" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
       <div className="flex items-center justify-between mb-4">
         <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Strategies Tried Ranking</h2>
         <button onClick={() => setShowBuilder(true)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
           <Plus className="w-3.5 h-3.5" /> Add Strategy
         </button>
       </div>
       <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
         <table className="w-full text-left text-sm whitespace-nowrap">
           <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-widest font-bold border-b border-slate-200">
             <tr>
               <th className="px-5 py-4">Strategy</th>
               <th className="px-5 py-4">Environment</th>
               <th className="px-5 py-4">Effectiveness</th>
               <th className="px-5 py-4 w-10"></th>
             </tr>
           </thead>
           <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-700">
             {strategies.map((strategy) => (
               <tr key={strategy.id} className="hover:bg-slate-50/50 transition-colors">
                 <td className="px-5 py-4">{strategy.name}</td>
                 <td className="px-5 py-4 text-slate-500">{strategy.env}</td>
                 <td className="px-5 py-4">
                   <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                     strategy.effectiveness === 'Working' ? 'text-emerald-700 bg-emerald-50 border border-emerald-100' : 'text-amber-700 bg-amber-50 border border-amber-100'
                   }`}>
                     {strategy.effectiveness}
                   </span>
                 </td>
                 <td className="px-5 py-4">
                   <button className="text-slate-400 hover:text-red-500 transition-colors">
                     <X className="w-4 h-4" />
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       
       {showBuilder && (
         <StrategyBuilder 
           onClose={() => setShowBuilder(false)} 
           onAdd={(title) => {
             setStrategies([...strategies, { id: Date.now(), name: title, env: 'Varied', effectiveness: 'Testing' }]);
             setShowBuilder(false);
           }} 
         />
       )}
    </section>
  );
}
