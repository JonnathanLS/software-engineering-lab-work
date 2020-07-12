import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Evaluation } from 'src/app/model-interfaces/evaluation';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { Stage } from 'src/app/model-interfaces/stage';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation;
  @Output() evaluationDoneParent = new EventEmitter<string>();
  candidate: Candidate;
  job: JobOpportunity;
  stage: Stage;
  
  panelOpenState: boolean = false;
  
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('EvaluationComponent', this.evaluation)
    this.candidate = this.evaluation.candidate;
    this.job = this.evaluation.jobOpportunity;
    this.stage = this.evaluation.stage;    
  }

  receivedEvaluationDone = (id: string) => this.emitEvaluationDoneParent(id);

  emitEvaluationDoneParent = (id: string) => this.evaluationDoneParent.emit(id);

  downloadCurriculum = () => {
    this.apiService.get.candidate_curriculum(this.candidate._id).subscribe(
      curriculum => {
        console.log("Download do currículo do candidato concluído.", curriculum);
        const url = window.URL.createObjectURL(new Blob([curriculum as BlobPart], { type: 'application/pdf' }));
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.setAttribute('style', 'display: none');
        link.href = url;
        link.download = `Curriculo-${this.candidate.name}.pdf`;
        link.click();
      },
      error => console.error(error)
    );
  }
}
