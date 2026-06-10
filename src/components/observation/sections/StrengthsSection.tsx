import { Sparkles, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function StrengthsSection() {
  const [activeStrengths, setActiveStrengths] = useState([
    "Enjoys visual learning",
    "Strong memory for routines"
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const commonStrengths = [
    "Deep focus on interests",
    "Excellent pattern recognition",
    "Empathetic",
    "Strong mechanical skills",
    "Musical affinity",
    "Kinesthetic learner",
    "Attention to detail",
    "Creative problem solving"
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleStrength = (strength: string) => {
    if (activeStrengths.includes(strength)) {
      setActiveStrengths(activeStrengths.filter(s => s !== strength));
    } else {
      setActiveStrengths([...activeStrengths, strength]);
    }
  };

  return (
    <section id="strengths" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
          <Sparkles className="w-5 h-5" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Strengths & Interests</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
          <p className="text-xs font-bold text-purple-800 flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AI Insights from Logs
          </p>
          <ul className="space-y-2 text-sm text-purple-900/80 font-medium list-disc list-inside">
            <li>Frequently engages with building blocks for extended periods.</li>
            <li>Shows strong visual memory during literacy tasks.</li>
          </ul>
        </div>

        <div>
           <div className="flex flex-wrap gap-2 mb-4">
             {activeStrengths.map(strength => (
                <span key={strength} className="flex items-center gap-2 pl-3 pr-1 py-1 bg-purple-50 text-purple-900 rounded-lg text-xs font-bold border border-purple-200">
                   {strength}
                   <button 
                     onClick={() => toggleStrength(strength)}
                     className="p-1 hover:bg-purple-200 rounded-md transition-colors"
                   >
                     <X className="w-3 h-3" />
                   </button>
                </span>
             ))}
           </div>
           
           <div className="relative" ref={dropdownRef}>
              <div className="flex gap-2">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Select from common strengths...
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Custom strength..."
                    className="w-48 bg-slate-50 border border-slate-200 rounded-xl px-3 text-sm focus:ring-2 focus:ring-purple-500/20"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value) {
                        toggleStrength(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                </div>
              </div>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg p-3 z-20 flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                  {commonStrengths.map(s => {
                    const isSelected = activeStrengths.includes(s);
                    return (
                      <button 
                        key={s} 
                        onClick={() => toggleStrength(s)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                          isSelected 
                            ? 'bg-purple-100 text-purple-800 border-purple-200' 
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '} {s}
                      </button>
                    )
                  })}
                </div>
              )}
           </div>
        </div>
         
        <div className="pt-4 border-t border-slate-100">
          <label className="text-sm font-bold text-slate-800 block mb-3">Strength Narrative</label>
          <textarea 
             placeholder="Provide a holistic narrative of the child's strengths and how they can be leveraged..."
             className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium resize-none h-32 leading-relaxed text-slate-700" 
          />
        </div>
      </div>
    </section>
  );
}
