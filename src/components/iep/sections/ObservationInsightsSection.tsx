import { FileVideo, Brain, ChevronRight, CheckCircle2 } from "lucide-react";

export function ObservationInsightsSection({ onNavigate }: { onNavigate?: (nav: string) => void }) {
  return (
    <section id="section-clinical-insights" className="scroll-mt-32">
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl shadow-sm overflow-hidden mb-8">
        
        <div className="p-6 border-b border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-bold"><Brain className="w-3.5 h-3.5" /></span>
              <h2 className="text-xl font-bold text-indigo-900">Clinical Insights from Observations</h2>
            </div>
            <p className="text-sm text-indigo-700">AI-generated patterns from recent observation reports and session logs to inform this IEP.</p>
          </div>
          <button onClick={() => onNavigate?.('cases')} className="px-4 py-2 bg-white text-indigo-700 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 flex items-center gap-2">
            Import More Data <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/50">
          
          <div className="bg-white border border-indigo-50 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Promising Intervention Strategy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Based on the observation from "Classroom Setup" (Oct 18), Manan responded exceedingly well when the teacher pre-warned him 2 minutes before transitioning. This suggests that explicit visual or auditory countdowns should be structurally embedded in his goals.
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <FileVideo className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-600">Source: Classroom Observation (18 Oct)</span>
            </div>
          </div>

          <div className="bg-white border border-amber-100 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Brain className="w-4 h-4 text-amber-500" /> Emerging Barrier
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Session logs indicate rising distress (dropping to floor) during unstructured transitions specifically in the cafeteria. Current IEP does not address cafeteria-specific sensory accommodations.
            </p>
            <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
              + Generate Goal for Cafeteria Transition
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
