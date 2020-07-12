import { Component, OnInit, Input } from '@angular/core';
import { Stage } from 'src/app/model-interfaces/stage';
import { StageEvaluator } from 'src/app/model-interfaces/stage-evaluator';
import { fbGetValue, fbSetValue, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { FormGroup } from '@angular/forms';
import { Evaluate } from 'src/app/model-interfaces/evaluate';
import { User } from 'src/app/model-interfaces/user';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-stage-evaluator',
  templateUrl: './stage-evaluator.component.html',
  styleUrls: ['./stage-evaluator.component.css']
})
export class StageEvaluatorComponent implements OnInit {

  evaluators: User[];
  @Input() stage: Stage;
  @Input() form: FormGroup;
  evaluatorSelected: string;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('StageEvaluatorComponent', this.stage, this.form)
    this.evaluatorSelected = null;
    this.apiService.get.evaluators().subscribe(
      (evaluators: User[]) => this.evaluators = evaluators,
      error => console.log(error)
    );
  }
  addStageEvaluator = (stageId: string) => {
    const key: string = 'stageEvaluatorList';
    let currentValues: StageEvaluator[] = fbGetValue(this.form, key);
    if (this.evaluatorSelected) {
      const newStageEvaluator: StageEvaluator = { stage: stageId, evaluator: this.evaluatorSelected, done: null, _id: null };
      currentValues = currentValues.filter(stageEvaluator => stageEvaluator.stage !== stageId);
      fbSetValue(this.form, key, [...currentValues, newStageEvaluator]);
    }
  }
}
