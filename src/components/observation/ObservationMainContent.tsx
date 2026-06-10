import { ChildSnapshotSection } from "./sections/ChildSnapshotSection";
import { ParentInputsSection } from "./sections/ParentInputsSection";
import { SchoolInputsSection } from "./sections/SchoolInputsSection";
import { EnvironmentsSection } from "./sections/EnvironmentsSection";
import { StrengthsSection } from "./sections/StrengthsSection";
import { SupportNeedsSection } from "./sections/SupportNeedsSection";
import { StrategiesSection } from "./sections/StrategiesSection";
import { GoalsSection } from "./sections/GoalsSection";
import { EvidenceSection } from "./sections/EvidenceSection";
import { MissedInputsSection } from "./sections/MissedInputsSection";
import { InternalNotesSection } from "./sections/InternalNotesSection";
import { ClinicalSummarySection } from "./sections/ClinicalSummarySection";

export function ObservationMainContent() {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 lg:max-w-4xl mx-auto space-y-10 scroll-smooth pb-24">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Observation Report</h1>
        <p className="text-sm font-medium text-slate-500 mt-1">Compile and synthesize sessions, inputs, and clinical insights.</p>
      </div>

      <ChildSnapshotSection />
      <ParentInputsSection />
      <SchoolInputsSection />
      <StrengthsSection />
      <EnvironmentsSection />
      <SupportNeedsSection />
      <StrategiesSection />
      <GoalsSection />
      <EvidenceSection />
      <InternalNotesSection />
      <MissedInputsSection />
      <ClinicalSummarySection />
    </div>
  );
}
