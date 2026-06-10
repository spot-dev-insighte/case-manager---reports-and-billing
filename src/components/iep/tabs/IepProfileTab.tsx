import { useState } from 'react';

export function IepProfileTab() {
  const [profile, setProfile] = useState({
    name: 'Manan',
    ageGrade: '9 Years Old / 4th Grade',
    interests: 'Basketball, Chopsticks game, States and capitals, Dance (Frog Jumps)',
    helpsConnection: 'Warmth, gentle reminders, structure, acknowledging him, answering his questions.',
    childVoice: 'Lengthy, abstract tasks without visual appeal; language-heavy tasks without breaks.'
  });

  const [strengths, setStrengths] = useState<Record<string, {text: string, evidence: string, support: string}[]>>({
    'Cognitive & Learning': [
      { text: 'Strong numerical reasoning', evidence: 'Accurately performs mental multiplication and enjoys number games.', support: 'Use maths, patterns and game structures to increase engagement in language-heavy tasks.' },
      { text: 'Strong visual memory', evidence: 'Rote-learning ability is high and recalls details accurately.', support: 'Provide visual examples for abstract tasks.' }
    ],
    'Communication': [
      { text: 'Eager to connect', evidence: 'Initiates conversations with repeated questions.', support: 'Answer predictable questions to build trust before placing demands.' },
      { text: 'Gestural communication', evidence: 'Naturally uses pointing and leaning in.', support: 'Pair verbal instructions with gestural cues.' }
    ],
    'Social & Relational': [
      { text: 'Observational learning', evidence: 'Works well in groups when he can model peers.', support: 'Provide group work or peer buddies for new activities.' }
    ]
  });

  return (
    <div className="max-w-5xl space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-[#FDFCFB] px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900">About the Child</h3>
          <span className="text-[10px] text-slate-400 font-medium">Synced from Observation</span>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
             <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1 mb-1">Preferred Name</span>
               <input 
                 type="text" 
                 className="w-full bg-transparent border-none text-sm font-medium text-slate-800 px-2 pb-1 focus:outline-none"
                 value={profile.name}
                 onChange={(e) => setProfile({...profile, name: e.target.value})}
               />
             </div>
             <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1 mb-1">Age / Grade</span>
               <input 
                 type="text" 
                 className="w-full bg-transparent border-none text-sm font-medium text-slate-800 px-2 pb-1 focus:outline-none"
                 value={profile.ageGrade}
                 onChange={(e) => setProfile({...profile, ageGrade: e.target.value})}
               />
             </div>
             <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1 mb-1">Interests & Hobbies</span>
               <textarea 
                 className="w-full bg-transparent border-none text-sm font-medium text-slate-800 px-2 pb-1 focus:outline-none resize-none min-h-[40px]"
                 value={profile.interests}
                 onChange={(e) => setProfile({...profile, interests: e.target.value})}
               />
             </div>
          </div>
          <div className="space-y-4">
             <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors h-full">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1 mb-1">What helps connection</span>
               <textarea 
                 className="w-full h-[calc(100%-25px)] bg-transparent border-none text-sm font-medium text-slate-800 px-2 focus:outline-none resize-none"
                 value={profile.helpsConnection}
                 onChange={(e) => setProfile({...profile, helpsConnection: e.target.value})}
               />
             </div>
             <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white transition-colors h-full">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1 mb-1">Child Voice (Dislikes/Stressors)</span>
               <textarea 
                 className="w-full h-[calc(100%-25px)] bg-transparent border-none text-sm font-medium text-slate-800 px-2 focus:outline-none resize-none"
                 value={profile.childVoice}
                 onChange={(e) => setProfile({...profile, childVoice: e.target.value})}
               />
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 mb-4">
         <h2 className="text-lg font-bold text-slate-900">Strength Profile</h2>
         <span className="text-sm text-slate-500">How existing abilities can support participation</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {Object.entries(strengths).map(([category, items], idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-700">{category}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {(items as any[]).map((item, i) => (
                <div key={i} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                     <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Strength</span>
                     <span className="text-sm font-bold text-slate-900">{item.text}</span>
                  </div>
                  <div className="md:col-span-1">
                     <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Evidence</span>
                     <p className="text-sm text-slate-700">{item.evidence}</p>
                  </div>
                  <div className="md:col-span-1">
                     <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Can support</span>
                     <p className="text-sm text-slate-700 font-medium bg-slate-50 rounded-lg p-3 border border-slate-100">{item.support}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
