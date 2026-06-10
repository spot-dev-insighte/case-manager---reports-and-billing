import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";

export function SupportNeedsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  const needsCategories = [
    {
      title: "1. Communication",
      subcategories: [
        {
          name: "Expression",
          options: ["Spoke independently", "Used gestures/signs", "Used AAC/visuals", "Needed prompting", "Difficult to express needs"]
        },
        {
          name: "Understanding",
          options: ["Followed verbal instructions", "Needed visual support", "Needed demonstrations", "Needed repeated prompts"]
        },
        {
          name: "Self-Advocacy",
          options: ["Asked for help", "Asked for break", "Expressed preferences", "Communicated discomfort", "Needed support to communicate needs"]
        }
      ],
      aiInfer: "AAC robustness, GLP indicators, Communication partner differences, Interoception signals"
    },
    {
      title: "2. Learning Engagement",
      subcategories: [
        {
          name: "Task Start",
          options: ["Started independently", "Needed reminder", "Needed visual schedule", "Needed adult support"]
        },
        {
          name: "Participation",
          options: ["Highly engaged", "Moderate engagement", "Brief engagement", "Avoided activity"]
        },
        {
          name: "Support Needed",
          options: ["Body doubling", "Step-by-step guidance", "Frequent check-ins", "Minimal support"]
        }
      ],
      aiInfer: "Monotropism, PDA patterns, Executive functioning needs, Curiosity patterns"
    },
    {
      title: "3. Regulation",
      subcategories: [
        {
          name: "Regulation State",
          options: ["Calm and regulated", "Needed occasional support", "Frequently dysregulated", "Significant support required"]
        },
        {
          name: "Sensory Needs Observed",
          options: ["Movement seeking", "Deep pressure/heavy work", "Quiet space", "Sensory breaks", "No notable needs"]
        },
        {
          name: "Self-Regulation Skills",
          options: ["Used strategies", "Accepted co-regulation", "Needed frequent support"]
        }
      ],
      aiInfer: "Sensory load, Stimming patterns, Recovery windows, Vestibular/proprioceptive needs"
    },
    {
      title: "4. Social Participation",
      subcategories: [
        {
          name: "Interaction Style",
          options: ["Played/worked with peers", "Parallel participation", "Preferred adults", "Preferred independent activity"]
        },
        {
          name: "Group Participation",
          options: ["1:1 comfortable", "Small group comfortable", "Large group comfortable", "Needed support in groups"]
        }
      ],
      aiInfer: "Peer interaction style, Collaboration threshold, Double empathy indicators, Masking patterns"
    }
  ];

  return (
    <section id="support-needs" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Support Needs Profile</h2>
      </div>

      <div className="space-y-4">
        {needsCategories.map((category, idx) => {
          const isActive = activeCategory === idx;
          return (
            <div key={idx} className={`bg-slate-50 border ${isActive ? 'border-blue-200 ring-1 ring-blue-500/20' : 'border-slate-200'} rounded-2xl overflow-hidden transition-all duration-300`}>
              <button 
                onClick={() => setActiveCategory(isActive ? null : idx)}
                className="w-full bg-white border-b border-slate-200 p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className={`font-bold ${isActive ? 'text-blue-700' : 'text-slate-800'}`}>{category.title}</h3>
                {isActive ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              {isActive && (
                <div className="p-4 md:p-6 space-y-6 animate-in slide-in-from-top-2 fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {category.subcategories.map((sub, sidx) => (
                      <div key={sidx} className="space-y-3">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{sub.name}</label>
                        <div className="space-y-2">
                          {sub.options.map((opt, oidx) => (
                            <label key={oidx} className="flex items-start gap-3 cursor-pointer group">
                              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                              <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-4">
                     <div className="flex flex-col gap-2">
                       <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
                         <Sparkles className="w-3.5 h-3.5" /> AI Inferred Notes Matrix
                       </p>
                       <p className="text-xs text-slate-600 font-medium bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                          {category.aiInfer}
                       </p>
                     </div>
                     
                     <div>
                       <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block mb-2">Therapist Notes / Additional Observations</label>
                       <textarea 
                         placeholder={`Any additional context or observation regarding ${category.title.split('. ')[1]}...`}
                         className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm resize-none h-20 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
                       />
                     </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="pt-6 mt-6 border-t border-slate-200 text-center">
         <button className="text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-colors">
            Preview Expanded Profile
         </button>
      </div>
    </section>
  );
}
