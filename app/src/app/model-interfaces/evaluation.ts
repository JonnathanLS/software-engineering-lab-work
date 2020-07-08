import { Stage } from './stage';
import { JobOpportunity } from './job-opportunity';
import { Candidate } from './candidate';

export interface Evaluation {
    _id: string,
    stage: Stage,
    evaluator: string,
    jobOpportunity: JobOpportunity,
    candidate: Candidate
}