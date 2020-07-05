import { Component, OnInit, Input } from '@angular/core';
import { Stage } from 'src/app/model-interfaces/stage';
import { CandidatesService } from 'src/app/candidates/candidates.service';
import { StageEvaluator } from 'src/app/model-interfaces/stage-evaluator';
import { fbGetValue, fbSetValue } from 'src/app/utils/utils';
import { FormGroup } from '@angular/forms';
import { Evaluate } from 'src/app/model-interfaces/evaluate';
import { User } from 'src/app/model-interfaces/user';

@Component({
  selector: 'app-stage-evaluator',
  templateUrl: './stage-evaluator.component.html',
  styleUrls: ['./stage-evaluator.component.css']
})
export class StageEvaluatorComponent implements OnInit {

  @Input() stage: Stage;
  @Input() form: FormGroup;
  evaluatorSelected: string;
  evaluators: User[];
  constructor(
    private candidatesService: CandidatesService
  ) { }

  ngOnInit(): void {
    if (!this.stage || !this.form)
      throw new Error('StageEvaluatorComponent : there are properties that have not been loaded.');
    this.candidatesService.reloadJobs();
    this.candidatesService.reloadEvaluators();
    this.evaluatorSelected = null;
    this.evaluators = this.getEvaluators();
  }
  getEvaluators = () => this.candidatesService.evaluators;
  addStageEvaluator = (stageId: string) => {
    const key: string = 'stageEvaluatorList';
    let currentValues: StageEvaluator[] = fbGetValue(this.form, key);
    if (this.evaluatorSelected) {
      const newStageEvaluator: StageEvaluator = { stage: stageId, evaluator: this.evaluatorSelected };
      currentValues = currentValues.filter(stageEvaluator => stageEvaluator.stage !== stageId);
      fbSetValue(this.form, key, [...currentValues, newStageEvaluator]);
    }
  }
}
