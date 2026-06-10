import { Eye, Save, Send } from "lucide-react";

interface IEPStickyFooterProps {
  onPreview?: () => void;
}

export function IEPStickyFooter({ onPreview }: IEPStickyFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.05)] z-20 shrink-0">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500 font-medium">
          Autosaved 20 seconds ago
        </div>
        <div className="flex w-full sm:w-auto items-center gap-3">
          <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button 
            onClick={onPreview}
            className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-5 py-2.5 bg-emerald-600 rounded-xl text-sm font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm">
            <Send className="w-4 h-4" /> Submit to Therapist
          </button>
          <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm">
            <Send className="w-4 h-4" /> Send to Parent
          </button>
        </div>
      </div>
    </div>
  );
}
