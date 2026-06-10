import { 
  Users, 
  Calendar, 
  ClipboardList, 
  FileText, 
  AlertTriangle, 
  FolderOpen,
  X
} from 'lucide-react';

interface SidebarProps {
  activeNav: string;
  onNavigate: (nav: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeNav, onNavigate, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'cases', label: 'Case Files', icon: Users },
    { id: 'overview', label: 'Client Overview', icon: FileText },
    { 
      id: 'reports', 
      label: 'Reports', 
      icon: FileText,
      subItems: [
        { id: 'sessions', label: 'Session Logs' },
        { id: 'observation-report', label: 'Observation Report' },
        { id: 'clinical-plan', label: 'IEP Report' },
        { id: 'monthly-report', label: 'Monthly Report' },
        { id: 'progress-review', label: 'Progress Report' },
        { id: 'report-history', label: 'Report History' },
      ]
    },
    { id: 'incidents', label: 'Incidents & Support', icon: AlertTriangle },
    { id: 'documents', label: 'Documents', icon: FolderOpen },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-[#FDFCFB] border-r border-slate-200 flex flex-col h-full overflow-y-auto shrink-0 transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
    `}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold">
              C
            </div>
            <h1 className="text-lg font-serif font-semibold tracking-tight text-emerald-900">ClinicianFlow</h1>
          </div>
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-2">
            <button
              onClick={() => onNavigate(item.subItems ? item.subItems[0].id : item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                activeNav === item.id || item.subItems?.some(sub => sub.id === activeNav)
                  ? 'bg-emerald-50 text-emerald-800 font-semibold border-l-4 border-emerald-600'
                  : 'text-slate-500 font-medium hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0 opacity-70" />
              {item.label}
            </button>
            
            {item.subItems && (activeNav === item.id || item.subItems.some(sub => sub.id === activeNav)) && (
              <div className="mt-1 ml-9 space-y-1 py-1">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => onNavigate(subItem.id)}
                    className={`w-full flex text-left px-3 py-1 text-xs transition-colors ${
                      activeNav === subItem.id
                        ? 'font-medium text-emerald-700'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="mt-auto p-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">D</div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">Dhvani R.</p>
            <p className="text-[10px] text-slate-400">Lead Therapist</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
