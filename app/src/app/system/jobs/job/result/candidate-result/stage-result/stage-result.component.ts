import { Component, OnInit, Input } from '@angular/core';
import { StageResultPresenter, StageEvaluatorResultPresenter } from 'src/app/model-interfaces/result';

@Component({
  selector: 'app-stage-result',
  templateUrl: './stage-result.component.html',
  styleUrls: ['./stage-result.component.css']
})
export class StageResultComponent implements OnInit {

  @Input() stage: StageEvaluatorResultPresenter;
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
