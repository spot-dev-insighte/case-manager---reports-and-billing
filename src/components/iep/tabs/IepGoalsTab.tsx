import React, { useState } from 'react';
import { Plus, Target, CheckCircle2, ChevronDown, Activity, AlertCircle, X } from 'lucide-react';

export function IepGoalsTab() {
  const [activeGoal, setActiveGoal] = useState<number | null>(1);
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Comprehension Access',
      type: 'Academic access goal',
      priority: 'Accessing language-heavy comprehension',
      environment: 'Learning & Academic Environment',
      currentPattern: 'The child reads fluently but disengages when comprehension tasks are abstract, lengthy or presented only verbally.',
      wording: 'During literacy and numeracy activities involving written comprehension, the child will be supported to demonstrate understanding through speech, drawing, sequencing or writing, using visual task breakdowns and additional processing time, with decreasing reliance on repeated adult prompting.',
      strategies: [
        'Visual task breakdown',
        'Familiar-interest examples',
        'Choice of response format'
      ],
      progress: 'Drafting'
    },
    {
      id: 2,
      title: 'Transition & Task Initiation',
      type: 'Executive functioning goal',
      priority: 'Predictability in shifting contexts',
      environment: 'Social & Emotional Environment',
      currentPattern: 'Displays repeated questioning and anxiety during high-noise unstructured transitions.',
      wording: 'Support the child to transition between familiar activities using an agreed preview or visual cue and communicate when additional time or support is needed.',
      strategies: [
        'Visual timeline preview',
        'Transitional object'
      ],
      progress: 'Drafting'
    }
  ]);

  const handleCreateNewGoal = () => {
    const newId = goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1;
    const newGoal = {
      id: newId,
      title: 'New Goal',
      type: 'Participation goal',
      priority: '',
      environment: '',
      currentPattern: 'Describe current baseline...',
      wording: 'Write formal wording...',
      strategies: [],
      progress: 'Drafting'
    };
    setGoals([...goals, newGoal]);
    setActiveGoal(newId);
  };

  const removeGoal = (idToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedGoals = goals.filter(g => g.id !== idToRemove);
    setGoals(updatedGoals);
    if (activeGoal === idToRemove) {
      setActiveGoal(updatedGoals.length > 0 ? updatedGoals[0].id : null);
    }
  };

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <p className="text-slate-500 text-sm">Design goals focusing on meaningful participation and environmental accommodations.</p>
        <button 
          onClick={handleCreateNewGoal}
          className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-900 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Goal List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1 mb-2">Active Goals</h3>
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setActiveGoal(goal.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative group ${
                activeGoal === goal.id
                  ? 'bg-white border-emerald-300 ring-1 ring-emerald-500/20 shadow-sm'
                  : 'bg-[#FDFCFB] border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                  Goal {goal.id}
                </span>
                <span 
                  onClick={(e) => removeGoal(goal.id, e)} 
                  className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className={`font-semibold mb-1 ${activeGoal === goal.id ? 'text-emerald-900' : 'text-slate-800'}`}>
                {goal.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-1">{goal.type}</p>
            </button>
          ))}
          
          <button onClick={handleCreateNewGoal} className="w-full text-left p-4 rounded-xl border border-dashed border-slate-300 text-slate-500 hover:bg-white hover:text-emerald-700 hover:border-emerald-300 transition-all flex items-center justify-center gap-2 mt-4">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add from Template</span>
          </button>
        </div>

        {/* Right Column: Goal Details Builder */}
        <div className="lg:col-span-2">
          {activeGoal ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {(() => {
                const goal = goals.find(g => g.id === activeGoal)!;
                return (
                  <>
                    <div className="bg-[#FDFCFB] px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900 flex items-center gap-2 w-full">
                        <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                        <input 
                           type="text"
                           className="bg-transparent border-none font-bold uppercase focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1 flex-1"
                           value={goal.title}
                           onChange={(e) => setGoals(goals.map(g => g.id === activeGoal ? {...g, title: e.target.value} : g))}
                        />
                      </h3>
                      <button className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full shrink-0">Edit Goal Type</button>
                    </div>
                    
                    <div className="p-6 space-y-8">
                      {/* Section 1 */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Context & Scope</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-1 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors">
                            <span className="block px-2 pt-2 text-[10px] uppercase font-bold text-slate-400 mb-1">Priority Addressed</span>
                            <select 
                              className="w-full bg-transparent border-none text-sm font-medium text-slate-800 px-2 pb-2 focus:outline-none appearance-none"
                              value={goal.priority}
                              onChange={(e) => setGoals(goals.map(g => g.id === activeGoal ? {...g, priority: e.target.value} : g))}
                            >
                              <option value="" disabled>Select a priority</option>
                              <option value="Accessing language-heavy comprehension">Accessing language-heavy comprehension</option>
                              <option value="Predictability in shifting contexts">Predictability in shifting contexts</option>
                              <option value="Maintaining personal boundaries">Maintaining personal boundaries</option>
                              <option value="Emotional expression & self-regulation">Emotional expression & self-regulation</option>
                            </select>
                          </div>
                          <div className="bg-slate-50 p-1 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors">
                            <span className="block px-2 pt-2 text-[10px] uppercase font-bold text-slate-400 mb-1">Environment</span>
                            <select 
                              className="w-full bg-transparent border-none text-sm font-medium text-slate-800 px-2 pb-2 focus:outline-none appearance-none"
                              value={goal.environment}
                              onChange={(e) => setGoals(goals.map(g => g.id === activeGoal ? {...g, environment: e.target.value} : g))}
                            >
                              <option value="" disabled>Select Environment</option>
                              <option value="Learning & Academic Environment">Learning & Academic Environment</option>
                              <option value="Social & Emotional Environment">Social & Emotional Environment</option>
                              <option value="Physical Environment">Physical Environment</option>
                              <option value="Home Environment">Home Environment</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Section 2 */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          Current Baseline
                        </h4>
                        <textarea 
                          className="w-full text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-colors resize-none min-h-[80px]"
                          value={goal.currentPattern}
                          onChange={(e) => setGoals(goals.map(g => g.id === activeGoal ? {...g, currentPattern: e.target.value} : g))}
                        />
                      </div>

                      {/* Section 3 */}
                      <div>
                        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3 bg-emerald-50 inline-block px-3 py-1 rounded-md">
                          Formal Wording
                        </h4>
                        <div className="border border-emerald-200 rounded-xl bg-white shadow-sm ring-1 ring-emerald-500/5 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-colors">
                          <textarea 
                            className="w-full text-sm text-emerald-950 leading-relaxed font-medium p-4 bg-transparent border-none focus:outline-none resize-none min-h-[120px]"
                            value={goal.wording}
                            onChange={(e) => setGoals(goals.map(g => g.id === activeGoal ? {...g, wording: e.target.value} : g))}
                          />
                        </div>
                      </div>

                      {/* Section 4 */}
                      <div className="border-t border-slate-100 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Linked Strategies</h4>
                          <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">Manage Strategy Pool</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {goal.strategies.map((strategy, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-[#FDFCFB] border border-slate-200 text-slate-700 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              {strategy}
                            </span>
                          ))}
                          <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="h-full min-h-[400px] flex items-center justify-center text-slate-400 bg-white rounded-2xl border border-slate-200 border-dashed">
              Select or create a goal to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
