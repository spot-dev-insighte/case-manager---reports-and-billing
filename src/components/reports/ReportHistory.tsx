import { useState } from 'react';
import { FileText, Search, ChevronRight, Calculator, FileCheck, CheckCircle2, Clock } from 'lucide-react';

export function ReportHistory() {
  const [selectedClient, setSelectedClient] = useState('all');

  const history = [
    { id: 1, type: 'Monthly Report', client: 'Manan Sarda', date: 'Jun 10, 2026', status: 'Draft', color: 'blue' },
    { id: 2, type: 'Progress Report', client: 'Aisha Khan', date: 'May 28, 2026', status: 'Submitted', color: 'emerald' },
    { id: 3, type: 'Observation Report', client: 'Leo Carmichael', date: 'May 15, 2026', status: 'Submitted', color: 'emerald' },
    { id: 4, type: 'IEP Report', client: 'Manan Sarda', date: 'May 02, 2026', status: 'Active', color: 'purple' },
    { id: 5, type: 'Monthly Report', client: 'Aisha Khan', date: 'Apr 30, 2026', status: 'Submitted', color: 'emerald' },
    { id: 6, type: 'Observation Report', client: 'Manan Sarda', date: 'Apr 10, 2026', status: 'Submitted', color: 'emerald' },
  ];

  const filtered = selectedClient === 'all' ? history : history.filter(h => h.client === selectedClient);

  return (
    <div className="flex flex-col h-full bg-[#fafafa] relative w-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 xl:p-12 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Report History</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">View past reports across all your clients.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between bg-slate-50 gap-4">
             <div className="flex items-center gap-3">
               <label className="text-sm font-bold text-slate-700">Client:</label>
               <select 
                 className="bg-white border border-slate-300 rounded-lg text-sm px-3 py-1.5 focus:ring-2 focus:ring-blue-500/20"
                 value={selectedClient}
                 onChange={(e) => setSelectedClient(e.target.value)}
               >
                 <option value="all">All Clients</option>
                 <option value="Manan Sarda">Manan Sarda</option>
                 <option value="Aisha Khan">Aisha Khan</option>
                 <option value="Leo Carmichael">Leo Carmichael</option>
               </select>
             </div>
             <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search reports..." className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
             </div>
          </div>
          
          <div className="divide-y divide-slate-100">
             {filtered.map(report => (
               <div key={report.id} className="p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                  <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-xl shrink-0 bg-${report.color}-50 text-${report.color}-600`}>
                       <FileText className="w-5 h-5" />
                     </div>
                     <div>
                       <h3 className="font-bold text-slate-900">{report.type}</h3>
                       <p className="text-xs text-slate-500 font-medium">{report.client}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 justify-between md:justify-end">
                     <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-${report.status === 'Draft' ? 'amber' : report.status === 'Active' ? 'purple' : 'emerald'}-50 text-${report.status === 'Draft' ? 'amber' : report.status === 'Active' ? 'purple' : 'emerald'}-700 border border-${report.status === 'Draft' ? 'amber' : report.status === 'Active' ? 'purple' : 'emerald'}-200`}>
                       {report.status}
                     </span>
                     <p className="text-xs text-slate-400 font-medium w-24 text-right">{report.date}</p>
                     <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
               </div>
             ))}
             {filtered.length === 0 && (
               <div className="p-12 text-center text-slate-500 text-sm">
                 No reports found.
               </div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
}
