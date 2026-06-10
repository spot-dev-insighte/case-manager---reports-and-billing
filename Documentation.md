# Insighte Platform: Clinical Architecture & CTO Refactoring Guide

## 1. Unified Data Schema (`src/types.ts`)
We have defined a single source-of-truth schema located in `src/types.ts`.
This ensures terminology (like Environment, Support Level) is strictly typed and universally referenced across the Monthly Reports, Progress Reports, Case Files, and IEP components.

- **`Child` & `Case`**: Represents demographic and case enrollment details.
- **`SessionLog` & `ObservationEntry`**: The raw *Evidence Storage* atoms. These store references (`goalId`, `strategyId`) instead of duplicating text.
- **`MonthlyReport` & `ProgressReport`**: Document arrays of `sessionIds` and reference generated AI artifacts via `generatedSummaryId`. By decoupling raw data from AI artifacts, we maintain data lineage.

## 2. Connected Report Workflow & Versioning
Data flows sequentially:
**Observation/Setup -> `IEPCycle` (Goals) -> `SessionLog` (Evidence collection) -> `MonthlyReport` -> `ProgressReport`**

- Reports explicitly maintain `ReportStatus: 'Draft' | 'Review' | 'Approved'`. Once a report transitions past 'Draft', its core fields must lock down.
- Reports do not pull in and duplicate text; they aggregate arrays of `sessionIds` and use the Clinical Engine to synthesize insights at render time or generation time. 

## 3. Storage Optimization & Insight Caching (`src/lib/clinical-engine.ts`)
To prevent expensive and redundant AI context recalculation:
- **`ClinicalEngine.generateInsightsWithCache`**: AI calls compute a hash (`sourceDataHash`) of all input material (e.g. 5 session logs + 2 goals). 
- If the hash matches an existing `AICacheEntry`, the system bypasses the LLM call and returns the pre-calculated clinical narrative.
- All AI artifacts contain metadata: `timestamp`, `modelVersion`, and crucially, `therapistOverrides` (where users make final edits inside the AI draft).

## 4. Reinforcement Engine (Strategy Effectiveness)
`ClinicalEngine.updateStrategyEffectiveness` automatically ingests boolean feedback metrics (`wasEffective` fields) tracked inside every session log for every Strategy used. Over time, strategies are assigned an empirical `effectivenessRating` (1.0 to 5.0) which the AI will query before rendering recommendations in the 'Clinical Brain' panels.

## 5. Gap Detection & Alerts
`ClinicalEngine.detectGaps` scans recent raw session logs against active goals documented in the current IEP. If it calculates that a goal has 0 documented prompt trials or mentions in the last N sessions, it emits a `high` severity gap alert to prompt the therapist on the Dashboard or during Report formulation.

## 6. Next Implementation Steps (React Layer)
- Refactor existing mock UI (`src/components/iep/goals/GoalBuilder.tsx`, etc.) to cast component states strictly to the `Goal` interface imported from `src/types.ts`.
- Wire `detectGaps()` to a notification bell in `TopHeader.tsx`.
- Standardize all AI generation buttons across the app to invoke `generateInsightsWithCache`.
