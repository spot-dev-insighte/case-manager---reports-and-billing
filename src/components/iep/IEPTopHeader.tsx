import { ChevronLeft, MoreVertical, Sparkles } from "lucide-react";

interface IEPTopHeaderProps {
  onBack: () => void;
  childName: string;
  period: string;
  showInsights?: boolean;
  onToggleInsights?: () => void;
}

export function IEPTopHeader({ onBack, childName, period, showInsights, onToggleInsights }: IEPTopHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-4 py-3 md:px-6 shadow-sm flex items-center justify-between z-20 shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Back to Dashboard"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-slate-900 text-lg leading-tight">{childName}</h1>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
              Draft
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">IEP Period: {period}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {onToggleInsights && (
          <button 
            onClick={onToggleInsights}
            className="hidden sm:flex px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg text-xs font-bold shadow-sm hover:bg-indigo-100 items-center gap-2 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" /> 
            {showInsights ? 'Hide Clinical Insights' : 'Generate Clinical Insights'}
          </button>
        )}
        <span className="hidden sm:inline-block text-xs text-slate-400 font-medium ml-2">Auto-saved just now</span>
        <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
