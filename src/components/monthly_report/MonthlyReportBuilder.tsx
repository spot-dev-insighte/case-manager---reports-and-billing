import { useState, useRef } from "react";
import {
  ArrowLeft,
  Send,
  Calendar,
  Target,
  FileText,
  Sparkles,
  Eye,
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
  Briefcase
} from "lucide-react";

export function MonthlyReportBuilder({ onExit, onNavigate, clientName = "Manan Sarda", reportMonth = "May 2026" }: { onExit: () => void, onNavigate?: (nav: string) => void, clientName?: string, reportMonth?: string }) {
  const [isGenerated, setIsGenerated] = useState(false);
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'client'>('edit');
  const [parentComment, setParentComment] = useState("");
  const [showParentCommentInput, setShowParentCommentInput] = useState(false);
  const [expandChildSummary, setExpandChildSummary] = useState(false);

  const [activeTab, setActiveTab] = useState('Source');
  
  const [goal1AddNote, setGoal1AddNote] = useState(false);
  const [goal1NoteText, setGoal1NoteText] = useState("");
  const [showGoal1Evidence, setShowGoal1Evidence] = useState(false);
  const [showSuggestGoal, setShowSuggestGoal] = useState(false);
  const [newGoalSuggestion, setNewGoalSuggestion] = useState("");
  const [showAnnexeLogs, setShowAnnexeLogs] = useState(false);

  const [additionalStrategies, setAdditionalStrategies] = useState<{text: string}[]>([]);
  const [workingItems, setWorkingItems] = useState<{text: string}[]>([]);
  const [modificationItems, setModificationItems] = useState<{text: string}[]>([]);
  
  const [showStrategyInput, setShowStrategyInput] = useState(false);
  const [showWorkingInput, setShowWorkingInput] = useState(false);
  const [showModificationInput, setShowModificationInput] = useState(false);
  const [tempInput, setTempInput] = useState("");
  
  const [verifiedLogs, setVerifiedLogs] = useState<string[]>([]);
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const scrollToEl = (id: string, tab: string) => {
    setActiveTab(tab);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (viewMode === 'preview') {
    return (
      <div className="flex flex-col h-full bg-[#f8f9fa] relative">
        <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 py-4 md:px-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setViewMode('edit')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Preview: {reportMonth} Monthly Report</h1>
              <p className="text-xs text-slate-500 font-medium">Internal preview before client sharing</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('client')} className="px-4 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors shadow-sm">
              Simulate Client View
            </button>
            <button onClick={onExit} className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 rounded-xl transition-colors shadow-sm">
              <Send className="w-4 h-4" /> Submit to Case Manager
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 pb-32">
          <div className="max-w-[800px] mx-auto bg-white shadow-lg border border-slate-100 min-h-[1000px] p-8 md:p-12 space-y-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-8">
              <div className="flex-1 space-y-2">
                <h1 className="text-3xl font-serif font-bold text-slate-900">Monthly Progress Report</h1>
                <p className="text-lg text-slate-700 font-medium">{clientName}</p>
                <p className="text-sm text-slate-500 font-medium">Period: {reportMonth}</p>
                <p className="text-sm text-slate-500 font-medium">DOB: 12 May 2018 (Age 7)</p>
              </div>
              
              <div className="w-full md:w-64 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case Manager</p>
                  <p className="font-bold text-slate-800">Sarah Jenkins, BCBA</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sessions</p>
                  <p className="font-bold text-slate-800">18 Sessions logged</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">1. Month Overview</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                This month, Manan attended 18 support sessions across classroom and group environments. He demonstrated persistence during challenging number tasks and showed pride when sharing completed work.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">2. Goal Progress</h2>
              
              <div className="space-y-4 p-4 border-l-4 border-emerald-500 bg-slate-50 rounded-r-xl">
                <h3 className="font-bold text-slate-800">Goal 1: Comprehension access</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">Participation in comprehension activities improved when tasks were visually structured. The child demonstrated understanding verbally in most recorded opportunities and required fewer repeated instructions than at baseline.</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Progress</span>
                  <span className="text-sm font-bold text-emerald-900 mr-4">Emerging</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Independence</span>
                  <span className="text-sm font-bold text-slate-800">Regular scaffolding</span>
                </div>
              </div>

              <div className="space-y-4 p-4 border-l-4 border-blue-500 bg-slate-50 rounded-r-xl">
                <h3 className="font-bold text-slate-800">Goal 2: Transition predictability</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">Transitions remain an area of support need. The first-then board was helpful in 3 out of 5 attempts. Unexpected changes to routine caused difficulty.</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Progress</span>
                  <span className="text-sm font-bold text-blue-900 mr-4">Introduced</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Independence</span>
                  <span className="text-sm font-bold text-slate-800">Substantial support</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">3. Effective Strategies</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Visual task breakdowns and response choices were the most helpful supports this month.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-slate-200 pb-2">Annexe A: Session Logs</h2>
              <p className="text-sm text-slate-500 italic">Detailed session logs are attached to the final PDF version of this report.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'client') {
    return (
      <div className="flex flex-col h-full bg-[#fcfcfc] relative">
        <div className="sticky top-0 z-20 bg-emerald-700 border-b border-emerald-800 px-4 py-4 md:px-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <button onClick={() => setViewMode('edit')} className="p-2 hover:bg-emerald-600 rounded-lg text-emerald-50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Shikha Sarda (Parent View)</h1>
              <p className="text-xs text-emerald-100 font-medium">{reportMonth} Monthly Report Review</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={onExit} className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl transition-colors shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> Approve Report
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 pb-32">
          <div className="max-w-[800px] mx-auto space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex justify-between items-start border-b border-slate-100 pb-6 mb-6">
                 <div>
                   <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Monthly Progress Report</h2>
                   <p className="text-slate-600">{clientName} • {reportMonth}</p>
                 </div>
                 <div className="bg-emerald-50 p-2 text-emerald-700 font-bold text-xs uppercase tracking-widest rounded">Ready for Review</div>
              </div>

              <div className="space-y-8">
                 <div>
                   <h3 className="font-bold text-slate-800 mb-2">Month Overview</h3>
                   <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                     This month, Manan attended 18 support sessions across classroom and group environments. He demonstrated persistence during challenging number tasks and showed pride when sharing completed work.
                   </p>
                 </div>

                 <div>
                   <h3 className="font-bold text-slate-800 mb-3">Goal Progress</h3>
                   
                   <div className="space-y-4">
                     <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 p-4 border-b border-slate-200">
                          <h4 className="font-bold text-slate-800">Goal 1: Comprehension access</h4>
                          <span className="text-xs font-bold text-emerald-700 mt-1 block">Rating: Emerging</span>
                        </div>
                        <div className="p-4 bg-white relative group">
                           <p className="text-sm text-slate-600">Participation in comprehension activities improved when tasks were visually structured. The child demonstrated understanding verbally in most recorded opportunities and required fewer repeated instructions than at baseline.</p>
                           <button onClick={() => setShowParentCommentInput(true)} className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                             <MessageSquare className="w-3 h-3" /> Add Comment
                           </button>
                        </div>
                        {showParentCommentInput && (
                          <div className="p-4 bg-amber-50/50 border-t border-slate-200">
                             <label className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1 flex items-center gap-1"><User className="w-3 h-3" /> Parent Comment</label>
                             <textarea 
                               className="w-full bg-white border border-amber-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-none h-16"
                               value={parentComment}
                               onChange={(e) => setParentComment(e.target.value)}
                               placeholder="I noticed at home that..."
                             />
                             <div className="flex justify-end gap-2 mt-2">
                               <button onClick={() => setShowParentCommentInput(false)} className="text-xs font-bold text-slate-500 hover:text-slate-700">Cancel</button>
                               <button onClick={() => setShowParentCommentInput(false)} className="text-xs font-bold bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">Save Comment</button>
                             </div>
                          </div>
                        )}
                        {parentComment && !showParentCommentInput && (
                           <div className="p-4 bg-amber-50/50 border-t border-amber-100">
                             <label className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1 flex items-center gap-1"><User className="w-3 h-3" /> Parent Note</label>
                             <p className="text-sm text-slate-700">{parentComment}</p>
                             <button onClick={() => setShowParentCommentInput(true)} className="text-[10px] text-amber-600 font-bold mt-1 hover:underline">Edit</button>
                           </div>
                        )}
                     </div>

                     <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-slate-800">Goal 2: Transition predictability</h4>
                            <span className="text-xs font-bold text-blue-700 mt-1 block">Rating: Introduced</span>
                          </div>
                        </div>
                        <div className="p-4 bg-white relative group">
                           <p className="text-sm text-slate-600">Transitions remain an area of support need. The first-then board was helpful in 3 out of 5 attempts. Unexpected changes to routine caused difficulty.</p>
                           <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                             <MessageSquare className="w-3 h-3" /> Add Comment
                           </button>
                        </div>
                     </div>
                   </div>
                 </div>

                 <div className="pt-4 border-t border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-2">Suggest a New Goal</h3>
                    <p className="text-sm text-slate-500 mb-4">Are there new challenges you've noticed at home you would like to track?</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-dashed border-slate-300 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-bold w-full justify-center transition-colors">
                      <Plus className="w-4 h-4" /> Suggest Goal
                    </button>
                 </div>

                 <div className="pt-8 border-t border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-2">Annexe: Attached Session Logs</h3>
                    <p className="text-sm text-slate-500 mb-4">Click to view the 18 session notes from this month.</p>
                    <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-bold w-full transition-colors">
                      <FileText className="w-5 h-5 text-indigo-500" /> View 18 Session Logs
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // BUILDER VIEW (viewMode === 'edit')
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] relative overflow-hidden">
      
      {/* 4. Mobile-Friendly Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-sm md:text-base font-bold text-slate-900 truncate">{reportMonth} Monthly Report</h1>
            <p className="text-[11px] md:text-xs text-slate-500 font-medium truncate">{clientName} • Draft saved</p>
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

      {/* 2. Top Progress Navigation */}
      <div className="sticky top-[60px] md:top-[64px] z-20 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200 overflow-x-auto hide-scrollbar">
        <div className="max-w-[1050px] mx-auto px-4 md:px-8 py-2.5 flex items-center gap-6 text-[13px] font-bold text-slate-500 whitespace-nowrap">
           <button onClick={() => scrollToEl('source-data', 'Source')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Source' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Source</button>
           <button onClick={() => scrollToEl('overview', 'Overview')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Overview' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Overview</button>
           <button onClick={() => scrollToEl('goals', 'Goals')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Goals' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Goals</button>
           <button onClick={() => scrollToEl('strategies', 'Strategies')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Strategies' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Strategies</button>
           <button onClick={() => scrollToEl('support', 'Support')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Support' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Support</button>
           <button onClick={() => scrollToEl('annexe', 'Annexe')} className={`pb-1 border-b-2 transition-colors ${activeTab === 'Annexe' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>Annexe</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 pb-32">
        <div className="max-w-[1050px] mx-auto space-y-6">
          
          {/* 5. Child Summary Card */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setExpandChildSummary(!expandChildSummary)}>
               <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{clientName}</h2>
                  <p className="text-sm font-medium text-slate-600">8 yrs • Autism Spectrum Disorder • {reportMonth}</p>
               </div>
               <button className="text-slate-400">
                  {expandChildSummary ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5" />}
               </button>
            </div>
            {expandChildSummary && (
               <div className="px-5 pb-5 pt-2 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50/50">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Case Manager</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">Sarah J.</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sessions</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">18 Completed</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Active Goals</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">4</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Evidence</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">31 Entries</p>
                  </div>
               </div>
            )}
          </section>

          {/* 6. Source Data Summary */}
          <section id="source-data" className="scroll-mt-32 space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar className="w-5 h-5"/></div>
                     <h3 className="font-bold text-slate-800">Sessions</h3>
                   </div>
                   <ul className="text-sm text-slate-600 space-y-1 mb-4">
                     <li><span className="font-bold text-slate-900">18</span> completed</li>
                     <li><span className="font-bold text-slate-900">2</span> absent (1 Sick, 1 Personal)</li>
                     <li className="text-amber-600">1 pending log</li>
                   </ul>
                   <button onClick={() => onNavigate?.('sessions')} className="text-sm font-bold text-blue-600 hover:text-blue-800 w-full text-left">View session logs &rarr;</button>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Target className="w-5 h-5"/></div>
                     <h3 className="font-bold text-slate-800">Active goals</h3>
                   </div>
                   <ul className="text-sm text-slate-600 space-y-1 mb-4">
                     <li><span className="font-bold text-slate-900">2</span> active goals</li>
                     <li><span className="font-bold text-slate-900">14</span> evidence entries</li>
                   </ul>
                   <button onClick={() => scrollToEl('goals', 'Goals')} className="text-sm font-bold text-blue-600 hover:text-blue-800 w-full text-left">Review goals &rarr;</button>
                </div>

                <div className="bg-white border border-amber-200 rounded-2xl p-5 shadow-sm bg-amber-50/10">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-amber-100 text-amber-700 rounded-lg"><AlertCircle className="w-5 h-5"/></div>
                     <h3 className="font-bold text-slate-800">Data quality</h3>
                   </div>
                   <ul className="text-sm text-slate-600 space-y-1 mb-4">
                     <li className="text-amber-700 font-medium">2 missing notes</li>
                     <li className="text-amber-700 font-medium">1 incomplete session log</li>
                   </ul>
                   <button onClick={() => scrollToEl('source-data', 'Source')} className="text-sm font-bold text-amber-700 hover:text-amber-900 w-full text-left">Resolve issues &rarr;</button>
                </div>
             </div>
          </section>

          {/* 7. Generate Report */}
          {!isGenerated && (
            <section className="bg-blue-900 rounded-2xl p-8 shadow-sm text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="absolute right-0 top-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
               <div className="relative z-10 space-y-2">
                 <h2 className="text-2xl font-serif font-bold">Ready to generate report</h2>
                 <p className="text-blue-200 text-sm">31 evidence entries and 18 session logs available for {reportMonth}.</p>
               </div>
               <button 
                 onClick={() => setIsGenerated(true)}
                 className="relative z-10 whitespace-nowrap px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
               >
                 <Sparkles className="w-5 h-5 text-blue-600" /> Generate Monthly Draft
               </button>
            </section>
          )}

          {isGenerated && (
             <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               
               {/* 8. Monthly Overview */}
               <section id="overview" className="scroll-mt-32 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Monthly Overview</h2>
                      <p className="text-sm text-slate-500">High-level summary of engagement and progress.</p>
                    </div>
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"><MoreVertical className="w-5 h-5"/></button>
                  </div>
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 leading-relaxed"
                    defaultValue="This month, Manan attended 18 support sessions across classroom and group environments. He demonstrated persistence during challenging number tasks and showed pride when sharing completed work."
                  />
               </section>

               {/* 9. Goal Progress */}
               <section id="goals" className="scroll-mt-32 space-y-4">
                  <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl font-bold text-slate-900">Goal Progress</h2>
                    <span className="text-sm font-bold text-slate-500">2 goals · 14 evidence entries</span>
                  </div>

                  {/* Goal Card 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6 lg:space-y-8">
                     <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">Comprehension access</h3>
                       <p className="text-sm text-slate-600">Will follow 2-step visual instructions independently in classroom setting across 4/5 opportunities.</p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Progress Status</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                            <option>Emerging</option>
                            <option>Developing</option>
                            <option>Generalising</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Independence Level</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                            <option>Regular scaffolding</option>
                            <option>Substantial support</option>
                            <option>Occasional support</option>
                          </select>
                        </div>
                     </div>

                     <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Therapist Progress Note</label>
                       <textarea 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          defaultValue="Participation in comprehension activities improved when tasks were visually structured. Required fewer repeated instructions than at baseline."
                       />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 text-emerald-700">What Helped / Strategies</label>
                          <textarea 
                            className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-sm font-medium text-emerald-900 resize-none min-h-[80px]"
                            defaultValue="Visual schedules and immediate positive reinforcement. (Added from Session on May 4th)"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 text-blue-700">Next Step / Revision</label>
                          <textarea 
                            className="w-full bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-sm font-medium text-blue-900 resize-none min-h-[80px]"
                            defaultValue="Fade specific verbal prompts while maintaining visual supports."
                          />
                        </div>
                     </div>

                     {goal1AddNote && (
                        <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 animate-in fade-in zoom-in-95 duration-200">
                           <label className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1 flex items-center gap-1">Therapist Note</label>
                           <textarea 
                             className="w-full bg-white border border-amber-200 rounded-lg p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-none h-20 mb-2"
                             placeholder="Add specific therapeutic insights for this goal..."
                             value={goal1NoteText}
                             onChange={(e) => setGoal1NoteText(e.target.value)}
                           />
                           <div className="flex justify-end gap-2">
                             <button onClick={() => setGoal1AddNote(false)} className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700">Cancel</button>
                             <button onClick={() => setGoal1AddNote(false)} className="px-3 py-1.5 text-xs font-bold bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">Save Note</button>
                           </div>
                        </div>
                     )}

                     {showGoal1Evidence && (
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Evidence Entries (2/9 shown)</h4>
                           <div className="bg-white border border-slate-200 p-3 rounded-lg text-sm">
                             <p className="font-bold text-slate-800">12 May - Classroom</p>
                             <p className="text-slate-600">Followed visual instructions to pack bag with 1 verbal prompt.</p>
                           </div>
                           <div className="bg-white border border-slate-200 p-3 rounded-lg text-sm">
                             <p className="font-bold text-slate-800">18 May - 1:1 Session</p>
                             <p className="text-slate-600">Independently transitioned using first-then board.</p>
                           </div>
                           <button onClick={() => setShowGoal1Evidence(false)} className="text-xs font-bold text-blue-600">Close Evidence</button>
                        </div>
                     )}

                     <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        <button onClick={() => setShowGoal1Evidence(!showGoal1Evidence)} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                           {showGoal1Evidence ? 'Hide Evidence' : 'Show 9 Evidence Entries'}
                        </button>
                        <button onClick={() => setGoal1AddNote(true)} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">Add Note</button>
                        <button className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-xl text-sm font-bold text-indigo-700 hover:bg-indigo-100 transition-colors ml-auto flex items-center gap-1">
                           <Sparkles className="w-3 h-3" /> Clinical Brian: Suggest Strategy
                        </button>
                     </div>
                  </div>
               </section>

               {/* 12. Strategies Section */}
               <section id="strategies" className="scroll-mt-32 space-y-4">
                  <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl font-bold text-slate-900">Strategies Used</h2>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                     <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Strategies This Month</label>
                       <textarea 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          defaultValue="Visual task breakdowns and response choices were the most helpful supports this month."
                       />
                     </div>
                     {additionalStrategies.map((s, i) => (
                       <div key={i} className="mt-2 text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 font-medium text-slate-800">
                          {s.text}
                       </div>
                     ))}
                     {showStrategyInput ? (
                       <div className="mt-3 flex gap-2">
                         <input type="text" autoFocus value={tempInput} onChange={(e) => setTempInput(e.target.value)} className="flex-1 bg-white border border-slate-200 rounded-lg px-3 text-sm focus:ring-2 focus:ring-blue-500/20" placeholder="Describe strategy..." />
                         <button onClick={() => { if(tempInput) { setAdditionalStrategies([...additionalStrategies, {text: tempInput}]); } setTempInput(""); setShowStrategyInput(false); }} className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg border border-slate-700 hover:bg-slate-900">Add</button>
                         <button onClick={() => { setShowStrategyInput(false); setTempInput(""); }} className="px-3 py-1.5 bg-white text-slate-500 border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-50">Cancel</button>
                       </div>
                     ) : (
                       <button onClick={() => setShowStrategyInput(true)} className="mt-3 flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                         <Plus className="w-4 h-4" /> Add specific strategy detail
                       </button>
                     )}
                  </div>
               </section>
               
               {/* 13. What is Working / Not Working */}
               <section id="support" className="scroll-mt-32 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 space-y-4 shadow-emerald-900/5">
                       <div className="flex items-center gap-2 text-emerald-700 mb-2">
                         <Lightbulb className="w-5 h-5" />
                         <h3 className="font-bold">What is working well</h3>
                       </div>
                       <div className="space-y-2">
                         <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-sm font-medium text-emerald-900">Visual schedule (Goal 1)</div>
                         <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-sm font-medium text-emerald-900">Reduced verbal instruction</div>
                         {workingItems.map((w, i) => (
                            <div key={i} className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-sm font-medium text-emerald-900">{w.text}</div>
                         ))}
                         {showWorkingInput ? (
                           <div className="flex gap-2">
                             <input type="text" autoFocus value={tempInput} onChange={(e) => setTempInput(e.target.value)} className="flex-1 bg-white border border-emerald-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="e.g. specific praise" />
                             <button onClick={() => { if(tempInput) { setWorkingItems([...workingItems, {text: tempInput}]); } setTempInput(""); setShowWorkingInput(false); }} className="px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded hover:bg-emerald-700">Add</button>
                           </div>
                         ) : (
                           <button onClick={() => setShowWorkingInput(true)} className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-800 py-2">
                             <Plus className="w-3 h-3" /> Add item
                           </button>
                         )}
                       </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6 space-y-4 shadow-amber-900/5">
                       <div className="flex items-center gap-2 text-amber-700 mb-2">
                         <AlertCircle className="w-5 h-5" />
                         <h3 className="font-bold">What needs modification</h3>
                       </div>
                       <div className="space-y-2">
                         <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl text-sm font-medium text-amber-900">Unexpected transitions without warning</div>
                         {modificationItems.map((m, i) => (
                            <div key={i} className="bg-amber-50 border border-amber-100 p-3 rounded-xl text-sm font-medium text-amber-900">{m.text}</div>
                         ))}
                         {showModificationInput ? (
                           <div className="flex gap-2">
                             <input type="text" autoFocus value={tempInput} onChange={(e) => setTempInput(e.target.value)} className="flex-1 bg-white border border-amber-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="e.g. lengthy verbal prompts" />
                             <button onClick={() => { if(tempInput) { setModificationItems([...modificationItems, {text: tempInput}]); } setTempInput(""); setShowModificationInput(false); }} className="px-2 py-1 bg-amber-600 text-white text-xs font-bold rounded hover:bg-amber-700">Add</button>
                           </div>
                         ) : (
                           <button onClick={() => setShowModificationInput(true)} className="flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-800 py-2">
                             <Plus className="w-3 h-3" /> Add item
                           </button>
                         )}
                       </div>
                    </div>
                  </div>
               </section>

               {/* 15. Additional Goals / Support */}
               <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                 <h3 className="font-bold text-slate-800 mb-2">Additional Goals or Support Provided</h3>
                 <p className="text-sm text-slate-500 mb-4">Did you introduce new supports or goals not officially listed on the IEP?</p>
                 
                 {showSuggestGoal ? (
                    <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 animate-in fade-in duration-200">
                       <div className="flex items-start gap-3 mb-4">
                         <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                           <Sparkles className="w-4 h-4" />
                         </div>
                         <div>
                           <h4 className="text-sm font-bold text-indigo-900">Suggest Goal for Next IEP</h4>
                           <p className="text-xs text-indigo-700">Frame a new goal directly from this month's observations to present to the Case Manager.</p>
                         </div>
                       </div>
                       <label className="text-xs font-bold text-indigo-800 mb-2 block">Behavior or Challenge Observed</label>
                       <textarea 
                          className="w-full bg-white border border-indigo-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500/20 mb-4 h-24 resize-none"
                          placeholder="Describe the challenge..."
                          value={newGoalSuggestion}
                          onChange={(e) => setNewGoalSuggestion(e.target.value)}
                       />
                       <div className="flex justify-between items-center gap-2 pt-2 border-t border-indigo-100">
                         <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:text-indigo-800"><Sparkles className="w-3 h-3" /> Auto-Draft Goal</button>
                         <div className="flex gap-2">
                           <button onClick={() => setShowSuggestGoal(false)} className="px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Cancel</button>
                           <button onClick={() => { setShowSuggestGoal(false); setNewGoalSuggestion(""); }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">Submit to Clinical Board</button>
                         </div>
                       </div>
                    </div>
                 ) : (
                    <button onClick={() => setShowSuggestGoal(true)} className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 border border-dashed border-slate-300 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-bold w-full transition-colors">
                      <Plus className="w-4 h-4" /> Add record
                    </button>
                 )}
               </section>

               {/* 17. Session Log Annexure */}
               <section id="annexe" className="scroll-mt-32 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                     <FileText className="w-5 h-5 text-slate-400" />
                     <h3 className="font-bold text-slate-800">Session Log Annexure</h3>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <p className="text-sm text-slate-600 font-medium">18 session summaries will be attached to the final PDF.</p>
                     <div className="flex gap-2">
                       <button onClick={() => setShowAnnexeLogs(!showAnnexeLogs)} className="text-sm font-bold text-indigo-600 px-3 py-1.5 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors">
                         {showAnnexeLogs ? 'Hide Logs' : 'Configure Logs'}
                       </button>
                     </div>
                  </div>
                  
                  {showAnnexeLogs && (
                     <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
                           <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white hover:bg-slate-50 cursor-pointer" onClick={() => setExpandedLog(expandedLog === 'log1' ? null : 'log1')}>
                             <div>
                               <p className="font-bold text-slate-800 text-sm">May 18 - 1:1 Session</p>
                               <p className="text-xs text-slate-500 mt-1">Targeted Comprehension and Transition</p>
                             </div>
                             <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                               <button 
                                 onClick={() => setVerifiedLogs(prev => prev.includes('log1') ? prev.filter(l => l !== 'log1') : [...prev, 'log1'])} 
                                 className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors flex items-center gap-1.5 ${verifiedLogs.includes('log1') ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'}`}
                               >
                                 <CheckCircle2 className="w-3.5 h-3.5" /> {verifiedLogs.includes('log1') ? 'Verified' : 'Verify Log & Bill'}
                               </button>
                               <button className="p-1.5 text-slate-400">
                                 {expandedLog === 'log1' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                               </button>
                             </div>
                           </div>
                           {expandedLog === 'log1' && (
                             <div className="p-4 bg-slate-50 border-t border-slate-100 text-sm text-slate-700 animate-in slide-in-from-top-2">
                               <p><span className="font-bold">Duration:</span> 60 mins</p>
                               <p className="mt-2"><span className="font-bold">Notes:</span> Session was highly productive. We ran 10 trials of Goal 1 with 80% independent success...</p>
                               <p className="mt-2 text-xs text-slate-500 italic">Submitted by Therapist Jane Doe</p>
                             </div>
                           )}
                        </div>
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
                           <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white hover:bg-slate-50 cursor-pointer" onClick={() => setExpandedLog(expandedLog === 'log2' ? null : 'log2')}>
                             <div>
                               <p className="font-bold text-slate-800 text-sm">May 12 - Classroom</p>
                               <p className="text-xs text-slate-500 mt-1">Observation</p>
                             </div>
                             <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                               <button 
                                 onClick={() => setVerifiedLogs(prev => prev.includes('log2') ? prev.filter(l => l !== 'log2') : [...prev, 'log2'])} 
                                 className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors flex items-center gap-1.5 ${verifiedLogs.includes('log2') ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'}`}
                               >
                                 <CheckCircle2 className="w-3.5 h-3.5" /> {verifiedLogs.includes('log2') ? 'Verified' : 'Verify Log & Bill'}
                               </button>
                               <button className="p-1.5 text-slate-400">
                                 {expandedLog === 'log2' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                               </button>
                             </div>
                           </div>
                           {expandedLog === 'log2' && (
                             <div className="p-4 bg-slate-50 border-t border-slate-100 text-sm text-slate-700 animate-in slide-in-from-top-2">
                               <p><span className="font-bold">Duration:</span> 45 mins</p>
                               <p className="mt-2"><span className="font-bold">Notes:</span> Observed Manan during morning recess. He struggled slightly with transition out. First-then board required 2 prompts.</p>
                               <p className="mt-2 text-xs text-slate-500 italic">Submitted by Therapist Jane Doe</p>
                             </div>
                           )}
                        </div>
                     </div>
                  )}
               </section>

               {/* 18. Internal Notes */}
               <section className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-6 border-dashed">
                  <div className="flex items-center gap-2 text-slate-500 mb-4">
                     <Briefcase className="w-4 h-4" />
                     <h3 className="font-bold text-sm uppercase tracking-widest">Internal Clinical Notes</h3>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-4 block">Never visible to the client. Used for Case Manager review.</p>
                  
                  <div className="space-y-4">
                     <div>
                       <label className="text-xs font-bold text-slate-700 mb-1 block">Overall Child Progress & Challenges Faced</label>
                       <textarea 
                         className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 resize-none min-h-[60px] focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                         placeholder="Overall progress statement and key challenges..."
                       />
                     </div>
                     <div>
                       <label className="text-xs font-bold text-slate-700 mb-1 block">Support Needed from Case Manager</label>
                       <textarea 
                         className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 resize-none min-h-[60px] focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                         placeholder="e.g. Please review goal 2 for next IEP period..."
                       />
                     </div>
                     <div>
                       <label className="text-xs font-bold text-slate-700 mb-1 block">Therapist Wellness and Learning Plan</label>
                       <textarea 
                         className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 resize-none min-h-[60px] focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                         placeholder="Areas where you need training or additional support..."
                       />
                     </div>
                  </div>
               </section>

             </div>
          )}
        </div>
      </div>

      {/* 20. Sticky Mobile Action Bar */}
      {isGenerated && (
        <div className="md:hidden fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
           <div className="grid grid-cols-2 gap-2 max-w-[1050px] mx-auto">
             <button onClick={() => setViewMode('preview')} className="py-3 px-4 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm text-center">
               Preview Document
             </button>
             <button onClick={() => setViewMode('preview')} className="py-3 px-4 bg-blue-600 text-white rounded-xl font-bold text-sm text-center">
               Submit for Review
             </button>
           </div>
        </div>
      )}
      {/* Pad bottom for mobile action bar */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}