import { Component, OnInit, Input } from '@angular/core';
import { Evaluation } from 'src/app/model-interfaces/evaluation';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { Stage } from 'src/app/model-interfaces/stage';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation;
  candidate: Candidate;
  job: JobOpportunity;
  stage: Stage;
  
  panelOpenState: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('EvaluationComponent', this.evaluation)
    this.candidate = this.evaluation.candidate;
    this.job = this.evaluation.jobOpportunity;
    this.stage = this.evaluation.stage;    
  }
}
