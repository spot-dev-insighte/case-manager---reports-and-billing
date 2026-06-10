import { Plus, Target, Check, X, FileText } from "lucide-react";
import { useState } from "react";
import { GoalBuilder } from "../../iep/goals/GoalBuilder";

export function GoalsSection() {
  const [showRepository, setShowRepository] = useState(false);
  const [showGoalBuilder, setShowGoalBuilder] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1,
      text: "Improve transition independence using visual schedules from primary therapy room to waiting area.",
      reasoning: "Transition difficulty observed in 7 logs. Parent also prioritized smoother school drops. 'Micro-transition' difficulties explicitly logged.",
      type: "AI Suggested",
      status: "pending"
    }
  ]);

  const repositoryGoals = [
    {
      id: 2,
      text: "Enhance peer interaction during unstructured floor time.",
      reasoning: "Difficulty observed in noisy collaborative activities."
    },
    {
      id: 3,
      text: "Increase use of AAC device for requesting breaks.",
      reasoning: "Support needs logged under Communication & Self-Advocacy."
    }
  ];

  const addCustomGoal = () => {
    setGoals([...goals, {
      id: Date.now(),
      text: "",
      reasoning: "Manually added by therapist.",
      type: "Custom",
      status: "pending"
    }]);
  };

  const addFromRepository = (repoGoal: any) => {
    // Only add if not already present
    if (!goals.find(g => g.id === repoGoal.id)) {
      setGoals([...goals, {
        id: repoGoal.id,
        text: repoGoal.text,
        reasoning: `Based on: ${repoGoal.reasoning}`,
        type: "Repository",
        status: "pending"
      }]);
    }
    setShowRepository(false);
  };

  const updateGoalText = (id: number, newText: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, text: newText } : g));
  };

  const setGoalStatus = (id: number, status: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, status } : g));
  };

  const removeGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <section id="goals" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
       <div className="flex items-center justify-between mb-2">
         <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Emerging Goals</h2>
         <button 
           onClick={() => setShowRepository(!showRepository)}
           className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
         >
           <Target className="w-3.5 h-3.5" /> Goal Repository
         </button>
       </div>
       <p className="text-xs font-medium text-slate-500 max-w-2xl mb-6">
          Includes goals inferred by the Clinical Brain as well as customized case goal candidates added by therapists.
       </p>
       
       <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className={`border rounded-2xl p-5 ${
              goal.status === 'accepted' ? 'border-emerald-300 bg-emerald-50/50' : 
              goal.status === 'rejected' ? 'border-red-200 bg-red-50/20 opacity-60' : 
              'border-slate-200 bg-slate-50/50'
            }`}>
               <div className="flex justify-between items-start mb-3 gap-2">
                 {goal.status === 'accepted' ? (
                   <div className="flex-1">
                     <h3 className="font-bold text-slate-900 text-base leading-snug flex items-center gap-2">
                       <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                       {goal.text || "New Goal"}
                     </h3>
                   </div>
                 ) : (
                   <input 
                     value={goal.text}
                     onChange={(e) => updateGoalText(goal.id, e.target.value)}
                     placeholder="Enter goal description..."
                     className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                   />
                 )}
                 
                 <div className="flex items-center gap-2 shrink-0">
                   <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest ${
                     goal.type === 'AI Suggested' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-700'
                   }`}>
                     {goal.type}
                   </span>
                   {goal.status === 'pending' && goal.type === 'Custom' && (
                     <button onClick={() => removeGoal(goal.id)} className="text-slate-400 hover:text-red-500 p-1">
                       <X className="w-4 h-4" />
                     </button>
                   )}
                 </div>
               </div>

               {goal.reasoning && (
                 <p className="text-xs text-slate-600 mb-5 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm flex gap-2">
                    <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span><strong>Context:</strong> {goal.reasoning}</span>
                 </p>
               )}
               
               {goal.status === 'pending' && (
                 <div className="flex flex-wrap gap-2 mt-4">
                    <button onClick={() => setGoalStatus(goal.id, 'accepted')} className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 shadow-sm transition-colors flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> Accept Goal
                    </button>
                    <button onClick={() => setGoalStatus(goal.id, 'rejected')} className="px-4 py-2 bg-white border border-slate-200 text-red-600 text-xs font-bold rounded-xl hover:bg-red-50 shadow-sm transition-colors">
                      Reject
                    </button>
                 </div>
               )}
               {goal.status !== 'pending' && (
                 <div className="mt-2 text-right">
                   <button onClick={() => setGoalStatus(goal.id, 'pending')} className="text-xs font-bold text-slate-500 hover:text-slate-700 underline">
                     Undo decision
                   </button>
                 </div>
               )}
            </div>
          ))}
          
          <button 
            onClick={() => setShowGoalBuilder(true)}
            className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-bold text-slate-500 hover:border-slate-400 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Custom Goal Candidate
          </button>
       </div>
       
       {showGoalBuilder && <GoalBuilder onClose={() => setShowGoalBuilder(false)} />}

       {showRepository && (
         <div className="mt-8 pt-8 border-t border-slate-200 animate-in fade-in slide-in-from-top-4 duration-300">
           <h3 className="text-sm font-bold text-indigo-900 mb-4 flex items-center gap-2">
             <Target className="w-4 h-4" /> Goal Repository Based on Observations
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {repositoryGoals.map((repoGoal) => (
               <div key={repoGoal.id} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col h-full">
                  <p className="text-sm font-bold text-slate-800 mb-2">{repoGoal.text}</p>
                  <p className="text-xs text-slate-500 mb-4 flex-1">Based on: {repoGoal.reasoning}</p>
                  
                  {goals.find(g => g.id === repoGoal.id) ? (
                    <button disabled className="self-start flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold opacity-80 cursor-not-allowed">
                      <Check className="w-3 h-3" /> Added
                    </button>
                  ) : (
                    <button 
                      onClick={() => addFromRepository(repoGoal)}
                      className="self-start flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-lg text-xs font-bold text-indigo-600 hover:bg-slate-50 transition-colors"
                    >
                      <Plus className="w-3 h-3" /> Add Goal
                    </button>
                  )}
               </div>
             ))}
           </div>
         </div>
       )}
    </section>
  );
}
