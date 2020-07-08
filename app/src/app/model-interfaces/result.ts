export interface JobOpportunityResultPresenter {
  _id: string;
  name: string;
  department: string;
  description: string;
  candidates: CandidateResultPresenter[];
}

export interface CandidateResultPresenter {
  _id: string;
  name: string;
  cpf: string;
  address: string;
  links: string[];
  jobOpportunities: CandidateJobOpportunityResultPresenter;
}

export interface CandidateJobOpportunityResultPresenter {
  stageEvaluatorList: StageEvaluatorResultPresenter[];
}

export interface StageEvaluatorResultPresenter {
  stage: StageResultPresenter;
  done: boolean;
  skillEvaluations: SkillScoreResultPresenter[];
}

export interface StageResultPresenter {
  name: string;
  description: string;
}

export interface SkillScoreResultPresenter {
  skill: SkillResultPresenter;
  score: number;
}

export interface SkillResultPresenter {
  name: string;
  description: string;
}
