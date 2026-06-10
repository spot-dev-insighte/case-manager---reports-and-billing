import { MessageSquare, Image as ImageIcon } from "lucide-react";

export function EvidenceSection() {
  return (
    <section id="evidence" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
       <div className="flex items-center justify-between mb-2">
         <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Evidence Gallery</h2>
         <button className="px-4 py-2 text-xs font-bold bg-slate-50 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            + Upload Evidence
         </button>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 relative border-b border-slate-200">
               <ImageIcon className="w-8 h-8" />
               <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">IMG_0921.jpg</span>
            </div>
            <div className="p-4 space-y-3">
               <div className="space-y-1">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tags</span>
                 <div className="flex gap-1">
                   <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">Classroom</span>
                   <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded font-bold">Shareable</span>
                 </div>
               </div>
               <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                 <MessageSquare className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                 <p className="text-xs text-slate-600 font-medium leading-relaxed">
                   Child completing the schedule task independently using the First-Then board.
                 </p>
               </div>
               <button className="text-[10px] font-bold text-slate-500 uppercase hover:text-slate-700 w-full text-left">
                  + Add/Edit Details
               </button>
            </div>
          </div>

          <button className="aspect-auto min-h-[240px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-sm font-bold text-slate-500 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
            <div className="bg-slate-100 p-3 rounded-full mb-3 text-slate-400">
              <ImageIcon className="w-6 h-6" />
            </div>
            Drop Images or Notes here
          </button>
       </div>
    </section>
  );
}
