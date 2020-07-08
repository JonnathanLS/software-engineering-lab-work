import { User } from './user';

export interface StageEvaluator {
    _id: string,
    done: boolean,
    stage: string,
    evaluator: string
}