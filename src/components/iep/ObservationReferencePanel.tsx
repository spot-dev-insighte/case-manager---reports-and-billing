import { X, FileText, ClipboardList } from 'lucide-react';

export function ObservationReferencePanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center gap-2 text-slate-700">
          <FileText className="w-5 h-5 text-emerald-600" />
          <h2 className="font-semibold text-sm">Source Observation Report</h2>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Child Profile Overview</h3>
          <div className="text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p><strong className="font-medium text-slate-900">Name:</strong> Manan</p>
            <p><strong className="font-medium text-slate-900">Age:</strong> 9 Years Old</p>
            <p><strong className="font-medium text-slate-900">Reason for Referral:</strong> Concerns with comprehension, maintaining personal boundaries, social behavior.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Strengths & Interests</h3>
          <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4 ml-1">
            <li>Strong numeracy skills, calculations</li>
            <li>Loves playing Chopsticks, Rock-Paper-Scissors</li>
            <li>Displays creativity (drawing stages/mics)</li>
            <li>Bilingual cues (Hindi/English) help him learn</li>
          </ul>
        </div>
        
        <div className="border-t border-slate-100 pt-5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Communication & Social</h3>
          <div className="text-sm text-slate-700 space-y-2 leading-relaxed">
            <p>Communicates primarily through speech. Asks repetitive questions to build trust ("What's your surname?"). Uses gestures (pointing, leaning in). Requires gentle guidance for personal space.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Academic & Motor</h3>
          <div className="text-sm text-slate-700 space-y-2 leading-relaxed">
            <p>Fluent reader with limited comprehension. Struggles with word problems. Writes independent sentences but struggles with margins, spacing, and fatigue.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-5 bg-emerald-50/30 -mx-5 px-5 pb-5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3 pt-4">Suggested Priorities</h3>
          <ul className="text-sm text-slate-700 space-y-3">
            <li className="flex gap-3 items-start"><ClipboardList className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Improve comprehension of context-based problems</li>
            <li className="flex gap-3 items-start"><ClipboardList className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Understand and respect personal boundaries</li>
            <li className="flex gap-3 items-start"><ClipboardList className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Improve handwriting formatting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
