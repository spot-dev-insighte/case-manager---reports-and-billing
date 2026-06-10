import { Download, Heart, Star, Target, Zap } from 'lucide-react';

export function IepParentPreviewTab() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-sm text-slate-500 font-medium">This is a preview of the report parents will see.</p>
        <button className="flex items-center gap-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 font-medium text-sm rounded-lg transition-colors">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-emerald-900 text-center py-12 px-6">
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Support Plan for Manan</h1>
          <p className="text-emerald-200 font-medium tracking-wide">November 2025 - April 2026</p>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Section 1: Intro */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 rounded-xl text-amber-600"><Star className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-slate-900">Manan's Strengths & Interests</h2>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Manan is a bright, curious, and warm-hearted child who brings playful energy into any space he enters. He thrives when he feels seen and supported. He has impressive memory and calculation skills, and a wonderful creative streak when engaged in role-play or art.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
               <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50">
                 <h3 className="font-bold text-slate-900 mb-3">He loves...</h3>
                 <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium">
                   <li>Basketball & Chopsticks</li>
                   <li>States and Capitals</li>
                   <li>Dancing (Frog Jumps!)</li>
                 </ul>
               </div>
               <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50">
                 <h3 className="font-bold text-slate-900 mb-3">He is great at...</h3>
                   <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium">
                   <li>Mathematical reasoning</li>
                   <li>Observational learning</li>
                   <li>Connecting with adults</li>
                 </ul>
               </div>
            </div>
          </section>

          {/* Section 2: Goals */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600"><Target className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-slate-900">Our Goals Together</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="font-bold text-emerald-900 mb-3 text-lg">1. Improving Reading Comprehension</h3>
                <p className="text-emerald-900/80 leading-relaxed font-medium">
                  We will help Manan show what he understands in ways that work for him. We'll use visual tools, comic strips, and familiar characters to make word problems and stories less abstract and more approachable.
                </p>
              </div>
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="font-bold text-emerald-900 mb-3 text-lg">2. Personal Boundaries & Social Connection</h3>
                <p className="text-emerald-900/80 leading-relaxed font-medium">
                  We will help Manan recognize the idea of a "personal bubble". By using visual mats and practicing polite phrases like "excuse me", he will feel more confident navigating social spaces with peers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Support */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-xl text-blue-600"><Heart className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-slate-900">How We're Supporting Him</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                 <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5 text-blue-600" />
                 </div>
                 <h3 className="font-bold text-slate-900">Visual Clarity</h3>
                 <p className="text-sm text-slate-600 font-medium">Using visual task breakdowns and visual schedules to remove uncertainty.</p>
              </div>
              <div className="space-y-3">
                 <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5 text-blue-600" />
                 </div>
                 <h3 className="font-bold text-slate-900">Familiar Contexts</h3>
                 <p className="text-sm text-slate-600 font-medium">Incorporating his interests (like games and family names) into academic tasks.</p>
              </div>
              <div className="space-y-3">
                 <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5 text-blue-600" />
                 </div>
                 <h3 className="font-bold text-slate-900">Gentle Redirection</h3>
                 <p className="text-sm text-slate-600 font-medium">Providing a trusted adult to model boundaries warmly without punitive logic.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
