import { User, Calendar, Activity, Info } from "lucide-react";

interface PatientBannerProps {
  name: string;
  id: string;
  age: string;
  dob: string;
  diagnosis: string;
  status: string;
}

export function PatientBanner({ name, id, age, dob, diagnosis, status }: PatientBannerProps) {
  return (
    <div className="bg-slate-900 text-white shrink-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 md:px-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 shrink-0">
            <User className="w-6 h-6 text-slate-300" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight">{name}</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {status}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1 font-medium">
              <span>Patient ID: {id}</span>
              <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
              <span>DOB: {dob} ({age})</span>
              <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> {diagnosis}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
