import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

interface PresentLevelsSectionProps {}

export function PresentLevelsSection({}: PresentLevelsSectionProps) {
  const [expanded, setExpanded] = useState<string | null>("communication");
  // Track editable summaries
  const [summaries, setSummaries] = useState<Record<string, string>>({
    communication: "Manan is a verbal communicator who benefits from structural support when encountering ambiguous language.",
    regulation: "Sensory regulation is a priority. Proactive sensory strategies are required to maintain participation."
  });

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const domains = [
    {
      id: "communication",
      title: "Communication",
      strengths: "Communicates needs clearly using verbal requests. Strong vocabulary related to special interests.",
      current: "Uses complex sentences. Struggles with abstract language or idioms.",
      support: "Benefit from concrete examples and visual supports for abstract concepts.",
      effective: "Visual schedules, explicit definitions",
      summary: "Manan is a verbal communicator who benefits from structural support when encountering ambiguous language."
    },
    {
      id: "regulation",
      title: "Regulation and Sensory Processing",
      strengths: "Able to identify when feeling overwhelmed. Seeks out quiet spaces independently.",
      current: "Cumulative sensory load (noise) impacts sustained attention in the afternoon.",
      support: "Needs access to movement breaks and noise-cancelling headphones in noisy environments.",
      effective: "Movement breaks, deep pressure, auditory reduction",
      summary: "Sensory regulation is a priority. Proactive sensory strategies are required to maintain participation."
    }
  ];

  return (
    <section id="section-present-levels" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        
        {/* Section Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">8</span>
              <h2 className="text-xl font-bold text-slate-900">Current Strengths and Support Profile</h2>
            </div>
            <p className="text-sm text-slate-500">Present Levels of Academic Achievement and Functional Performance</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100">
            <CheckCircle2 className="w-4 h-4" /> Completed
          </div>
        </div>

        {/* Section Content */}
        <div className="p-6 space-y-4">
          
          {domains.map((domain) => (
            <div key={domain.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <button 
                onClick={() => toggleExpand(domain.id)}
                className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-bold text-slate-800">{domain.title}</h3>
                </div>
                {expanded === domain.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {expanded === domain.id && (
                <div className="p-5 border-t border-slate-100 space-y-5 bg-white">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Strengths</label>
                      <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                        {domain.strengths}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Current Participation</label>
                      <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                        {domain.current}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Support Needed</label>
                      <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                        {domain.support}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Effective Supports</label>
                      <div className="p-3 bg-emerald-50 rounded-lg text-sm text-emerald-800 border border-emerald-100">
                        {domain.effective}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex gap-4">
                      <div className="flex-1 bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-[10px] font-bold text-indigo-800 uppercase tracking-widest">Case Manager Summary</label>
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-indigo-200 text-indigo-600 font-bold">Editable</span>
                        </div>
                        <textarea 
                          className="w-full bg-transparent border-none p-0 text-sm text-indigo-900 leading-relaxed focus:ring-0 resize-none min-h-[60px]"
                          value={summaries[domain.id]}
                          onChange={(e) => setSummaries({...summaries, [domain.id]: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Evidence Viewer Trigger */}
                  <div className="flex justify-end pt-2">
                     <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
                       View Supporting Evidence
                     </button>
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
