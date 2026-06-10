import { FileText, Download, CheckCircle2, Eye, Send } from "lucide-react";
import { useState } from "react";

export function ClinicalSummarySection() {
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const therapistName = "You (Jane Doe)";
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeStr = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  if (isSubmitted) {
    return (
      <section id="summary" className="bg-white rounded-3xl border border-emerald-200 shadow-sm p-8 text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Observation Report Submitted</h2>
        <p className="text-slate-500 text-sm">Submitted on {dateStr} at {timeStr} by {therapistName}.</p>
        <p className="text-slate-600 text-sm max-w-md mx-auto">This report has been sent to the Case Manager and is stored in your Reports section.</p>
      </section>
    );
  }

  return (
    <section id="summary" className="bg-white rounded-3xl border border-indigo-200 shadow-sm p-6 md:p-8 space-y-6 border-l-8 border-l-indigo-500">
       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
         <div>
           <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-800 mb-1">Full Clinical Summary Document</h2>
           <p className="text-xs text-indigo-600 font-medium">A formal, long-form document automatically compiled from all inputs.</p>
         </div>
         <button 
           onClick={() => setShowPreview(!showPreview)}
           className="px-4 py-2 text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 shadow-sm transition-colors flex items-center justify-center gap-2 shrink-0"
         >
           {showPreview ? <Eye className="w-4 h-4"/> : <FileText className="w-4 h-4"/>} 
           {showPreview ? "Hide Preview" : "Generate & Preview Report"}
         </button>
       </div>
       
       {showPreview ? (
         <div className="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-6 h-[500px] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 border border-slate-200 shadow-sm rounded-xl space-y-8">
               <div className="flex justify-between items-start border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-indigo-400" />
                    <div>
                       <h3 className="text-xl font-serif font-bold text-slate-900">Observation Synthesis Report</h3>
                       <p className="text-sm font-medium text-slate-500 mt-1">Initial Assessment Phase</p>
                    </div>
                  </div>
                  <div className="text-right text-xs font-medium text-slate-500 space-y-1">
                    <p><strong className="text-slate-700">Client:</strong> Manan Sarda</p>
                    <p><strong className="text-slate-700">Date:</strong> {dateStr}</p>
                    <p><strong className="text-slate-700">Therapist:</strong> Jane Doe</p>
                  </div>
               </div>
               
               <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-medium">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs border-b border-slate-100 pb-2">1. Child Summary</h4>
                    <p>Manan is a 5-year-old boy in Kindergarten who presents with strong visual learning skills and an extensive interest in mechanics...</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs border-b border-slate-100 pb-2">2. Strengths & Interests</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Displays excellent pattern recognition.</li>
                      <li>Highly responsive to structured, visual routines.</li>
                      <li>Enjoys visual learning.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs border-b border-slate-100 pb-2">3. Support Needs Profile</h4>
                    <p>Primary support needs lie in the areas of micro-transitions and coping with unstructured sensory environments. During therapy and at school, Manan benefits significantly from structured breakdowns and visual aids.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs border-b border-slate-100 pb-2">4. Learning Environments & Strategies</h4>
                    <p>Classroom modifications such as seating near the teacher and visual task breakdowns have proven effective. Unstructured floor time remains a challenge without direct assistance.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs border-b border-slate-100 pb-2">5. Emerging Goals</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Improve transition independence using visual schedules from primary therapy room to waiting area.</li>
                    </ul>
                  </div>
               </div>
            </div>
         </div>
       ) : (
         <div className="h-48 border-2 border-dashed border-indigo-200 rounded-2xl flex flex-col items-center justify-center text-slate-500 bg-indigo-50/10">
           <FileText className="w-8 h-8 text-indigo-300 mb-2" />
           <p className="text-sm font-medium">Click "Generate & Preview Report" to compile all sections.</p>
         </div>
       )}
       
       <div className="flex justify-end pt-6 border-t border-indigo-100">
          <button 
            onClick={() => setIsSubmitted(true)}
            disabled={!showPreview}
            className={`px-6 py-3 font-bold rounded-xl shadow-sm transition-colors text-sm flex items-center gap-2 ${
              showPreview ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
             <Send className="w-4 h-4" /> Submit Observation Report
          </button>
       </div>
    </section>
  );
}
