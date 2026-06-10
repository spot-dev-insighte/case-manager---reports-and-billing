import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export function IepEnvironmentsTab() {
  const [environments, setEnvironments] = useState([
    {
      title: 'Learning & Academic Environment',
      currentPattern: 'Participates more consistently when tasks are short, predictable and visually organised.',
      harder: [
        'Instructions are long',
        'Several steps are given together',
        'The task is abstract',
        'The endpoint is unclear'
      ],
      accommodations: [
        'Visual task breakdown',
        'One instruction at a time',
        'Choice of response format',
        'Familiar-interest examples',
        'Processing time'
      ],
      adultPractice: 'Check understanding without repeated rapid questioning.',
      goals: ['Comprehension access', 'Independent task initiation']
    },
    {
      title: 'Social & Emotional Environment',
      currentPattern: 'Seeks connection naturally and initiates interactions with warmth, but struggles with personal boundary awareness in unstructured times.',
      harder: [
        'Interactions with strangers without clear roles',
        'Situations where personal boundaries aren\'t clearly modeled',
        'Lengthy periods without emotional check-ins'
      ],
      accommodations: [
        'Identified trusted adult for check-ins',
        'Simple emotion vocabulary ("happy", "silly", "proud")',
        'Short video modeling for social understanding',
        'Clear physical boundaries'
      ],
      adultPractice: 'Respond warmly to repetitive connection-seeking questions; provide consistent, gentle redirection for personal space.',
      goals: ['Emotional expression', 'Personal boundary awareness']
    }
  ]);

  const updateEnvField = (envIndex: number, field: string, value: string) => {
    const updated = [...environments];
    (updated[envIndex] as any)[field] = value;
    setEnvironments(updated);
  };

  const updateListField = (envIndex: number, listField: 'harder' | 'accommodations' | 'goals', listIndex: number, value: string) => {
    const updated = [...environments];
    updated[envIndex][listField][listIndex] = value;
    setEnvironments(updated);
  };

  const removeListItem = (envIndex: number, listField: 'harder' | 'accommodations' | 'goals', listIndex: number) => {
    const updated = [...environments];
    updated[envIndex][listField].splice(listIndex, 1);
    setEnvironments(updated);
  };

  const addListItem = (envIndex: number, listField: 'harder' | 'accommodations' | 'goals') => {
    const updated = [...environments];
    updated[envIndex][listField].push('');
    setEnvironments(updated);
  };

  const addEnvironment = () => {
    setEnvironments([
      ...environments,
      {
        title: 'New Environment',
        currentPattern: '',
        harder: [''],
        accommodations: [''],
        adultPractice: '',
        goals: []
      }
    ]);
  };

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="text-slate-500 text-sm">What in the environment is making participation easier or harder?</p>
        <button 
          onClick={addEnvironment}
          className="bg-emerald-800 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-900 transition-colors shadow-sm whitespace-nowrap flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Environment
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {environments.map((env, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-emerald-900 px-6 py-4 flex items-center justify-between">
              <input 
                type="text"
                className="bg-transparent border-none text-sm font-bold uppercase tracking-widest text-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1 w-2/3"
                value={env.title}
                onChange={(e) => updateEnvField(i, 'title', e.target.value)}
              />
              <button 
                onClick={() => setEnvironments(environments.filter((_, idx) => idx !== i))}
                className="p-1 hover:bg-emerald-800 rounded-md text-emerald-300 hover:text-white transition-colors"
                title="Remove Environment"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Current Pattern</h4>
                <textarea 
                  className="w-full text-sm text-slate-800 font-medium bg-slate-50 border border-slate-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-colors resize-none min-h-[60px]"
                  value={env.currentPattern}
                  onChange={(e) => updateEnvField(i, 'currentPattern', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3 bg-amber-50 inline-block px-2 py-1 rounded-md">Participation becomes harder when:</h4>
                    <ul className="space-y-2">
                      {env.harder.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-slate-700 items-start group">
                          <span className="text-amber-400 mt-2 shrink-0">•</span> 
                          <textarea 
                            className="flex-1 bg-transparent border-none p-1 focus:bg-amber-50 rounded focus:outline-none resize-none"
                            value={item}
                            rows={1}
                            onChange={(e) => updateListField(i, 'harder', idx, e.target.value)}
                          />
                          <button onClick={() => removeListItem(i, 'harder', idx)} className="mt-1 opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 rounded"><X className="w-3.5 h-3.5" /></button>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => addListItem(i, 'harder')} className="mt-2 text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"><Plus className="w-3 h-3" /> Add Item</button>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 bg-emerald-50 inline-block px-2 py-1 rounded-md">Helpful Accommodations</h4>
                    <ul className="space-y-2">
                      {env.accommodations.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-slate-700 items-start group">
                          <span className="text-emerald-400 mt-2 shrink-0">•</span> 
                          <textarea 
                            className="flex-1 bg-transparent border-none p-1 focus:bg-emerald-50 rounded focus:outline-none resize-none"
                            value={item}
                            rows={1}
                            onChange={(e) => updateListField(i, 'accommodations', idx, e.target.value)}
                          />
                          <button onClick={() => removeListItem(i, 'accommodations', idx)} className="mt-1 opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 rounded"><X className="w-3.5 h-3.5" /></button>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => addListItem(i, 'accommodations')} className="mt-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"><Plus className="w-3 h-3" /> Add Item</button>
                 </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Adult Practice Shift</h4>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner border-l-4 border-l-emerald-500 flex focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/20 transition-colors">
                    <span className="text-emerald-500 font-serif text-lg leading-none mt-1 mr-1">"</span>
                    <textarea 
                      className="flex-1 bg-transparent border-none text-sm text-slate-700 italic focus:outline-none resize-none min-h-[40px]"
                      value={env.adultPractice}
                      onChange={(e) => updateEnvField(i, 'adultPractice', e.target.value)}
                    />
                    <span className="text-emerald-500 font-serif text-lg leading-none mt-auto ml-1">"</span>
                 </div>
              </div>
            </div>

            <div className="bg-[#FDFCFB] border-t border-slate-100 p-4 px-6 flex items-start gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 shrink-0">Linked Goals:</span>
              <div className="flex flex-wrap gap-2 flex-1">
                {env.goals.map((goal, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-sm group">
                    <input 
                      className="bg-transparent border-none p-0 focus:outline-none focus:ring-0 max-w-[120px] sm:max-w-none"
                      value={goal}
                      onChange={(e) => updateListField(i, 'goals', idx, e.target.value)}
                    />
                    <button onClick={() => removeListItem(i, 'goals', idx)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-3 h-3" /></button>
                  </span>
                ))}
                <button onClick={() => addListItem(i, 'goals')} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md shadow-sm">
                  + Link Goal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
