import { Menu, AlertCircle } from 'lucide-react';

interface TopHeaderProps {
  onMenuClick: () => void;
  onNavigate?: (nav: string) => void;
}

export function TopHeader({ onMenuClick, onNavigate }: TopHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-end justify-between shrink-0 gap-4">
      <div className="flex items-center space-x-3 md:space-x-4">
        <button onClick={onMenuClick} className="md:hidden p-1.5 -ml-1.5 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100">
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl md:text-2xl font-serif text-slate-900 font-bold tracking-tight">Manan Sarda</h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
              Active
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-500 flex flex-wrap gap-x-2 items-center">
            <span>Grade 4</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span>Shadow Support</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline">Observation Period: 5 May – 23 May 2026</span>
          </p>
        </div>
      </div>
      
      {/* Gap Detection Notification from Clinical Engine */}
      <div className="flex items-center gap-2 md:gap-3">
         <div className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-amber-100 transition-colors shadow-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <div>
               <p className="text-xs font-bold text-amber-900">Clinical Engine Alert</p>
               <p className="text-[10px] text-amber-700 mt-0.5">1 goal lacks recent evidence.</p>
            </div>
         </div>
      </div>
    </header>
  );
}
