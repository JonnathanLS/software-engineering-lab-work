import { Stage } from './stage';
import { JobOpportunity } from './job-opportunity';

export interface Evaluation {
    _id: string,
    stage: Stage,
    evaluator: string,
    jobOpportunity?: JobOpportunity
}