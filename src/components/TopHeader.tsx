import { Menu, AlertCircle } from 'lucide-react';

interface TopHeaderProps {
  onMenuClick: () => void;
  onNavigate?: (nav: string) => void;
}

export function TopHeader({ onMenuClick, onNavigate }: TopHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between shrink-0 gap-4">
      <div className="flex items-center space-x-3 md:space-x-4">
        <button onClick={onMenuClick} className="md:hidden p-1.5 -ml-1.5 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100">
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-xl font-serif text-slate-900 font-bold tracking-tight">Therapy Center Dashboard</h2>
        </div>
      </div>
    </header>
  );
}
