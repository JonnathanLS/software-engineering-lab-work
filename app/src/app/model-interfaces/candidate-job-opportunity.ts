import { StageEvaluator } from './stage-evaluator';

export interface CandidateJobOpportunity {
    _id: string,
    jobOpportunityId: string,
	stageEvaluatorList: StageEvaluator[]
}