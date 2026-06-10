import { useRef, useEffect } from "react";

const SECTIONS = [
  { id: "overview", label: "Patient Profile" },
  { id: "clinical-insights", label: "Clinical Insights" },
  { id: "present-levels", label: "Present Levels" },
  { id: "environments", label: "Environments" },
  { id: "goals", label: "Goals" },
  { id: "supports", label: "Accommodations" },
  { id: "implementation", label: "Implementation" }
];

interface IEPSectionNavigationProps {
  activeSection: string;
  onNav: (id: string) => void;
}

export function IEPSectionNavigation({ activeSection, onNav }: IEPSectionNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active chip into view horizontally
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector(`#nav-chip-${activeSection}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeSection]);

  return (
    <div className="bg-white border-b border-slate-200 z-10 shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
      <div 
        ref={scrollRef}
        className="flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap"
      >
        {SECTIONS.map(s => (
          <button
            key={s.id}
            id={`nav-chip-${s.id}`}
            onClick={() => onNav(s.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
              activeSection === s.id 
                ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
