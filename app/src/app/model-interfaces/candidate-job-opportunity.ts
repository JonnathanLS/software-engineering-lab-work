import { StageEvaluator } from './stage-evaluator';
import { JobOpportunity } from './job-opportunity';

export interface CandidateJobOpportunity {
    _id: string,
    jobOpportunity: JobOpportunity,
    jobOpportunityId: string;
    stageEvaluatorList: StageEvaluator[]
}