import { CheckCircle2, Circle, ArrowRight, Activity, Target, ShieldCheck, AlertCircle } from 'lucide-react';

interface IepOverviewTabProps {
  onNavigate: (tabId: string) => void;
}

export function IepOverviewTab({ onNavigate }: IepOverviewTabProps) {
  return (
    <div className="space-y-6 max-w-5xl">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Observation Evidence', value: '42', subtitle: 'Entries analyzed', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Planning Priorities', value: '5', subtitle: 'Identified', icon: Target, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Active Goals', value: '4', subtitle: 'Drafted', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Linked Strategies', value: '12', subtitle: 'From strategy pool', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <div className="flex flex-col mt-1">
                <span className="text-sm font-medium text-slate-700">{stat.label}</span>
                <span className="text-xs text-slate-400">{stat.subtitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readiness Checklist */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-[#FDFCFB] px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900">Readiness Checklist</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { text: 'Child strengths identified', done: true },
                  { text: 'Environments mapped', done: true },
                  { text: 'Observation evidence linked', done: true },
                  { text: 'Parent priorities added', done: true },
                  { text: 'Child voice needs confirmation', done: false, alert: true },
                  { text: 'Goals have measurements', done: true },
                  { text: 'Two strategies need supervisor review', done: false, alert: true },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {item.done ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    ) : item.alert ? (
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0" />
                    )}
                    <span className={`text-sm font-medium ${item.done ? 'text-slate-700' : item.alert ? 'text-amber-800' : 'text-slate-500'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="col-span-1 space-y-6">
          <div className="bg-emerald-900 rounded-2xl shadow-lg border border-emerald-800 p-6 text-white flex flex-col h-full">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-4">Next Steps</h3>
            <p className="text-emerald-50 text-sm leading-relaxed mb-6">
              You are currently drafting the IEP. Address the pending checklist items before submitting for clinical review.
            </p>
            
            <div className="space-y-3 mt-auto">
              <button 
                onClick={() => onNavigate('goals')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-between"
              >
                Continue Drafting Goals
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-medium py-2.5 px-4 rounded-xl transition-colors border border-emerald-700/50">
                Preview Parent Version
              </button>
              <button className="w-full bg-transparent hover:bg-emerald-800/50 text-emerald-200 font-medium py-2 px-4 rounded-xl transition-colors text-sm">
                View Source Evidence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
