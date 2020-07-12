import { Component, OnInit, Input } from '@angular/core';
import { APIService } from 'src/app/api/api.service';
import { JobOpportunityResultPresenter, CandidateJobOpportunityResultPresenter, CandidateResultPresenter } from 'src/app/model-interfaces/result';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  jobId: string;
  jobOpportunityResult: JobOpportunityResultPresenter;
  candidates: CandidateResultPresenter[];


  panelOpenState: boolean = false;

  constructor(private apiService: APIService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = params['id']; 
   });
   debugger
    this.apiService.get.job_opportunity_result(this.jobId).subscribe(
      (jobOpportunityResult: JobOpportunityResultPresenter) => {
        this.jobOpportunityResult = jobOpportunityResult;
        this.candidates = jobOpportunityResult.candidates;
      },
			(error) => console.log(error)
		);
  }

}
