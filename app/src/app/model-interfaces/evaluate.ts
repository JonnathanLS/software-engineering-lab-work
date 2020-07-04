import { SKillScore } from './skill-score';

export interface Evaluate {
    _id: string,
    stageEvaluator: string,
    skillScoreList: SKillScore[]
}