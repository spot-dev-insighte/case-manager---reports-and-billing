import { Plus, Check, Map, Brain, Lightbulb, User, ShieldCheck, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export function LearningEnvironmentsSection() {
  const [environments, setEnvironments] = useState([
    {
      id: 'env-1',
      title: 'Therapy Room',
      supports: [
        {
          title: 'Movement Breaks',
          why: 'Supports regulation and sustained participation.',
          responsible: 'Teacher and Shadow Teacher'
        }
      ],
      worksWell: 'Dimmed lighting preferred. Access to a quiet corner with beanbags.',
      difficulty: 'Fluorescent lighting hum.'
    },
    {
      id: 'env-2',
      title: 'Classroom',
      supports: [
        {
          title: 'Visual Schedule',
          why: 'Reduces uncertainty and cognitive load during transitions.',
          responsible: 'All supporting adults'
        }
      ],
      worksWell: 'Visual boundaries clearly marked.',
      difficulty: 'High traffic areas during unstructured times.'
    }
  ]);

  const [activeAddingEnvId, setActiveAddingEnvId] = useState<string | null>(null);
  const [newSupport, setNewSupport] = useState({ title: '', why: '', responsible: '' });

  const handleAddSupport = (envId: string) => {
    if (newSupport.title) {
      setEnvironments(envs => envs.map(env => {
        if (env.id === envId) {
          return {
            ...env,
            supports: [...env.supports, newSupport]
          };
        }
        return env;
      }));
      setNewSupport({ title: '', why: '', responsible: '' });
      setActiveAddingEnvId(null);
    }
  };

  const handleAddEnvironment = () => {
    const newId = `env-${Math.random().toString(36).substr(2, 9)}`;
    setEnvironments([
      ...environments,
      {
        id: newId,
        title: 'New Environment',
        supports: [],
        worksWell: '',
        difficulty: ''
      }
    ]);
    setTimeout(() => {
      document.getElementById(newId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="section-environments" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">2</span>
              <h2 className="text-xl font-bold text-slate-900">Learning Environments & Supports</h2>
            </div>
            <p className="text-sm text-slate-500">Environmental adaptations that support participation, with specific accommodations.</p>
          </div>
          <button 
            type="button"
            onClick={handleAddEnvironment}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Environment
          </button>
        </div>

        <div className="p-6 space-y-8">
          
          {/* AI Observation Insights Block */}
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 mb-2">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-indigo-900 mb-2">Insights from Recent Observation Reports</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-indigo-800"><span className="font-bold">Cafeteria Environment:</span> Session logs from last week show increased pacing and echolalia in the cafeteria during peak hours. Consider adding <span className="font-semibold px-1 bg-white rounded text-indigo-600">Noise-cancelling headphones</span> or <span className="font-semibold px-1 bg-white rounded text-indigo-600">Alternative quiet lunch space</span>.</p>
                  </div>
                  <div className="flex gap-2">
                    <User className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-indigo-800"><span className="font-bold">Therapy Room:</span> Progress notes indicate better engagement when the room lighting is dimmed and movement breaks are offered every 15 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {environments.map(env => (
            <div key={env.id} id={env.id} className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
               <div className="flex items-center gap-2 mb-4">
                  <Map className="w-5 h-5 text-indigo-600" />
                  <input 
                    type="text" 
                    className="font-bold text-lg text-slate-800 bg-transparent border-none focus:ring-2 focus:ring-blue-500/20 rounded outline-none p-1 w-full max-w-sm" 
                    value={env.title}
                    onChange={(e) => {
                      setEnvironments(envs => envs.map(ae => ae.id === env.id ? { ...ae, title: e.target.value } : ae));
                    }}
                  />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">What supports participation?</label>
                    <textarea 
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none bg-slate-50 h-24 resize-none"
                      value={env.worksWell}
                      onChange={(e) => {
                        setEnvironments(envs => envs.map(ae => ae.id === env.id ? { ...ae, worksWell: e.target.value } : ae));
                      }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">What creates difficulty?</label>
                    <textarea 
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:outline-none bg-slate-50 h-24 resize-none"
                      value={env.difficulty}
                      onChange={(e) => {
                        setEnvironments(envs => envs.map(ae => ae.id === env.id ? { ...ae, difficulty: e.target.value } : ae));
                      }}
                    />
                  </div>
               </div>

               <div className="border-t border-slate-100 pt-4">
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="text-sm font-bold text-slate-800">Specific Accommodations & Supports</h4>
                   <button 
                     onClick={() => {
                       setActiveAddingEnvId(env.id);
                       setNewSupport({ title: '', why: '', responsible: '' });
                     }}
                     className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                   >
                     <Plus className="w-3 h-3" /> Add Support
                   </button>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {env.supports.map((sup, idx) => (
                     <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-slate-900 text-sm">{sup.title}</h3>
                        </div>
                        <div className="space-y-2 flex-1">
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Why it is needed</span>
                            <span className="text-xs text-slate-700">{sup.why || "-"}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Responsible</span>
                            <span className="text-xs text-slate-700">{sup.responsible || "-"}</span>
                          </div>
                        </div>
                     </div>
                   ))}

                   {activeAddingEnvId === env.id && (
                     <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/30 flex flex-col h-full shadow-sm">
                       <div className="space-y-3 flex-1">
                         <input 
                           type="text" 
                           placeholder="Support Title..." 
                           className="w-full text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                           value={newSupport.title}
                           onChange={(e) => setNewSupport({...newSupport, title: e.target.value})}
                         />
                         <textarea 
                           placeholder="Why it is needed..." 
                           className="w-full text-xs text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 h-16 resize-none"
                           value={newSupport.why}
                           onChange={(e) => setNewSupport({...newSupport, why: e.target.value})}
                         />
                         <input 
                           type="text" 
                           placeholder="Responsible Adult..." 
                           className="w-full text-xs text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                           value={newSupport.responsible}
                           onChange={(e) => setNewSupport({...newSupport, responsible: e.target.value})}
                         />
                       </div>
                       <div className="mt-3 pt-3 border-t border-blue-100 flex justify-end gap-2">
                         <button 
                           onClick={() => setActiveAddingEnvId(null)}
                           className="px-3 py-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg text-xs font-bold"
                         >
                           Cancel
                         </button>
                         <button 
                           onClick={() => handleAddSupport(env.id)}
                           disabled={!newSupport.title}
                           className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                           Save
                         </button>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
