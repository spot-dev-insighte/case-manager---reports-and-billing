import { User, Calendar, Stethoscope, Users } from "lucide-react";

export function StudentProfileSection() {
  return (
    <section id="section-overview" className="scroll-mt-32">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">01</span>
              <h2 className="text-xl font-bold text-slate-900">Patient Profile & Core Administration</h2>
            </div>
            <p className="text-sm text-slate-500">Demographics, clinical diagnosis, and care team configuration.</p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Demographics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                  <p className="text-sm font-bold text-slate-900">Manan Sarda</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Date of Birth</label>
                  <p className="text-sm font-bold text-slate-900">14 Aug 2017 (8 yrs)</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Primary Guardian</label>
                  <p className="text-sm font-bold text-slate-900">Shikha Sarda</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Care Provider</label>
                  <p className="text-sm font-bold text-slate-900">Insighte</p>
                </div>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Clinical Context</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Primary Diagnosis</label>
                  <p className="text-sm font-medium text-slate-800 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">Autism Spectrum Disorder (F84.0)</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Secondary / Co-occurring</label>
                  <p className="text-sm font-medium text-slate-800 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">Sensory Processing Differences</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
