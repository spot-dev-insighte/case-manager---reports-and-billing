import { SessionLog, Goal, AICacheEntry, Strategy } from '../types';

/**
 * Core Engine for Clinical Insights, Gap Detection, and AI Caching
 */

// Simple hash function for caching (mock)
function hashData(data: any): string {
  return JSON.stringify(data).length.toString() + "hash";
}

// Simulated Cache Store
const aiCache: Record<string, AICacheEntry> = {};

export const ClinicalEngine = {
  /**
   * 5. Gap detection and feedback loops
   * Evaluates sessions against active goals to detect stagnation or lack of evidence.
   */
  detectGaps(sessions: SessionLog[], activeGoals: Goal[]) {
    const gaps: { goalId: string; issue: string; severity: 'high' | 'medium' }[] = [];
    const goalMentions = new Map<string, number>();

    // Analyze session data
    sessions.forEach(session => {
      session.goalsAddressed.forEach(g => {
        goalMentions.set(g.goalId, (goalMentions.get(g.goalId) || 0) + 1);
      });
    });

    // Detect missing evidence
    activeGoals.forEach(goal => {
      const mentions = goalMentions.get(goal.id) || 0;
      if (mentions === 0) {
        gaps.push({ goalId: goal.id, issue: 'No evidence recorded in recent sessions.', severity: 'high' });
      } else if (mentions < 2) {
        gaps.push({ goalId: goal.id, issue: 'Limited evidence. Consider targeting more frequently.', severity: 'medium' });
      }
    });

    return gaps;
  },

  /**
   * 3. Optimize storage of visuals and clinical insights
   * Generates or retrieves cached AI insights based on unchanging source data.
   */
  async generateInsightsWithCache(sourceData: any, type: AICacheEntry['insightType'], aiCallFn: () => Promise<any>): Promise<AICacheEntry> {
    const dataHash = hashData(sourceData);
    const cacheKey = `${type}_${dataHash}`;

    // Return cached insight if source data hasn't changed
    if (aiCache[cacheKey]) {
      console.log(`[Cache Hit] Returning existing insight for ${type}`);
      return aiCache[cacheKey];
    }

    console.log(`[Cache Miss] Computing new insight for ${type}`);
    const content = await aiCallFn();

    const newEntry: AICacheEntry = {
      id: `ai_${Date.now()}`,
      sourceDataHash: dataHash,
      modelVersion: 'gemini-3.1-pro',
      timestamp: new Date().toISOString(),
      insightType: type,
      content,
    };

    aiCache[cacheKey] = newEntry;
    return newEntry;
  },

  /**
   * 4. Refine the AI & clinical insights engine
   * Learns from strategy effectiveness mapped in Session Logs
   */
  updateStrategyEffectiveness(sessions: SessionLog[], strategies: Strategy[]) {
    const strategyStats = new Map<string, { used: number; effective: number }>();

    sessions.forEach(session => {
      session.strategiesUsed.forEach(s => {
        const stats = strategyStats.get(s.strategyId) || { used: 0, effective: 0 };
        stats.used += 1;
        if (s.wasEffective) stats.effective += 1;
        strategyStats.set(s.strategyId, stats);
      });
    });

    // We'd ideally store this back into a DB, here we mock the adjustment
    return strategies.map(strategy => {
      const stats = strategyStats.get(strategy.id);
      if (stats && stats.used > 0) {
        const newRating = (stats.effective / stats.used) * 5; 
        return { ...strategy, effectivenessRating: Number(newRating.toFixed(1)) };
      }
      return strategy;
    });
  }
};
