import { StageEvaluator } from './stage-evaluator';
import { JobOpportunity } from './job-opportunity';

export interface CandidateJobOpportunity {
    _id: string,
    jobOpportunityId: string,
    jobOpportunity: JobOpportunity,
    stageEvaluatorList: StageEvaluator[]
}