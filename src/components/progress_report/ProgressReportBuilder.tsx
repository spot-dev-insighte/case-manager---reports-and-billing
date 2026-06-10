import { useState } from "react";
import {
  ArrowLeft,
  Send,
  Eye,
  FileText,
  Calendar,
  Target,
  CheckCircle2,
  MessageSquare,
  Plus,
  User,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  MoreVertical,
  Activity,
  Briefcase,
  Sparkles,
  Download
} from "lucide-react";

export function ProgressReportBuilder({ onExit, onNavigate, clientName = "Manan Sarda", reportType = "Six-Month Progress Review" }: { onExit: () => void, onNavigate?: (nav: string) => void, clientName?: string, reportType?: string }) {
  const [isGenerated, setIsGenerated] = useState(false);
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'client'>('edit');
  const [activeTab, setActiveTab] = useState('Source');
  const [showAnnexeLogs, setShowAnnexeLogs] = useState(false);

  const scrollToEl = (id: string, tab: string) => {
    setActiveTab(tab);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (viewMode === 'preview' || viewMode === 'client') {
    return (
      <div className="flex flex-col h-full bg-[#fcfcfc] relative">
        <div className="sticky top-0 z-20 bg-emerald-700 border-b border-emerald-800 px-4 py-4 md:px-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <button onClick={() => setViewMode('edit')} className="p-2 hover:bg-emerald-600 rounded-lg text-emerald-50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">{clientName} {viewMode === 'client' ? '(Parent View)' : '(Preview)'}</h1>
              <p className="text-xs text-emerald-100 font-medium">{reportType} - Jan to Jun 2026</p>
            </div>
          </div>
          <div className="flex gap-2">
            {viewMode === 'preview' && (
              <button onClick={() => setViewMode('client')} className="px-4 py-2 text-sm font-bold text-emerald-700 bg-white hover:bg-emerald-50 rounded-xl transition-colors shadow-sm">
                Simulate Client View
              </button>
            )}
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 pb-32">
          <div className="max-w-[800px] mx-auto space-y-8">
            
            {/* Page 1: Cover & Snapshot */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <div className="text-4xl font-serif font-black tracking-tighter">Insighte</div>
              </div>
              <div className="mb-12">
                 <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">Insighte Progress Report</p>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{reportType}</h2>
                 <p className="text-xl text-slate-600">{clientName}</p>
                 <p className="text-slate-500">Jan 1, 2026 - Jun 30, 2026</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                 <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Therapist</p>
                   <p className="font-bold text-slate-800">Sarah Jenkins</p>
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Case Manager</p>
                   <p className="font-bold text-slate-800">David Ross</p>
                 </div>
                  <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Sessions</p>
                   <p className="font-bold text-slate-800">42 Completed</p>
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Status</p>
                   <p className="font-bold text-slate-800">Ready for Review</p>
                 </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                 <h3 className="font-bold text-emerald-900 mb-2">Our Approach</h3>
                 <p className="text-sm text-emerald-800 leading-relaxed">
                    Insighte follows a neuro-affirmative, strengths-based approach. We understand development in the context of the child’s communication, environment, relationships, sensory preferences and support needs. Progress is not defined only by independence or compliance, but by meaningful participation, agency, self-advocacy, wellbeing and access.
                 </p>
              </div>
            </div>

            {/* Page 2: Profile & Strengths */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Strengths & Support Profile</h3>
               
               <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                       <Sparkles className="w-5 h-5 text-amber-500" /> Core Strengths & Interests
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Manan has an incredible eye for mechanical detail and enjoys building complex structures. He shows strong visual memory and approaches problem-solving methodically. He is most comfortable in predictable, quiet environments and forms strong attachments to familiar supportive adults.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                       <User className="w-5 h-5 text-blue-500" /> Communication & Advocacy
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Manan communicates his needs most clearly when given 10-15 seconds of processing time without repeated prompts. He has begun successfully using a "break" card when overwhelmed, instead of masking his discomfort.
                    </p>
                  </div>
               </div>
            </div>

            {/* Page 3: Child Growth Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm text-center">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Child Growth Map</h3>
               <p className="text-sm text-slate-600 mb-12">Visual progress mapped across key domains.</p>
               
               <div className="relative max-w-[600px] mx-auto py-12">
                  {/* Central Node */}
                  <div className="relative z-10 w-24 h-24 bg-white border-4 border-emerald-500 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xl font-bold text-lg mb-8">
                    {clientName}
                  </div>

                  {/* Lines (conceptual pseudo-elements can be tricky, let's use flex grid for the nodes) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 text-left">
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold text-[10px] uppercase tracking-wider">Communication</div>
                        <p className="text-sm mt-3 font-medium text-slate-700">Can request "help" or a "break" with 1-2 word phrases. Showing progress with visual supports.</p>
                        <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Support: Moderate to Occasional</p>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold text-[10px] uppercase tracking-wider">Transitions</div>
                        <p className="text-sm mt-3 font-medium text-slate-700">Predictable transitions are going well. Needs support for unexpected class changes.</p>
                        <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Support: Substantial</p>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative md:col-span-2 max-w-[400px] mx-auto">
                        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px] uppercase tracking-wider">Participation</div>
                        <p className="text-sm mt-3 font-medium text-slate-700">Actively involved in peer building-block activities for 15+ minutes. Frequently shares materials voluntarily.</p>
                        <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Support: Increasing Independence</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Goal Progress */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Goal Progress Overview</h3>
               
               <div className="space-y-8">
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                     <div className="bg-slate-50 p-6 border-b border-slate-200">
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Comprehension Access</h4>
                        <p className="text-sm text-slate-600">Will follow 2-step visual instructions in classroom across 4/5 opportunities.</p>
                     </div>
                     <div className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="flex-1 text-center">
                             <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Jan Baseline</p>
                             <p className="text-sm font-bold text-slate-700 bg-slate-100 py-1 rounded">Introduced</p>
                           </div>
                           <div className="text-slate-300">→</div>
                           <div className="flex-1 text-center">
                             <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">Jun Status</p>
                             <p className="text-sm font-bold text-indigo-700 bg-indigo-50 py-1 border border-indigo-100 rounded">Increasingly Independent</p>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div>
                             <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Progress Narrative</h5>
                             <p className="text-sm text-slate-700 mt-1">Starting point required substantial adult support. Manan now uses visual schedules with only occasional prompting. Progress was observed strongly in 1:1 settings and is generalizing to the art classroom.</p>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-widest">What Helped</h5>
                                <p className="text-sm text-emerald-900 mt-1">Visual schedules placed at eye level.</p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h5 className="text-xs font-bold text-blue-800 uppercase tracking-widest">Next Step</h5>
                                <p className="text-sm text-blue-900 mt-1">Fade specific verbal prompts.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Timeline Milestones */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Growth Timeline</h3>
               <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 py-4">
                  <div className="relative pl-8">
                     <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-white"></div>
                     <p className="text-sm font-bold text-blue-600 mb-1">January</p>
                     <p className="text-sm text-slate-700">Needed regular adult prompting to use the visual schedule.</p>
                  </div>
                  <div className="relative pl-8">
                     <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-white"></div>
                     <p className="text-sm font-bold text-blue-600 mb-1">March</p>
                     <p className="text-sm text-slate-700">Used two steps during familiar routines with moderate support.</p>
                  </div>
                  <div className="relative pl-8">
                     <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white"></div>
                     <p className="text-sm font-bold text-emerald-600 mb-1">May</p>
                     <p className="text-sm text-slate-700">Generalised use to art classroom routines with occasional prompting.</p>
                  </div>
               </div>
            </div>

            {/* Action Plan */}
             <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Action Plan & Recommendations</h3>
               
               <div className="mb-8 p-5 bg-slate-50/80 rounded-2xl border border-slate-200">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Therapist Progress Notes</h4>
                 <p className="text-sm text-slate-700 leading-relaxed font-medium">Client has shown consistent engagement. Will focus on generalizing these skills across environments.</p>
               </div>

               <h4 className="text-sm font-bold text-slate-900 mb-4">Action Items</h4>
               <div className="space-y-4">
                 <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-slate-800">Establish new Transition Goal</h4>
                      <p className="text-sm text-slate-600 mb-2">Focus on unexpected routine changes using front-loading strategies.</p>
                      <p className="text-xs font-bold text-slate-400">Responsibility: Therapist & Case Manager</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-slate-800">School Consultation</h4>
                      <p className="text-sm text-slate-600 mb-2">Meet with SEN coordinator to align on "break card" protocol.</p>
                      <p className="text-xs font-bold text-slate-400">Responsibility: Case Manager</p>
                    </div>
                 </div>
               </div>
             </div>

            {/* Parent Feedback Form - Only shown to Parent */}
            {viewMode === 'client' && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 md:p-12 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-serif font-bold text-indigo-900 mb-2">Parent Feedback & Input</h3>
                <p className="text-sm text-indigo-700 mb-6">Does this report reflect the progress you have observed? What changes have you seen at home?</p>
                
                <div className="space-y-6">
                   <div>
                     <label className="text-sm font-bold text-slate-800 block mb-2">What progress or changes have you noticed at home recently?</label>
                     <textarea className="w-full border border-indigo-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500/20 bg-white resize-none min-h-[100px]" placeholder="Your observations..." />
                   </div>
                   <div>
                     <label className="text-sm font-bold text-slate-800 block mb-2">What would you like prioritised next?</label>
                     <textarea className="w-full border border-indigo-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500/20 bg-white resize-none min-h-[80px]" placeholder="Your priorities..." />
                   </div>
                   <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">Submit Parent Feedback</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }

  // BUILDER VIEW (viewMode === 'edit')
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] relative overflow-hidden">
      
      {/* 7. Progress Report Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-sm md:text-base font-bold text-slate-900 truncate">{reportType}</h1>
            <p className="text-[11px] md:text-xs text-slate-500 font-medium truncate">{clientName} • Jan 1 - Jun 30 • Draft saved</p>
          </div>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            className="px-4 py-1.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
          >
            Save Draft
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors shadow-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 rounded-lg transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
            Submit
          </button>
        </div>
      </div>

      {/* 6. Compact Top Progress Strip */}
      <div className="sticky top-[60px] md:top-[64px] z-20 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200 overflow-x-auto hide-scrollbar">
        <div className="max-w-[1050px] mx-auto px-4 md:px-8 py-2.5 flex items-center gap-6 text-[13px] font-bold text-slate-500 whitespace-nowrap">
           <button onClick={() => scrollToEl('source', 'Source')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Source' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Source</button>
           <button onClick={() => scrollToEl('profile', 'Profile')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Profile' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Profile & Strengths</button>
           <button onClick={() => scrollToEl('progress', 'Progress')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Progress' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Goal Progress</button>
           <button onClick={() => scrollToEl('strategies', 'Strategies')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Strategies' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Strategies</button>
           {reportType.includes('Transition') && <button onClick={() => scrollToEl('transition', 'Transition')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Transition' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Transition</button>}
           <button onClick={() => scrollToEl('action', 'Action Plan')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Action Plan' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Action Plan</button>
           <button onClick={() => setViewMode('preview')} className={`pb-1 border-b-2 transition-colors border-transparent hover:text-slate-800`}>Preview Docs</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 pb-32">
        <div className="max-w-[1050px] mx-auto space-y-6">
          
          {/* 8. Source Data Review */}
          <section id="source" className="scroll-mt-32 space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar className="w-4 h-4"/></div>
                     <h3 className="font-bold text-slate-800 text-sm">Review Period</h3>
                   </div>
                   <ul className="text-xs text-slate-600 space-y-1 mb-3">
                     <li>6 Months</li>
                     <li>42 Completed Sessions</li>
                     <li>6 Monthly Reports</li>
                   </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Target className="w-4 h-4"/></div>
                     <h3 className="font-bold text-slate-800 text-sm">IEP Goals</h3>
                   </div>
                   <ul className="text-xs text-slate-600 space-y-1 mb-3">
                     <li>4 Active Goals</li>
                     <li>1 Achieved</li>
                     <li>1 Paused</li>
                   </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Activity className="w-4 h-4"/></div>
                     <h3 className="font-bold text-slate-800 text-sm">Evidence</h3>
                   </div>
                   <ul className="text-xs text-slate-600 space-y-1 mb-3">
                     <li>63 Entries mapped</li>
                     <li>12 Strategy notes</li>
                   </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><User className="w-4 h-4"/></div>
                     <h3 className="font-bold text-slate-800 text-sm">Inputs</h3>
                   </div>
                   <ul className="text-xs text-slate-600 space-y-1 mb-3">
                     <li>1 Parent Input</li>
                     <li>0 School Inputs</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* 9. Generate Report */}
          {!isGenerated && (
            <section className="bg-slate-900 rounded-2xl p-8 shadow-sm text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="absolute right-0 top-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
               <div className="relative z-10 space-y-2">
                 <h2 className="text-2xl font-serif font-bold">Generate Progress Report</h2>
                 <p className="text-slate-300 text-sm max-w-[600px]">
                   Combine 6 months of IEP data, monthly reports, session logs, and strategy evidence into a comprehensive formal review.
                 </p>
               </div>
               <button 
                 onClick={() => setIsGenerated(true)}
                 className="relative z-10 whitespace-nowrap px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg flex items-center gap-2"
               >
                 <Sparkles className="w-5 h-5 text-indigo-600" /> Draft Report
               </button>
            </section>
          )}

          {isGenerated && (
             <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               
               {/* Strengths & Profile */}
               <section id="profile" className="scroll-mt-32 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">1. Child Profile & Strengths</h2>
                  
                  <div className="space-y-6">
                     <div>
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Strengths, Interests, and Preferences</label>
                       <textarea 
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                         defaultValue="Manan has an incredible eye for mechanical detail and enjoys building complex structures. He shows strong visual memory and approaches problem-solving methodically. He is most comfortable in predictable, quiet environments and forms strong attachments to familiar supportive adults."
                       />
                     </div>
                     <div>
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Child Voice & Self-Advocacy</label>
                       <textarea 
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                         defaultValue="Manan communicates his needs most clearly when given 10-15 seconds of processing time without repeated prompts. He has begun successfully using a 'break' card when overwhelmed, instead of masking his discomfort."
                       />
                     </div>
                  </div>
               </section>

               {/* Goal Progress */}
               <section id="progress" className="scroll-mt-32 space-y-4">
                  <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl font-bold text-slate-900">2. Goal Progress Review</h2>
                    <span className="text-sm font-bold text-slate-500">4 Active Goals</span>
                  </div>

                  {/* Goal Card 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-900">Comprehension Access</h3>
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold text-[10px] uppercase tracking-wider">Continuing</span>
                       </div>
                       <p className="text-sm text-slate-600">Will follow 2-step visual instructions in classroom setting across 4/5 opportunities.</p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Start of Period (Jan)</label>
                          <select className="w-full mt-2 bg-white border border-slate-200 rounded-lg p-2 text-sm font-bold text-slate-700">
                            <option>Introduced</option>
                            <option>Observation stage</option>
                          </select>
                        </div>
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                          <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Current Status (Jun)</label>
                          <select className="w-full mt-2 bg-white border border-slate-200 rounded-lg p-2 text-sm font-bold text-indigo-700">
                            <option>Increasingly Independent</option>
                            <option>Developing</option>
                          </select>
                        </div>
                     </div>

                     <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Progress Narrative</label>
                       <textarea 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          defaultValue="Starting point required substantial adult support. Manan now uses visual schedules with only occasional prompting. Progress was observed strongly in 1:1 settings and is generalizing to the art classroom."
                       />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 text-emerald-700">What Helped</label>
                          <textarea 
                            className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-sm font-medium text-emerald-900 resize-none min-h-[80px]"
                            defaultValue="Visual schedules placed at eye level."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 text-blue-700">Next Recommended Step</label>
                          <textarea 
                            className="w-full bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-sm font-medium text-blue-900 resize-none min-h-[80px]"
                            defaultValue="Fade specific verbal prompts."
                          />
                        </div>
                     </div>
                  </div>
               </section>

               {/* Strategies Environment */}
               <section id="strategies" className="scroll-mt-32 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
                       <h3 className="font-bold text-emerald-700 mb-2">Strategies That Help (Consistently)</h3>
                       <div className="space-y-2">
                         <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-sm font-medium text-emerald-900">
                           <p className="font-bold">Visual Breakdowns</p>
                           <p className="text-xs text-Emerald-700 opacity-80 mt-1">Especially in noisy environments.</p>
                         </div>
                         <button className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-800 py-2">
                           <Plus className="w-3 h-3" /> Add Strategy
                         </button>
                       </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
                       <h3 className="font-bold text-amber-700 mb-2">Strategies Requiring Adaptation</h3>
                       <div className="space-y-2">
                         <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl text-sm font-medium text-amber-900">
                           <p className="font-bold">First-Then Board (Verbal)</p>
                           <p className="text-xs text-amber-700 opacity-80 mt-1">Found to increase demand anxiety. Switched to purely visual.</p>
                         </div>
                         <button className="flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-800 py-2">
                           <Plus className="w-3 h-3" /> Add Strategy
                         </button>
                       </div>
                    </div>
                  </div>
               </section>

               {/* Transition Section (Conditionally shown if reportType includes 'Transition') */}
               {reportType.includes('Transition') && (
                 <section id="transition" className="scroll-mt-32 space-y-4">
                    <div className="flex items-center justify-between mb-4 mt-8">
                      <h2 className="text-xl font-bold text-slate-900">Transition & Handover Notes</h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Relationship & Engagement Guidelines</label>
                         <textarea 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[80px]"
                           defaultValue="Allow Manan to lead play for the first 10 minutes. Avoid direct questioning initially; parallel play works best."
                         />
                      </div>
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Regulation & Sensory Support</label>
                         <textarea 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[80px]"
                           defaultValue="Pacing in the room is a regulation tool, not non-compliance. Allow 2-3 minutes of pacing before offering the next structured activity."
                         />
                      </div>
                    </div>
                 </section>
               )}

               {/* Action Plan */}
               <section id="action" className="scroll-mt-32 space-y-4">
                  <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl font-bold text-slate-900">Action Plan (Next 6 Months)</h2>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
                     
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-800">Therapist Progress Notes</label>
                       <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none h-24 text-slate-700" placeholder="General progress notes for the next 6 months..." defaultValue="Client has shown consistent engagement. Will focus on generalizing these skills across environments." />
                     </div>

                     <div className="space-y-4">
                       <label className="text-sm font-bold text-slate-800">Action Items</label>
                       <div className="grid grid-cols-12 gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <div className="col-span-12 md:col-span-6">
                             <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm font-bold text-slate-800" defaultValue="Establish new Transition Goal" />
                          </div>
                          <div className="col-span-12 md:col-span-4">
                             <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm text-slate-600" defaultValue="Therapist & Case Manager" />
                          </div>
                          <div className="col-span-12 md:col-span-2 text-right">
                             <select className="bg-white border border-slate-200 rounded-lg p-2 text-sm font-bold text-indigo-700">
                               <option>Planned</option>
                               <option>In Progress</option>
                             </select>
                          </div>
                       </div>
                     </div>

                     <button className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-dashed border-slate-300 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-bold w-full justify-center transition-colors">
                       <Plus className="w-4 h-4" /> Add Action Item
                     </button>
                  </div>
               </section>

               {/* Internal Notes */}
               <section className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-6 border-dashed mt-8">
                  <div className="flex items-center gap-2 text-slate-500 mb-4">
                     <Briefcase className="w-4 h-4" />
                     <h3 className="font-bold text-sm uppercase tracking-widest">Internal Clinical Notes</h3>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-3 block">Never visible to the client. Case manager review section.</p>
                  <textarea 
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                    placeholder="Add internal supervision remarks or risk records here..."
                  />
               </section>

             </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Action Bar */}
      {isGenerated && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
           <div className="grid grid-cols-2 gap-2 max-w-[1050px] mx-auto">
             <button onClick={() => setViewMode('preview')} className="py-3 px-4 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm text-center">
               Preview Document
             </button>
             <button className="py-3 px-4 bg-blue-600 text-white rounded-xl font-bold text-sm text-center">
               Submit Review
             </button>
           </div>
        </div>
      )}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
