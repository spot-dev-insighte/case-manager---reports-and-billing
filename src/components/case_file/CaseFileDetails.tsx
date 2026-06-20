import { useState } from 'react';
import { 
  ArrowLeft, FileText, Calendar, AlertTriangle, MessageSquare, 
  Clock, Download, Sparkles, Brain, CheckCircle2, FileVideo, Users, Target, Check, Play
} from 'lucide-react';
import { ClinicalBrainPanel } from '../iep/ClinicalBrainPanel';

interface CaseFileDetailsProps {
  caseId: string;
  onBack: () => void;
  onNavigate: (nav: string) => void;
  client?: { id: string; name: string; grade: string; support?: string };
}

export function CaseFileDetails({ caseId, onBack, onNavigate, client }: CaseFileDetailsProps) {
  const [activeTab, setActiveTab] = useState('history');
  const [showInsights, setShowInsights] = useState(false);
  const [approvingGoalId, setApprovingGoalId] = useState<string | null>(null);

  const clientName = client?.name || 'Manan Sarda';
  const firstName = clientName.split(' ')[0] || 'Manan';

  return (
    <div className="h-full flex flex-col w-full overflow-hidden bg-slate-50 relative">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900">{clientName}</h1>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border bg-emerald-50 text-emerald-700 border-emerald-100">
                Active
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500">ID: #{caseId.padStart(4, '0')} • {client ? 'Grade: ' + client.grade : 'Age: 8'} • Enrolled: Jan 2024</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowInsights(!showInsights)}
            className="px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-xl text-sm font-bold shadow-sm hover:bg-indigo-100 flex items-center gap-2 transition-colors"
          >
            <Brain className="w-4 h-4" /> 
            {showInsights ? 'Hide Insights' : 'Generate Clinical Insights'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side Insights Panel */}
        {showInsights && (
          <div className="w-[350px] border-r border-slate-200 bg-white h-full shrink-0 flex flex-col shadow-sm z-10 transition-all">
             <div className="p-4 border-b border-slate-100 bg-indigo-600 text-white flex items-center gap-2">
               <Sparkles className="w-5 h-5" />
               <h2 className="font-bold">AI Clinical Insights</h2>
             </div>
             <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-indigo-50/10">
                <div className="p-4 bg-white border border-indigo-100 rounded-xl shadow-sm space-y-2">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Progress Note
                  </h3>
                  <p className="text-sm text-slate-600">Based on recent session logs, Manan is responding well to visually structured transitions, decreasing distress frequency by 40%.</p>
                </div>
                <div className="p-4 bg-white border border-amber-100 rounded-xl shadow-sm space-y-2">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Area of Concern
                  </h3>
                  <p className="text-sm text-slate-600">Two incident reports in the last month indicate challenging behavior during unexpected schedule changes in the cafeteria.</p>
                </div>
                <div className="p-4 bg-white border border-indigo-100 rounded-xl shadow-sm space-y-2">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-indigo-500" /> Suggested Strategy
                  </h3>
                  <p className="text-sm text-slate-600">Consider updating the IEP goal on communication to include specific AAC requests during lunchtime transitions.</p>
                  <button className="text-indigo-600 text-xs font-bold mt-2 hover:underline">Apply to active IEP</button>
                </div>
             </div>
          </div>
        )}

        {/* Tabbed Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          <div className="border-b border-slate-200 bg-white px-2">
            <div className="flex overflow-x-auto hide-scrollbar">
              {[
                { id: 'history', label: 'Case History', icon: Clock },
                { id: 'goals', label: 'Goal Progress', icon: Target },
                { id: 'iep', label: 'IEP & Plans', icon: FileText },
                { id: 'sessions', label: 'Session Logs', icon: Calendar },
                { id: 'observations', label: 'Observations', icon: FileVideo },
                { id: 'incidents', label: 'Incident Reports', icon: AlertTriangle },
                { id: 'notes', label: 'Meeting Notes', icon: MessageSquare },
                { id: 'reports', label: 'Reports', icon: FileText }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-emerald-600 text-emerald-700' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" /> {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {activeTab === 'history' && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold font-serif text-slate-900 mb-6">Case Profile & History</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-100">
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Demographics</h3>
                      <dl className="space-y-4 text-sm">
                        <div>
                          <dt className="text-slate-500">Date of Birth</dt>
                          <dd className="font-bold text-slate-900">14 August 2017 (8 yrs)</dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Parent/Guardian</dt>
                          <dd className="font-bold text-slate-900">Shikha Sarda</dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Primary Diagnosis</dt>
                          <dd className="font-bold text-slate-900">Autism Spectrum Disorder</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                       <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Service Details</h3>
                       <dl className="space-y-4 text-sm">
                        <div>
                          <dt className="text-slate-500">Current Program</dt>
                          <dd className="font-bold text-slate-900">Full-time Shadow Support</dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Lead Therapist</dt>
                          <dd className="font-bold text-slate-900">Jane Doe (Insighte)</dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">School Context</dt>
                          <dd className="font-bold text-slate-900">Heritage Xperiential</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Developmental Milestones</h3>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {/* Event */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1 hover:border-emerald-200 transition-colors">
                         <span className="text-xs font-bold text-emerald-600 block">October 2024</span>
                         <p className="font-bold text-slate-900 text-sm">Most Recent IEP Activated</p>
                         <p className="text-sm text-slate-600">Focus on transition communication.</p>
                      </div>
                    </div>
                    {/* Event */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1 hover:border-blue-200 transition-colors">
                         <span className="text-xs font-bold text-blue-600 block">January 2024</span>
                         <p className="font-bold text-slate-900 text-sm">Intake & Initial Assessment</p>
                         <p className="text-sm text-slate-600">Enrolled with Insighte for shadow support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'goals' && (
                <div className="space-y-6">
                  {/* Insight Banner */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex items-start gap-4">
                     <Brain className="w-8 h-8 text-indigo-500 shrink-0" />
                     <div>
                       <h3 className="font-bold text-indigo-900 mb-1">Goal Progress Insights</h3>
                       <p className="text-sm text-indigo-800 font-medium">Manan is showing strong achievement levels (75% mastery) in "Communication" goals, specifically utilizing his AAC device during table-top tasks. "Transition" goals remain at an Emerging level (20% independence).</p>
                     </div>
                  </div>

                  {/* Active Goals Tracker */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold font-serif text-slate-900 mb-6">Active IEP Goals Progress</h2>
                    <div className="space-y-4">
                      
                      <div className="border border-slate-100 bg-slate-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                           <div className="max-w-xl">
                             <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Communication</span>
                             <h4 className="font-bold text-slate-800">Use AAC device to request "Help"</h4>
                           </div>
                           <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">75% Achieved</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500">Achieved 3 out of 4 consecutive sessions across 2 environments.</p>
                      </div>

                      <div className="border border-slate-100 bg-slate-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                           <div className="max-w-xl">
                             <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">Transitions</span>
                             <h4 className="font-bold text-slate-800">Transition from play to work independently</h4>
                           </div>
                           <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Emerging (20%)</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500">Requires max prompting; dropping to floor behavior still observed.</p>
                      </div>

                    </div>
                  </div>

                  {/* Pending / Suggested Goals from External */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-slate-900">Goals Pending Review</h2>
                      <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">2 Tracking</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Goals suggested by parents or added by therapists outside the formal IEP process. Review to add to active IEP.</p>
                    
                    <div className="space-y-4">
                      {approvingGoalId === 'goal-1' ? (
                        <div className="border border-blue-300 rounded-xl bg-blue-50/50 p-5 space-y-4 shadow-sm">
                          <h4 className="font-bold text-slate-800 text-lg">Approve & Structure Goal</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-slate-200 pb-4">
                            <div>
                              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-1">Source context</span>
                              <p className="text-sm font-medium text-slate-700">Sitting at the dinner table for 15 mins</p>
                              <p className="text-xs text-slate-500 italic mt-1">"We really struggle with meal times at home. Would love to work on this." (Suggested by Shikha Sarda)</p>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Goal Status</label>
                                <select className="w-full bg-white border border-slate-200 rounded p-2 text-sm">
                                  <option>Add to Active IEP</option>
                                  <option>Track for next IEP</option>
                                  <option>Dismiss</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3 pt-2">
                             <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1">Goal Statement</label>
                                <textarea className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" rows={2} defaultValue="Given visual timers and preferred activity reinforcers, Manan will sit at the dinner table for 15 contiguous minutes." />
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-xs font-bold text-slate-700 block mb-1">Measurement Method</label>
                                  <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm">
                                    <option>Duration</option>
                                    <option>Frequency</option>
                                    <option>Level of Independence</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="text-xs font-bold text-slate-700 block mb-1">Target Constraints</label>
                                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm" defaultValue="15 minutes, 4 out of 5 evenings" />
                                </div>
                             </div>
                             <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1">Intervention Strategy</label>
                                <textarea className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" rows={2} defaultValue="Use a visual timer positioned near his plate. Start with 5 minutes and increase by 2 minutes weekly." />
                             </div>
                          </div>
                          <div className="pt-3 flex justify-end gap-3 border-t border-blue-100">
                             <button onClick={() => setApprovingGoalId(null)} className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-white rounded-lg">Cancel</button>
                             <button onClick={() => setApprovingGoalId(null)} className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm">Save & Track</button>
                          </div>
                        </div>
                      ) : (
                        <div className="border border-slate-200 border-l-4 border-l-blue-500 rounded-xl p-4 bg-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-1">Suggested by Parent (Shikha Sarda)</span>
                              <h4 className="font-bold text-slate-800 mb-1">Sitting at the dinner table for 15 mins</h4>
                              <p className="text-xs text-slate-600 mb-3">"We really struggle with meal times at home. Would love to work on this."</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => setApprovingGoalId('goal-1')} className="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded hover:bg-emerald-100">Approve & Add</button>
                              <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded hover:bg-slate-200">Discuss</button>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="border border-slate-200 border-l-4 border-l-emerald-500 rounded-xl p-4 bg-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-1">Added by Therapist (Jane Doe)</span>
                            <h4 className="font-bold text-slate-800 mb-1">Independent shoe tying</h4>
                            <p className="text-xs text-slate-600 mb-3">Noticed Manan has the fine motor skills for this during recent OT sessions. We started practicing.</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded hover:bg-emerald-100">Approve & Add</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded hover:bg-slate-200">Discuss</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'iep' && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold font-serif text-slate-900">Individualized Education Plans</h2>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-emerald-700">
                      Create New IEP
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all cursor-pointer shadow-sm group">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900 text-lg">IEP 2025-2026</h3>
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] uppercase font-bold tracking-wider">Active</span>
                          </div>
                          <p className="text-sm text-slate-500">Valid: Oct 2025 - Apr 2026</p>
                        </div>
                        <button 
                          onClick={() => onNavigate('clinical-plan')}
                          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 bg-slate-50 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          View / Edit
                        </button>
                      </div>
                      <div className="mt-4 flex gap-6 text-sm">
                        <div><span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-1">Goals</span><span className="font-bold text-slate-800">12 Active</span></div>
                        <div><span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-1">Last Review</span><span className="font-bold text-slate-800">2 Weeks Ago</span></div>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 cursor-not-allowed opacity-70">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-700 text-lg">IEP 2024-2025</h3>
                            <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px] uppercase font-bold tracking-wider">Archived</span>
                          </div>
                          <p className="text-sm text-slate-500">Valid: Oct 2024 - Apr 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'observations' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold font-serif text-slate-900">Observation Reports</h2>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-emerald-700">
                      New Observation
                    </button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-lg">Classroom Environment Observation</h3>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-[10px] uppercase font-bold tracking-wider">Video Analyzed</span>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Oct 18, 2025 • Conducted by Jane Doe (BCBA)
                        </p>
                      </div>
                      <button className="text-sm text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1">
                        <FileText className="w-4 h-4" /> View Full PDF
                      </button>
                    </div>

                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Key Highlights</span>
                         <ul className="space-y-2 text-sm text-slate-700">
                           <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> High engagement during unstructured play when using visual timetable.</li>
                           <li className="flex gap-2 items-start"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> Shows signs of distress when transitions are abrupt.</li>
                         </ul>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-center">
                         <div className="text-center group cursor-pointer">
                           <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700 transition-colors shadow-sm">
                             <Play className="w-5 h-5 text-white ml-1" />
                           </div>
                           <span className="text-xs font-bold text-slate-700">Watch Session Clip (2:15)</span>
                         </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">AI-Generated Insights from Session:</h4>
                      <p className="text-sm text-slate-600 leading-relaxed bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-indigo-900 border-l-4 border-l-indigo-500">
                        "Manan responded well to peer modeling but struggled with direct verbal prompts from the shadow teacher. Consider incorporating more peer-mediated strategies and reducing direct verbal directives to promote independence. The pacing behavior observed at 14:00 aligns with increased sensory load in the cafeteria."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === 'sessions' || activeTab === 'incidents' || activeTab === 'notes') && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-64 text-slate-500">
                  <FileText className="w-12 h-12 text-slate-300 mb-4" />
                  <p className="text-lg font-bold text-slate-700 mb-1">No recent records</p>
                  <p className="text-sm">There are no {activeTab} files logged for this period.</p>
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div>
                      <h2 className="text-xl font-bold font-serif text-slate-900 mb-1">Reports</h2>
                      <p className="text-sm text-slate-500">View and manage observation, progress, and monthly reports.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-lg">May 2026 Monthly Progress Report</h3>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] uppercase font-bold tracking-wider">Completed</span>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Generated Jun 2, 2026 • By Sarah Jenkins, BCBA
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => onNavigate?.('monthly-report')} className="text-sm text-blue-600 font-bold bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                          Open in Editor
                        </button>
                        <button className="text-sm text-slate-600 font-bold border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      Summary: This month, Manan attended 18 support sessions across classroom and group environments. Goal 1 is progressing well, while Goal 2 shows emerging progress. Visual task breakdowns and response choices were the most helpful supports this month.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-lg">Classroom Environment Observation Report</h3>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-[10px] uppercase font-bold tracking-wider">Video Analyzed</span>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Oct 18, 2025 • Conducted by Jane Doe (BCBA)
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-sm text-slate-600 font-bold border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-indigo-900">
                      AI Observation Insight: "Manan responded well to peer modeling but struggled with direct verbal prompts from the shadow teacher. Consider incorporating more peer-mediated strategies..."
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-lg">Mid-Year Progress Evaluation</h3>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[10px] uppercase font-bold tracking-wider">Archived</span>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Feb 12, 2026 • By Sarah Jenkins, BCBA
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-sm text-slate-600 font-bold border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
