import { useState, useEffect, useRef } from "react";
import { IEPTopHeader } from "./IEPTopHeader";
import { IEPSectionNavigation } from "./IEPSectionNavigation";
import { IEPStickyFooter } from "./IEPStickyFooter";
import { ClinicalBrainPanel } from "./ClinicalBrainPanel";
import { Brain, FileText, ArrowLeft, Download, Printer } from "lucide-react";

// Sections
import { StudentProfileSection } from "./sections/StudentProfileSection";
import { ObservationInsightsSection } from "./sections/ObservationInsightsSection";
import { PresentLevelsSection } from "./sections/PresentLevelsSection";
import { LearningEnvironmentsSection } from "./sections/LearningEnvironmentsSection";
import { GoalsSection } from "./goals/GoalsSection";
import { ImplementationPlanSection } from "./sections/ImplementationPlanSection";

interface IEPWorkspaceProps {
  id: string | null;
  onBack: () => void;
  onNavigate?: (nav: string) => void;
}

export function IEPWorkspace({ id, onBack, onNavigate }: IEPWorkspaceProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const [showMobileBrain, setShowMobileBrain] = useState(false);
  const [showDesktopInsights, setShowDesktopInsights] = useState(false);
  const [view, setView] = useState<'edit' | 'preview'>('edit');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: element.offsetTop - 140, // offset for header + nav
        behavior: "smooth"
      });
    }
  };

  if (view === 'preview') {
    return (
      <div className="flex flex-col h-full bg-[#fafafa] w-full overflow-hidden">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0 box-border">
          <button 
            onClick={() => setView('edit')}
            className="flex items-center gap-2 text-slate-600 font-bold hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Edit
          </button>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 text-slate-600 font-bold hover:bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
               <Printer className="w-4 h-4" /> Print
             </button>
             <button className="flex items-center gap-2 bg-slate-900 text-white font-bold hover:bg-slate-800 px-4 py-2 rounded-lg shadow-sm">
               <Download className="w-4 h-4" /> Download PDF
             </button>
             <button className="flex items-center gap-2 bg-indigo-600 text-white font-bold hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-sm">
               Submit IEP
             </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
           <div className="max-w-[800px] mx-auto bg-white shadow-lg border border-slate-100 min-h-[1000px] p-12 space-y-12 mb-12">
              <div className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-8">
                <div className="flex-1 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-4">
                    <Brain className="w-3.5 h-3.5" /> AI-Enhanced Document
                  </div>
                  <h1 className="text-3xl font-serif font-bold text-slate-900">Individualized Education Plan</h1>
                  <p className="text-lg text-slate-700 font-medium">Manan Sarda</p>
                  <p className="text-sm text-slate-500 font-medium">Period: 25 Oct 2025 – 25 Apr 2026</p>
                  <p className="text-sm text-slate-500 font-medium">DOB: 12 May 2018 (Age 7)</p>
                </div>
                
                <div className="w-full md:w-64 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case Manager</p>
                    <p className="font-bold text-slate-800">Sarah Jenkins, BCBA</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Therapy Team</p>
                    <p className="text-slate-700">Jane Doe (SLP), Mark Smith (OT)</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Parents / Guardians</p>
                    <p className="text-slate-700">Shikha Sarda</p>
                  </div>
                </div>
              </div>

              {/* AI Clinical Insight in Preview */}
              <div className="bg-indigo-50/50 border border-indigo-100 p-5 rounded-xl flex gap-3">
                 <Brain className="w-5 h-5 text-indigo-600 mt-0.5" />
                 <div>
                   <h4 className="font-bold text-indigo-900 mb-1">Clinical Alignment Check</h4>
                   <p className="text-sm text-indigo-800">The goals and accommodations in this draft strongly align with the most recent observation reports. Specifically, the addition of movement breaks in the Therapy Room directly addresses the sensory seeking behaviors noted on Oct 18.</p>
                 </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2 flex justify-between items-center">
                  <span>1. Current Strengths and Support Profile</span>
                </h2>
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-800" contentEditable suppressContentEditableWarning>Communication</h3>
                  <textarea 
                    className="w-full text-sm text-slate-700 p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-h-[80px]"
                    defaultValue="Manan is a verbal communicator who benefits from structural support when encountering ambiguous language."
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">2. Learning Environments & Accommodations</h2>
                <div className="space-y-4 p-4 border-l-4 border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-800" contentEditable suppressContentEditableWarning>Therapy Room</h3>
                  <textarea 
                    className="w-full text-sm text-slate-700 italic border border-slate-200 p-3 bg-white rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-h-[60px]"
                    defaultValue={'Support Needed: Dimmed lighting preferred. Access to a quiet corner with beanbags.'}
                  />
                  <div className="mt-2 pl-4 border-l-2 border-indigo-200">
                    <p className="font-bold text-sm text-slate-800">Movement Breaks</p>
                    <textarea 
                      className="w-full text-sm text-slate-700 bg-transparent border-none focus:ring-0 p-0 resize-none min-h-[40px]"
                      defaultValue="Supports regulation and sustained participation. (Responsible: Teacher and Shadow Teacher)"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">3. Goals</h2>
                <div className="space-y-4 p-4 border-l-4 border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-800" contentEditable suppressContentEditableWarning>Requesting help during unstructured transitions</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">Goal Statement:</p>
                  <textarea 
                    className="w-full text-sm text-slate-700 italic border border-slate-200 p-3 bg-white rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-h-[100px]"
                    defaultValue={'Given a visual transition countdown and access to his AAC device, Manan will request "help" or "more time" during unstructured transitions instead of dropping to the floor, in 4 out of 5 observed opportunities over a two-week period.'}
                  />
                  <p className="text-sm text-slate-700 leading-relaxed font-medium mt-4">Intervention Strategy & Outcomes:</p>
                  <textarea 
                    className="w-full text-sm text-slate-700 border border-slate-200 p-3 bg-white rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-h-[80px]"
                    defaultValue={"Utilize proactive visual countdowns (2-minute warning). Expected outcome is increased self-regulation and communicative initiation prior to distress escalation."}
                  />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50/50 p-3 border border-blue-100 rounded-lg">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-blue-800 mb-1">For Therapists</p>
                      <textarea className="w-full text-xs text-blue-900 bg-transparent border-none focus:ring-0 p-0 resize-none min-h-[60px]" defaultValue="Ensure AAC device is charged and within 2 feet before initiating transition warning. Log precursor behaviors." />
                    </div>
                    <div className="bg-amber-50/50 p-3 border border-amber-100 rounded-lg">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-amber-800 mb-1">For Parents</p>
                      <textarea className="w-full text-xs text-amber-900 bg-transparent border-none focus:ring-0 p-0 resize-none min-h-[60px]" defaultValue={'Please practice the "time to go" visual card at home during playtime transitions to reinforce consistency.'} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">4. Service Plan & Implementation</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">General Inputs for Parents</label>
                    <textarea 
                      className="w-full text-sm text-slate-700 p-3 border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:outline-none h-24"
                      defaultValue="Maintain visual schedules at home. Ensure movement breaks after 30 mins focused tasks."
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Instructions to Therapists</label>
                    <textarea 
                      className="w-full text-sm text-slate-700 p-3 border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:outline-none h-24"
                      defaultValue="Ensure sensory tools (headphones, chewies) are accessible at all times during transitions."
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">5. Additional Notes / Manual Points</h2>
                <div className="space-y-4 relative">
                  <textarea 
                    className="w-full text-sm text-slate-700 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-h-[150px] bg-slate-50"
                    placeholder="Add manual points, specific therapist inputs, or other notes..."
                  />
                </div>
              </div>

              <div className="mt-12 text-center text-slate-400 text-xs italic">
                -- End of Document Preview --
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#fafafa] relative w-full overflow-hidden">
      {/* Top Header */}
      <IEPTopHeader 
        onBack={onBack} 
        childName={id === 'manan' || id === 'manan-iep' ? "Manan Sarda" : "Unknown Child"} 
        period="25 Oct 2025 – 25 Apr 2026" 
        showInsights={showDesktopInsights}
        onToggleInsights={() => setShowDesktopInsights(!showDesktopInsights)}
      />
      
      {/* Section Nav */}
      <IEPSectionNavigation activeSection={activeSection} onNav={handleScrollTo} />

      <div className="flex flex-1 overflow-hidden relative max-w-[1600px] mx-auto w-full">
        {/* Desktop Clinical Brain Panel moved to the left */}
        {showDesktopInsights && (
          <div className="hidden xl:block w-[400px] border-r border-slate-200 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] shrink-0 overflow-y-auto z-10">
            <ClinicalBrainPanel />
          </div>
        )}

        {/* Main Content Area */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pb-24 scroll-smooth">
          <div className="max-w-[900px] mx-auto p-4 md:p-8 space-y-8">
            
            {/* We will only render the requested sections for this implementation step to keep it focused */}
            <div id="section-overview" className="h-10" /> {/* Spacer for scroll targeting if starting top */}
            
            <StudentProfileSection />
            <ObservationInsightsSection onNavigate={onNavigate} />
            <PresentLevelsSection />
            <LearningEnvironmentsSection />
            <GoalsSection />
            <ImplementationPlanSection />

            {/* A bottom spacer so the last section can be scrolled above the footer */}
            <div className="h-40"></div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <IEPStickyFooter onPreview={() => setView('preview')} />

      {/* Mobile Floating Brain Button */}
      <button 
        onClick={() => setShowMobileBrain(true)}
        className="xl:hidden fixed bottom-24 right-4 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-40"
      >
        <Brain className="w-6 h-6" />
      </button>

      {/* Mobile Brain Bottom Sheet */}
      {showMobileBrain && (
        <div className="xl:hidden fixed inset-0 z-50 flex flex-col justify-end">
           <div className="absolute inset-0 bg-slate-900/50" onClick={() => setShowMobileBrain(false)} />
           <div className="relative bg-white w-full h-[85vh] rounded-t-3xl shadow-2xl flex flex-col overflow-hidden">
             <ClinicalBrainPanel onClose={() => setShowMobileBrain(false)} />
           </div>
        </div>
      )}
    </div>
  );
}
