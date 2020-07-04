import { Stage } from './stage';

export interface Evaluation {
    _id: string,
    stage: Stage,
    evaluator: string,    
}