import { StageEvaluator } from './stage-evaluator';

export interface CandidateJobOpportunity {
    id: string,
    jobOpportunityId: string,
	stageEvaluatorList: StageEvaluator[]
}