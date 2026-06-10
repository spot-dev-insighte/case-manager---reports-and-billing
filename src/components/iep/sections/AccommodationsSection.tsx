import { useState } from "react";
import { Plus, ShieldCheck, X } from "lucide-react";

export function AccommodationsSection() {
  const [accommodations, setAccommodations] = useState([
    {
      title: 'Movement Breaks',
      category: 'Sensory Access',
      required: true,
      why: 'Supports regulation and sustained participation.',
      when: 'Classroom and transition periods. After 20-25 mins of structured work.',
      responsible: 'Teacher and Shadow Teacher'
    },
    {
      title: 'Visual Schedule',
      category: 'Transition Support',
      required: true,
      why: 'Reduces uncertainty and cognitive load during transitions.',
      when: 'All environments. Must be referenced before every activity change.',
      responsible: 'All supporting adults'
    }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newAcc, setNewAcc] = useState({ title: '', category: '', why: '', when: '', responsible: '' });

  const handleAdd = () => {
    if (newAcc.title) {
      setAccommodations([...accommodations, { ...newAcc, required: false }]);
      setNewAcc({ title: '', category: '', why: '', when: '', responsible: '' });
      setIsAdding(false);
    }
  };

  return (
    <section id="section-supports" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">14</span>
              <h2 className="text-xl font-bold text-slate-900">Accommodations and Supports</h2>
            </div>
            <p className="text-sm text-slate-500">Access supports independent of goal achievement.</p>
          </div>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
          >
            {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />} 
            {isAdding ? "Cancel" : "Add Support"}
          </button>
        </div>

        <div className="p-4 bg-amber-50/50 border-b border-slate-100 flex items-start gap-3 px-6">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 font-medium">Accommodations are required for access and participation. They are not dependent on the child completing work or achieving goals.</p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {isAdding && (
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30 flex flex-col h-full shadow-sm">
              <div className="space-y-4 flex-1">
                <div>
                  <input 
                    type="text" 
                    placeholder="Support Title..." 
                    className="w-full text-base font-bold text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={newAcc.title}
                    onChange={(e) => setNewAcc({...newAcc, title: e.target.value})}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Category (e.g. Assessment Support)" 
                    className="w-full text-xs font-medium text-slate-700 uppercase tracking-widest bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={newAcc.category}
                    onChange={(e) => setNewAcc({...newAcc, category: e.target.value})}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Why it is needed..." 
                    className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 h-16 resize-none"
                    value={newAcc.why}
                    onChange={(e) => setNewAcc({...newAcc, why: e.target.value})}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Where & When..." 
                    className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 h-16 resize-none"
                    value={newAcc.when}
                    onChange={(e) => setNewAcc({...newAcc, when: e.target.value})}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Responsible Adult..." 
                    className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={newAcc.responsible}
                    onChange={(e) => setNewAcc({...newAcc, responsible: e.target.value})}
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-100 flex justify-end">
                <button 
                  onClick={handleAdd}
                  disabled={!newAcc.title}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save Support
                </button>
              </div>
            </div>
          )}

          {accommodations.map((acc, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm flex flex-col h-full">
               <div className="flex items-start justify-between mb-2">
                 <h3 className="font-bold text-slate-900">{acc.title}</h3>
                 {acc.required && <span className="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded border border-red-100 uppercase tracking-widest">Required</span>}
               </div>
               <p className="text-xs text-slate-500 font-medium mb-4 uppercase tracking-widest">{acc.category || "General Support"}</p>
               
               <div className="space-y-3 flex-1">
                 <div>
                   <span className="text-xs font-bold text-slate-700 block">Why it is needed</span>
                   <span className="text-sm text-slate-600">{acc.why || "-"}</span>
                 </div>
                 <div>
                   <span className="text-xs font-bold text-slate-700 block">Where & When</span>
                   <span className="text-sm text-slate-600">{acc.when || "-"}</span>
                 </div>
                 <div>
                   <span className="text-xs font-bold text-slate-700 block">Responsible</span>
                   <span className="text-sm text-slate-600">{acc.responsible || "-"}</span>
                 </div>
               </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
