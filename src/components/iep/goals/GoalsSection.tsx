import React, { useState, useRef, useEffect } from "react";
import { Plus, Target, Check, Search, ChevronDown, CheckCircle2, Sparkles } from "lucide-react";
import { GoalBuilder } from "./GoalBuilder";

export function GoalsSection() {
  const [showGoalBuilder, setShowGoalBuilder] = useState(false);
  const [showSuggestedGoals, setShowSuggestedGoals] = useState(false);
  const [environments, setEnvironments] = useState(['Therapy Room', 'Classroom']);
  const [isAddingEnv, setIsAddingEnv] = useState(false);
  const [envInputValue, setEnvInputValue] = useState("");
  const envInputRef = useRef<HTMLInputElement>(null);
  const [goalEditing, setGoalEditing] = useState(false);
  const [goalStatement, setGoalStatement] = useState('Given a visual transition countdown and access to his AAC device, Manan will request "help" or "more time" during unstructured transitions instead of dropping to the floor, in 4 out of 5 observed opportunities over a two-week period.');
  const [strategy, setStrategy] = useState('Utilize proactive visual countdowns (2-minute warning). Expected outcome is increased self-regulation and communicative initiation prior to distress escalation.');

  useEffect(() => {
    if (isAddingEnv && envInputRef.current) {
      envInputRef.current.focus();
    }
  }, [isAddingEnv]);

  const handleAddEnvironment = () => {
    if (envInputValue.trim() && !environments.includes(envInputValue.trim())) {
      setEnvironments([...environments, envInputValue.trim()]);
    }
    setEnvInputValue("");
    setIsAddingEnv(false);
  };

  const handleEnvKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddEnvironment();
    } else if (e.key === 'Escape') {
      setIsAddingEnv(false);
      setEnvInputValue("");
    }
  };

  return (
    <section id="section-goals" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">12</span>
              <h2 className="text-xl font-bold text-slate-900">Goals</h2>
            </div>
            <p className="text-sm text-slate-500">Measurable participation goals.</p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setShowSuggestedGoals(!showSuggestedGoals)}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors"
            >
              Suggested (2)
            </button>
            <button 
              onClick={() => setShowGoalBuilder(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Custom Goal
            </button>
          </div>
        </div>

        {showSuggestedGoals && (
          <div className="bg-indigo-50/50 p-6 border-b border-indigo-100 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-indigo-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" /> Suggested Goals Based on Recent Progress Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white border border-indigo-100 rounded-xl p-4 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer" onClick={() => setShowGoalBuilder(true)}>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 block">Social Participation</span>
                 <p className="text-sm font-bold text-slate-800 mb-2">Initiate peer play using visual scripts</p>
                 <p className="text-xs text-slate-500">Based on recent notes noting avoidance during recess.</p>
               </div>
               <div className="bg-white border border-indigo-100 rounded-xl p-4 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer" onClick={() => setShowGoalBuilder(true)}>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 block">Executive Functioning</span>
                 <p className="text-sm font-bold text-slate-800 mb-2">Pack school bag with checklist support</p>
                 <p className="text-xs text-slate-500">Recommended based on 'forgetting materials' reports.</p>
               </div>
            </div>
          </div>
        )}

        {/* Dashboard/Summary at top */}
        <div className="border-b border-slate-100 bg-white grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
           <div className="p-4 text-center">
             <p className="text-2xl font-bold text-slate-900">2</p>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Active</p>
           </div>
           <div className="p-4 text-center">
             <p className="text-2xl font-bold text-amber-600">1</p>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Draft</p>
           </div>
           <div className="p-4 text-center">
             <p className="text-2xl font-bold text-slate-900">0</p>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Missing Baseline</p>
           </div>
           <div className="p-4 text-center bg-slate-50">
             <p className="text-2xl font-bold text-slate-900">0</p>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Needs Review</p>
           </div>
        </div>

        <div className="p-6 space-y-4 bg-slate-50/50">
          
          {/* Goal Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
             <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                   <div className="flex flex-wrap items-center gap-2">
                     <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                       <Target className="w-3 h-3" /> Communication
                     </span>
                     <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-100">
                       High Priority
                     </span>
                     <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                       Active
                     </span>
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg max-w-2xl leading-snug">
                     Requesting help during unstructured transitions
                   </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                   <div className="text-right hidden sm:block">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</p>
                     <p className="text-sm font-bold text-emerald-600">Emerging</p>
                   </div>
                   <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                     <ChevronDown className="w-5 h-5" />
                   </button>
                </div>
             </div>

             <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                 <div className="space-y-4">
                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Baseline</label>
                     <p className="text-sm text-slate-700">Currently exhibits distress (crying, dropping to floor) during 80% of unstructured transitions without requesting help.</p>
                   </div>
                   <div>
                   <div className="flex items-center justify-between mb-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Goal Statement</label>
                     <button onClick={() => setGoalEditing(!goalEditing)} className="text-[10px] text-blue-600 font-bold hover:underline">{goalEditing ? 'Save' : 'Edit'}</button>
                   </div>
                   {goalEditing ? (
                     <textarea 
                       className="w-full text-sm font-medium text-slate-900 bg-white border border-blue-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 h-24 resize-none"
                       value={goalStatement}
                       onChange={(e) => setGoalStatement(e.target.value)}
                     />
                   ) : (
                     <p className="text-sm font-medium text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-100">
                       {goalStatement}
                     </p>
                   )}
                 </div>
                 <div>
                   <div className="flex items-center justify-between mb-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Intervention Strategy & Outcomes</label>
                   </div>
                   {goalEditing ? (
                     <textarea 
                       className="w-full text-sm font-medium text-slate-900 bg-white border border-blue-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 h-20 resize-none"
                       value={strategy}
                       onChange={(e) => setStrategy(e.target.value)}
                     />
                   ) : (
                     <p className="text-sm text-slate-700 mb-2">{strategy}</p>
                   )}
                   
                   {!goalEditing && (
                     <div className="mt-3 bg-indigo-50/50 border border-indigo-100 rounded-lg p-3">
                       <p className="text-[10px] font-bold text-indigo-800 uppercase tracking-widest mb-1 flex items-center gap-1"><Sparkles className="w-3 h-3" /> Clinical Insight: Strategy Suggestion</p>
                       <p className="text-xs text-indigo-900">Current progress is "Emerging". Progress notes indicate visual countdowns are sometimes ignored. <b>Suggested Alternative:</b> Combine visual countdown with a high-preference auditory signal (e.g., specific chime) 2 minutes before transition.</p>
                       <button 
                         onClick={() => {
                           setStrategy(strategy + " Add a high-preference auditory signal (e.g. chime) along with the visual countdown.");
                           setGoalEditing(true);
                         }}
                         className="text-xs font-bold text-indigo-600 mt-2 hover:underline"
                       >
                         Apply Suggestion
                       </button>
                     </div>
                   )}
                 </div>
              </div>

                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Measurement</label>
                       <p className="text-sm text-slate-700 font-medium">Successful Opportunities</p>
                     </div>
                     <div>
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Target</label>
                       <p className="text-sm text-slate-700 font-medium">4 out of 5 (80%)</p>
                     </div>
                   </div>
                   
                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Generalisation Environments</label>
                     <div className="flex flex-wrap gap-2">
                       {environments.map(env => (
                         <span key={env} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">{env}</span>
                       ))}
                       {isAddingEnv ? (
                         <div className="flex items-center">
                           <input
                             ref={envInputRef}
                             type="text"
                             value={envInputValue}
                             onChange={(e) => setEnvInputValue(e.target.value)}
                             onKeyDown={handleEnvKeyDown}
                             onBlur={handleAddEnvironment}
                             placeholder="E.g., Cafeteria..."
                             className="text-xs px-2.5 py-1 rounded-md border border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white w-28"
                           />
                         </div>
                       ) : (
                         <button 
                           onClick={() => setIsAddingEnv(true)}
                           className="text-xs text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-dashed border-slate-300 hover:bg-slate-100"
                         >
                           + Add Environment
                         </button>
                       )}
                     </div>
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Clinical Instructions & Input</label>
                     <div className="space-y-2 mt-1">
                       <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded-lg">
                         <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block mb-1">For Therapists (Internal)</span>
                         <p className="text-xs text-blue-900">Ensure AAC device is charged and within 2 feet before initiating transition warning. Log precursor behaviors.</p>
                       </div>
                       <div className="bg-amber-50/50 p-2.5 border border-amber-100 rounded-lg">
                         <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-1">For Parents (Home)</span>
                         <p className="text-xs text-amber-900">Please practice the "time to go" visual card at home during playtime transitions to reinforce consistency.</p>
                       </div>
                     </div>
                   </div>
                </div>
             </div>
             
             <div className="bg-slate-50 border-t border-slate-100 p-3 px-5 flex items-center justify-between">
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Passed Clinical Quality Check
                </p>
                <div className="flex gap-2">
                  <button className="text-xs font-bold text-indigo-600 hover:underline">Linked Strategies (2)</button>
                  <span className="text-slate-300">•</span>
                  <button className="text-xs font-bold text-indigo-600 hover:underline">View Evidence</button>
                </div>
             </div>
          </div>
          
        </div>
      </div>

      {showGoalBuilder && (
        <GoalBuilder onClose={() => setShowGoalBuilder(false)} />
      )}
    </section>
  );
}
