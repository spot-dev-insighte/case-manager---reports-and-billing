import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Mic,
  Plus,
  AlertCircle,
  FileText,
  Clock,
} from "lucide-react";

interface Goal {
  id: string;
  title: string;
  isCustom?: boolean;
}

interface Strategy {
  id: string;
  title: string;
  isCustom?: boolean;
}

export function DailySessionLog({ onExit }: { onExit: () => void }) {
  const [sessionCompleted, setSessionCompleted] = useState<string>("Yes");
  const [actualStart, setActualStart] = useState("08:10");
  const [actualEnd, setActualEnd] = useState("12:30");
  const [environment, setEnvironment] = useState<string>("Classroom");
  const [issuesToday, setIssuesToday] = useState<string>("None");

  const [activeGoals, setActiveGoals] = useState<string[]>([]);
  const [concern, setConcern] = useState<string>("None");
  const [flagForReview, setFlagForReview] = useState(false);
  const [notesToParent, setNotesToParent] = useState("");

  const [goals, setGoals] = useState<Goal[]>([
    { id: "G1", title: "Comprehension access" },
    { id: "G2", title: "Transition predictability" },
    { id: "G3", title: "Social participation" },
  ]);

  const [strategies, setStrategies] = useState<Strategy[]>([
    { id: "S1", title: "Visual support" },
    { id: "S2", title: "Choice-making" },
    { id: "S3", title: "First-then" },
    { id: "S4", title: "Sensory break" },
    { id: "S5", title: "Transition warning" },
    { id: "S6", title: "Modelling" },
  ]);

  const isTimeEdited = actualStart !== "08:10" || actualEnd !== "12:30";

  const toggleGoal = (id: string) => {
    if (activeGoals.includes(id)) {
      setActiveGoals(activeGoals.filter((g) => g !== id));
    } else {
      setActiveGoals([...activeGoals, id]);
    }
  };

  const handleAddCustomGoal = () => {
    const title = prompt("Enter custom goal:");
    if (title) {
      const newId = `G_CUSTOM_${Date.now()}`;
      setGoals([...goals, { id: newId, title, isCustom: true }]);
      setActiveGoals([...activeGoals, newId]);
    }
  };

  const handleAddCustomStrategy = () => {
    const title = prompt("Enter custom strategy:");
    if (title) {
      setStrategies([
        ...strategies,
        { id: `S_CUSTOM_${Date.now()}`, title, isCustom: true },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F7F4] relative">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 py-4 md:px-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-slate-900">
              Manan's Daily Session Log
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              10 June 2026 • Scheduled: 8:10 AM - 12:30 PM • Shadow Support
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={onExit}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 pb-32">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* 1. Session Status & Time */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              1. Session Status
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-800 mb-3">
                  Session completed?
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Yes",
                    "Partial",
                    "Cancelled",
                    "Child absent",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSessionCompleted(opt)}
                      className={`px-4 py-2 text-sm font-medium rounded-xl border transition-colors ${
                        sessionCompleted === opt
                          ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Actual Start Time
                  </label>
                  <input
                    type="time"
                    value={actualStart}
                    onChange={(e) => setActualStart(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Actual End Time
                  </label>
                  <input
                    type="time"
                    value={actualEnd}
                    onChange={(e) => setActualEnd(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {isTimeEdited && (
                <div className="flex items-start gap-2 bg-amber-50 text-amber-800 p-3 rounded-lg border border-amber-200">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs font-medium">
                    Time edited. This log will be flagged for review by the Case
                    Manager to accommodate billing or schedule changes.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* 2. Today's Context */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              2. Today's Context
            </h2>

            <div>
              <p className="text-sm font-bold text-slate-800 mb-3">
                Learning Environment
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Classroom",
                  "Home",
                  "Therapy room",
                  "Playground",
                  "Mealtime",
                  "Transition",
                  "Community",
                  "Other",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setEnvironment(opt)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-colors ${
                      environment === opt
                        ? "bg-blue-50 border-blue-300 text-blue-800"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800 mb-3">
                Any issues today?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "None",
                  "Sleep issue",
                  "Health issue",
                  "School change",
                  "Family update",
                  "Sensory overload",
                  "Conflict",
                  "Tired / Dysregulated",
                  "Other",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setIssuesToday(opt)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-colors ${
                      issuesToday === opt
                        ? "bg-amber-50 border-amber-300 text-amber-800"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Goals & Strategies */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                3. Goals and Strategies
              </h2>
              <button
                onClick={handleAddCustomGoal}
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Add Goal
              </button>
            </div>

            <div className="space-y-4">
              {goals.map((goal) => {
                const isActive = activeGoals.includes(goal.id);
                return (
                  <div
                    key={goal.id}
                    className={`rounded-2xl border transition-all ${
                      isActive
                        ? "border-emerald-300 bg-emerald-50/20 shadow-sm"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div
                      className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 rounded-2xl"
                      onClick={() => toggleGoal(goal.id)}
                    >
                      <h3
                        className={`font-bold ${
                          isActive ? "text-emerald-900" : "text-slate-700"
                        }`}
                      >
                        {goal.title}
                        {goal.isCustom && (
                          <span className="ml-2 text-[10px] uppercase bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">
                            Custom
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-400">
                          {isActive ? "Worked on" : "Not worked on"}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isActive
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isActive && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="p-4 border-t border-emerald-100 space-y-6 bg-white rounded-b-2xl">
                        {/* Activity */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                            Activity used
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Reading comprehension worksheet"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>

                        {/* Support Level & Progress */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                              Support level needed
                            </label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none">
                              <option value="">Select level...</option>
                              <option>Independent</option>
                              <option>Visual support</option>
                              <option>Verbal support</option>
                              <option>Modelled</option>
                              <option>Physical support</option>
                              <option>Co-regulation</option>
                              <option>High adult support</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                              Progress signal
                            </label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none">
                              <option value="">Select signal...</option>
                              <option>Emerging</option>
                              <option>Practising</option>
                              <option>Improving</option>
                              <option>Generalising</option>
                              <option>Not today</option>
                              <option>Regression noticed</option>
                            </select>
                          </div>
                        </div>

                        <div className="border-t border-slate-100 pt-5 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-slate-800 text-sm">
                              Strategy Used
                            </h4>
                            <button
                              onClick={handleAddCustomStrategy}
                              className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase"
                            >
                              + Add custom strategy
                            </button>
                          </div>
                          <div>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none">
                              <option value="">Select strategy...</option>
                              {strategies.map((s) => (
                                <option key={s.id}>
                                  {s.title} {s.isCustom ? "(Custom)" : ""}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                              Was it useful today?
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Helpful",
                                "Partly helpful",
                                "Not helpful",
                                "Child rejected",
                                "Needs adaptation",
                              ].map((st) => (
                                <button
                                  key={st}
                                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                                >
                                  {st}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                              Adaptation made? (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Used audio timer instead of visual timer"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Notes & Documentation */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              4. Complete Session Notes
            </h2>

            {/* Notes to Parent */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" /> Notes to Parent
                </p>
                <button
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                    notesToParent.includes("Recording")
                      ? "bg-red-50 text-red-600 border-red-200 animate-pulse"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100"
                  }`}
                  onClick={() =>
                    setNotesToParent(
                      notesToParent ? "" : "(Recording...) Voice note will transcribe here.",
                    )
                  }
                >
                  <Mic className="w-3.5 h-3.5" /> 
                  {notesToParent.includes("Recording") ? "Stop" : "Voice Record"}
                </button>
              </div>
              <textarea
                placeholder="Share a positive update, a struggle, or how the parent can support at home..."
                value={notesToParent}
                onChange={(e) => setNotesToParent(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none h-32 leading-relaxed"
              />
            </div>

            {/* Record Parent Feedback */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-800">
                Parent Feedback & Input Today
              </p>
              <textarea
                placeholder="What did the parent report about behavior at home? Did they have any questions?"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none h-24 leading-relaxed"
              />
            </div>

            {/* Internal Notes */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-800">
                Internal Notes (Not shared with client)
              </p>
              <textarea
                placeholder="Private clinical observations for yourself, the case manager, or multi-disciplinary team..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none h-32 leading-relaxed"
              />
            </div>
          </section>

          {/* 5. Concerns */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              5. Challenge or Concern
            </h2>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-3">
                Any concern today?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "None",
                  "Regulation difficulty",
                  "Aggression",
                  "Withdrawal",
                  "Refusal",
                  "Sensory distress",
                  "Peer issue",
                  "Safety concern",
                  "Other",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setConcern(opt)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-colors ${
                      concern === opt
                        ? "bg-amber-50 border-amber-300 text-amber-800"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            {concern !== "None" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                    Severity
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                    Needs CM attention?
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>
            )}
          </section>

          {/* 6. Next Session Plan */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              6. Next Session Plan
            </h2>
            <div>
              <label className="text-sm font-bold text-slate-800 block mb-2">
                Next step
              </label>
              <select
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none"
              >
                <option value="">Select next step...</option>
                <option>Continue same goal</option>
                <option>Try adapted strategy</option>
                <option>Reduce support</option>
                <option>Increase support</option>
                <option>Observe again</option>
                <option>Ask CM</option>
                <option>Discuss with parent</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                Notes
              </label>
              <textarea
                placeholder="What should be focused on next session?"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none h-24"
              />
            </div>
          </section>

          {/* Final Submit Section */}
          <section className="bg-emerald-900 rounded-3xl p-6 md:p-8 text-white space-y-8">
            <div>
              <h2 className="text-lg font-serif font-bold mb-4">
                Ready to submit?
              </h2>
              
              <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl bg-emerald-800/40 border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors max-w-sm">
                <div
                  className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                    flagForReview
                      ? "bg-amber-500 border-amber-500 text-amber-950"
                      : "border-emerald-600 bg-emerald-800/50"
                  }`}
                  onClick={() => setFlagForReview(!flagForReview)}
                >
                  {flagForReview && <CheckCircle2 className="w-5 h-5" />}
                </div>
                <div onClick={() => setFlagForReview(!flagForReview)}>
                  <p className="text-sm font-bold text-emerald-50">
                    Send for CM Review
                  </p>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    Flag this session log for your Case Manager.
                  </p>
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-emerald-800">
              <button className="px-4 py-3 bg-emerald-800 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-sm text-center">
                Save Draft
              </button>
              <button
                className="px-4 py-3 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors text-sm text-center border border-emerald-600"
              >
                Preview Notes
              </button>
              <button
                onClick={onExit}
                className="px-4 py-3 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors text-sm text-center shadow-sm"
              >
                Submit Log
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
