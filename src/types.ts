export type Environment = 'Classroom' | 'Playground' | 'Therapy Room' | 'Home' | 'Community';
export type SupportLevel = 'Independent' | 'Occasional' | 'Moderate' | 'Substantial' | 'Full Support';
export type GoalStatus = 'Draft' | 'Active' | 'Achieved' | 'Paused' | 'Requires Review';
export type ReportStatus = 'Draft' | 'Review' | 'Approved';

// 1. Core Entities
export interface Child {
  id: string;
  name: string;
  dob: string;
  diagnoses?: string[];
}

export interface Case {
  id: string;
  childId: string;
  caseManagerId: string;
  therapists: string[];
  status: 'Active' | 'Discharged';
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  effectivenessRating: number; // 1-5 scale to learn from data
  environments: Environment[];
}

export interface Goal {
  id: string;
  iepCycleId: string;
  title: string;
  domain: string;
  baseline: string;
  outcomeStatement: string;
  successIndicators: string[];
  targetEnvironment: Environment[];
  status: GoalStatus;
  linkedStrategies: string[]; // Strategy IDs
}

// 2. Evidence Storage
export interface ObservationEntry {
  id: string;
  childId: string;
  date: string;
  environment: Environment;
  notes: string;
  supportLevel: SupportLevel;
}

export interface SessionLog {
  id: string;
  childId: string;
  therapistId: string;
  date: string;
  durationMinutes: number;
  environment: Environment;
  goalsAddressed: {
    goalId: string;
    supportLevel: SupportLevel;
    promptCount: number;
    notes: string;
  }[];
  therapistNotes: string;
  parentFeedback?: string;
  strategiesUsed: {
    strategyId: string;
    wasEffective: boolean;
  }[];
}

// 3. Reporting Cycles
export interface IEPCycle {
  id: string;
  childId: string;
  startDate: string;
  endDate: string;
  goals: Goal[];
  status: ReportStatus;
}

export interface ObservationReport {
  id: string;
  observationCycleId: string;
  childId: string;
  entries: string[]; // ObservationEntry IDs
  generatedSummaryId: string; // Cache ID
  status: ReportStatus;
}

export interface MonthlyReport {
  id: string;
  childId: string;
  month: string;
  year: number;
  sessionIds: string[]; // Session IDs compiled
  generatedSummaryId: string; // Cache ID
  status: ReportStatus;
}

export interface ProgressReport {
  id: string;
  childId: string;
  startDate: string;
  endDate: string;
  reportType: 'Six-Month' | 'End-of-IEP' | 'Transition' | 'Closure';
  iepCycleIds: string[];
  sessionIds: string[];
  generatedSummaryId: string; // Cache ID
  status: ReportStatus;
}

// 4. AI & Insights Cache (Optimized Storage)
export interface AICacheEntry {
  id: string;
  sourceDataHash: string; // Hash of the underlying evidence (e.g. session logs) to avoid re-running
  modelVersion: string;
  timestamp: string;
  insightType: 'ObservationSummary' | 'MonthlySummary' | 'ProgressSynthesis' | 'GoalRecommendation';
  content: any; // The JSON or markdown output of the AI
  therapistOverrides?: any; // Edits made by the clinician over the AI output
}
