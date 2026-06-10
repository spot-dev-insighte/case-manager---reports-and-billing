import { useState } from "react";
import { Plus, Search, Filter, FileText, Calendar, Clock, AlertTriangle, ChevronRight, Activity, Brain } from "lucide-react";
import { CreateIEPModal } from "./CreateIEPModal";

interface IEPDashboardProps {
  onOpen: (id: string) => void;
  onCreate: () => void;
  onNavigate?: (nav: string) => void;
}

export function IEPDashboard({ onOpen, onCreate, onNavigate }: IEPDashboardProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#fafafa] relative w-full overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Individualized Education Plans</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Create, implement and review evidence-based support plans.</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 shrink-0"
          >
            <Plus className="w-4 h-4" /> Create IEP
          </button>
        </div>

        {/* Dashboard Cards grid-cols-1 md:grid-cols-2 lg:grid-cols-5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
             <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-50 p-2 rounded-xl text-amber-600"><FileText className="w-5 h-5" /></div>
                <span className="text-2xl font-bold text-slate-900">4</span>
             </div>
             <h3 className="font-bold text-slate-700 text-sm">Draft IEPs</h3>
             <p className="text-xs text-slate-500 mt-1">In progress</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
             <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600"><Clock className="w-5 h-5" /></div>
                <span className="text-2xl font-bold text-slate-900">2</span>
             </div>
             <h3 className="font-bold text-slate-700 text-sm">Awaiting Review</h3>
             <p className="text-xs text-slate-500 mt-1">Needs CM sign-off</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-slate-300 transition-colors cursor-pointer ring-1 ring-emerald-500/20">
             <div className="flex items-center justify-between mb-4">
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600"><Activity className="w-5 h-5" /></div>
                <span className="text-2xl font-bold text-emerald-700">18</span>
             </div>
             <h3 className="font-bold text-slate-700 text-sm">Active IEPs</h3>
             <p className="text-xs text-slate-500 mt-1">Currently assigned</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
             <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-50 p-2 rounded-xl text-orange-600"><Calendar className="w-5 h-5" /></div>
                <span className="text-2xl font-bold text-slate-900">3</span>
             </div>
             <h3 className="font-bold text-slate-700 text-sm">Reviews Due Soon</h3>
             <p className="text-xs text-slate-500 mt-1">Next 30 days</p>
          </div>
          <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-sm hover:border-red-300 transition-colors cursor-pointer bg-red-50/10">
             <div className="flex items-center justify-between mb-4">
                <div className="bg-red-50 p-2 rounded-xl text-red-600"><AlertTriangle className="w-5 h-5" /></div>
                <span className="text-2xl font-bold text-red-700">1</span>
             </div>
             <h3 className="font-bold text-red-700 text-sm">Overdue Reviews</h3>
             <p className="text-xs text-slate-500 mt-1">Immediate action</p>
          </div>
        </div>

        {/* Filters and List */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row items-center gap-4 bg-slate-50/50">
             <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search child..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
             </div>
             <div className="flex items-center gap-2 w-full md:w-auto">
               <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 bg-white shadow-sm rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
                 <Filter className="w-4 h-4" /> Filters
               </button>
               {/* Mobile only quick action trigger if needed */}
             </div>
          </div>
          
          <div className="divide-y divide-slate-100">
             {/* IEP Card: Manan */}
             <div className="p-4 md:p-6 hover:bg-slate-50 transition-colors">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg shrink-0 overflow-hidden shadow-sm">
                      M
                   </div>
                   <div className="space-y-1">
                     <h3 className="font-bold text-slate-900 text-lg">Manan Sarda</h3>
                     <p className="text-sm font-medium text-slate-500">Heritage Xperiential Learning School · Grade 4</p>
                     <div className="flex items-center gap-2 mt-2">
                       <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">Shadow Support</span>
                       <span className="text-xs text-slate-500">CM: Jane Doe</span>
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 flex-1 md:ml-8 hidden sm:grid">
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">IEP Period</p>
                     <p className="text-sm font-medium text-slate-700">25 Oct 2025 – 25 Apr 2026</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Goals</p>
                     <p className="text-sm font-medium text-slate-700">5 Goals</p>
                     <p className="text-xs text-indigo-600 font-medium">Progress: Variable</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                     <span className="inline-flex text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">Review Due</span>
                     <p className="text-xs text-orange-600 font-medium mt-1">in 18 days</p>
                   </div>
                 </div>
                 
                 {/* Mobile condensed info */}
                 <div className="sm:hidden grid grid-cols-2 gap-3 mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500">Period: 25 Oct 25 – 25 Apr 26</p>
                      <p className="text-xs font-bold text-indigo-600 mt-1">5 Goals • Variable Progress</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">Review Due</span>
                      <p className="text-xs text-slate-500 mt-1">in 18 days</p>
                    </div>
                 </div>

                 <div className="mt-2 md:mt-0 flex justify-end">
                    <button 
                      onClick={() => onOpen('manan-iep')}
                      className="w-full md:w-auto px-6 py-2.5 bg-white border border-slate-200 shadow-sm text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
                    >
                       Open IEP <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                 </div>
               </div>
             </div>

             {/* IEP Card: draft */}
             <div className="p-4 md:p-6 hover:bg-slate-50 transition-colors">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg shrink-0 overflow-hidden shadow-sm">
                      A
                   </div>
                   <div className="space-y-1">
                     <h3 className="font-bold text-slate-900 text-lg">Aisha Khan</h3>
                     <p className="text-sm font-medium text-slate-500">Pathways Early Years · Preschool</p>
                     <div className="flex items-center gap-2 mt-2">
                       <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">Early Intervention</span>
                       <span className="text-xs text-slate-500">CM: Jane Doe</span>
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 flex-1 md:ml-8 hidden sm:grid opacity-60">
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">IEP Period</p>
                     <p className="text-sm font-medium text-slate-700">TBD</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Goals</p>
                     <p className="text-sm font-medium text-slate-700">-</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                     <span className="inline-flex text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">Draft</span>
                     <p className="text-xs text-slate-500 mt-1">Pending inputs</p>
                   </div>
                 </div>

                 <div className="mt-2 md:mt-0 flex justify-end">
                    <button 
                      onClick={() => onOpen('aisha-iep')}
                      className="w-full md:w-auto px-6 py-2.5 bg-white border border-slate-200 shadow-sm text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
                    >
                       Continue Draft <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                 </div>
               </div>
             </div>

          </div>
        </div>

      </div>

      {showCreateModal && (
        <CreateIEPModal 
          onClose={() => setShowCreateModal(false)}
          onCreate={(id) => {
            setShowCreateModal(false);
            onOpen(id);
          }}
        />
      )}
    </div>
  );
}
