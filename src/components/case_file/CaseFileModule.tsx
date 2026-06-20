import { useState } from 'react';
import { 
  Users, Search, Filter, ChevronRight, FileText, Calendar, 
  AlertTriangle, Phone, Mail, FileArchive, Clock 
} from 'lucide-react';
import { CaseFileDetails } from './CaseFileDetails';

export function CaseFileModule({ onNavigate, client }: { onNavigate: (nav: string) => void, client?: { id: string; name: string; grade: string; support?: string } }) {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  if (selectedCase) {
    return <CaseFileDetails caseId={selectedCase} onBack={() => setSelectedCase(null)} onNavigate={onNavigate} client={client} />;
  }

  const cases = [
    { id: '1', name: 'Manan Sarda', status: 'Active', age: 8, lastSession: 'Yesterday', priority: 'High' },
    { id: '2', name: 'Aarav Patel', status: 'Active', age: 6, lastSession: 'Oct 20', priority: 'Medium' },
    { id: '3', name: 'Riya Gupta', status: 'Inactive', age: 10, lastSession: 'Sep 15', priority: 'Low' }
  ];

  return (
    <div className="h-full flex flex-col p-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">Case Files</h1>
          <p className="text-slate-500 mt-1">Manage and access all client records, plans, and history.</p>
        </div>
        <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 shadow-sm transition-colors text-sm">
          + New Case File
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1">
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search clients by name or ID..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium text-sm flex items-center gap-2 hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-xs text-slate-500 font-bold uppercase tracking-wider sticky top-0 border-b border-slate-200 z-10">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 hidden md:table-cell">Age</th>
                <th className="px-6 py-4 hidden md:table-cell">Last Session</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cases.map((c) => (
                <tr 
                  key={c.id} 
                  className="hover:bg-slate-50 cursor-pointer transition-colors group"
                  onClick={() => setSelectedCase(c.id)}
                >
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{c.name}</div>
                    <div className="text-xs text-slate-500 font-medium">ID: #{c.id.padStart(4, '0')}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${
                      c.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-slate-600">{c.age} yrs</td>
                  <td className="px-6 py-4 hidden md:table-cell text-slate-600 font-medium flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {c.lastSession}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ChevronRight className="w-5 h-5 text-slate-300 ml-auto group-hover:text-emerald-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
