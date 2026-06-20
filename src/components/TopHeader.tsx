import { useState, useRef, useEffect } from 'react';
import { Menu, AlertCircle, ChevronDown, PlayCircle, FolderOpen } from 'lucide-react';

export const CLIENTS = [
  { id: 'manan', name: 'Manan Sarda', grade: 'Grade 4', support: 'Shadow Support' },
  { id: 'aisha', name: 'Aisha Khan', grade: 'Grade 2', support: 'Speech Therapy' },
  { id: 'leo', name: 'Leo Carmichael', grade: 'Grade 6', support: 'Behavioral Support' },
];

interface TopHeaderProps {
  onMenuClick: () => void;
  onNavigate?: (nav: string) => void;
  activeClient?: { id: string; name: string; grade: string; support?: string };
  onClientChange?: (client: { id: string; name: string; grade: string; support?: string }) => void;
}

export function TopHeader({ onMenuClick, onNavigate, activeClient = CLIENTS[0], onClientChange }: TopHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClientSelect = (client: typeof CLIENTS[0]) => {
    if (onClientChange) {
      onClientChange(client);
    }
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-end justify-between shrink-0 gap-4">
      <div className="flex items-center space-x-3 md:space-x-4">
        <button onClick={onMenuClick} className="md:hidden p-1.5 -ml-1.5 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100">
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <div className="flex items-center gap-3 mb-1" ref={dropdownRef}>
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 hover:bg-slate-50 px-2 -ml-2 py-1 rounded-lg transition-colors group"
              >
                <h2 className="text-xl md:text-2xl font-serif text-slate-900 font-bold tracking-tight">
                  {activeClient.name}
                </h2>
                <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <div className="px-3 pb-2 mb-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Client</p>
                  </div>
                  {CLIENTS.map(client => (
                    <button
                      key={client.id}
                      onClick={() => handleClientSelect(client)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 flex items-center justify-between ${activeClient.id === client.id ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-700'}`}
                    >
                      {client.name}
                      {activeClient.id === client.id && <span className="w-2 h-2 rounded-full bg-indigo-600"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider hidden md:inline-block">
              Active
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-500 flex flex-wrap gap-x-2 items-center">
            <span>{activeClient.grade}</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span>{activeClient.support || 'Shadow Support'}</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline">Observation Period: 5 May – 23 May 2026</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
        <button 
          onClick={() => onNavigate && onNavigate('start-session')}
          className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-indigo-100 transition-colors shadow-sm font-bold text-sm"
        >
          <PlayCircle className="w-4 h-4" />
          Today's Session
        </button>
        <button 
          onClick={() => onNavigate && onNavigate('cases')}
          className="bg-white text-slate-700 border border-slate-200 px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors shadow-sm font-bold text-sm"
        >
          <FolderOpen className="w-4 h-4 text-slate-400" />
          Open Case
        </button>
        
        <div className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-amber-100 transition-colors shadow-sm ml-auto">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          <div>
            <p className="text-xs font-bold text-amber-900 hidden md:block">Clinical Engine Alert</p>
            <p className="text-xs font-bold text-amber-900 md:hidden">Alert</p>
            <p className="text-[10px] text-amber-700 mt-0.5 hidden md:block">1 goal lacks recent evidence.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
