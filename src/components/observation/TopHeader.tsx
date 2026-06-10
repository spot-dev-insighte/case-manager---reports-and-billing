import { Eye as EyeIcon, Save as SaveIcon } from "lucide-react";
import { useState } from "react";

export function TopHeader({ onNavigate }: { onNavigate?: (nav: string) => void }) {
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const handleSave = () => {
    // Current time
    const timeInfo = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setLastSaved(`Today at ${timeInfo}`);
  };

  return (
    <div className="bg-white border-b border-slate-200 px-4 py-4 md:px-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 z-20 shrink-0">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-xl font-serif font-bold text-slate-900">Manan's Observation Report</h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
            Draft
          </span>
          {lastSaved && (
            <span className="text-xs text-slate-400 font-medium ml-2">
              Last saved: {lastSaved}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Age: 5 • Assigned Therapist: You • CM: Sarah Jenkins • Period: 5 May - 23 May
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <button 
          onClick={handleSave}
          className="flex-1 md:flex-none justify-center px-3 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
        >
          <SaveIcon className="w-3.5 h-3.5" /> Save Draft
        </button>
        <button 
          className="flex-1 md:flex-none justify-center px-3 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
        >
          <EyeIcon className="w-3.5 h-3.5" /> Preview
        </button>
      </div>
    </div>
  );
}
