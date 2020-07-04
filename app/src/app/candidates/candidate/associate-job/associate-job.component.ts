import { Component, OnInit, Input } from '@angular/core';
import { CandidatesService } from '../../candidates.service';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CandidateJobOpportunity } from 'src/app/model-interfaces/candidate-job-opportunity';
import { fbGetValue, fbSetValue } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-associate-job',
  templateUrl: './associate-job.component.html',
  styleUrls: ['./associate-job.component.css']
})
export class AssociateJobComponent implements OnInit {

  associateJobForm: FormGroup;
  selectedJob: JobOpportunity;
  @Input() candidateId: string;

  constructor(
    private formBuilder: FormBuilder,
    private candidatesService: CandidatesService,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    if (!this.candidateId)
      throw new Error('AssociateJobComponent : there are properties that have not been loaded.');
    const associate: CandidateJobOpportunity = { _id: null, jobOpportunityId: '', stageEvaluatorList: null };
    this.associateJobForm = this.formBuilder.group(associate);
    fbSetValue(this.associateJobForm, 'stageEvaluatorList', []);
  }
  selectJob = () => {
    let jobResult: JobOpportunity;
    this.candidatesService.jobs.map(job =>
      job._id === this.associateJobForm.get('jobOpportunityId').value ? jobResult = job : null);
    this.selectedJob = jobResult;
  }
  jobs = () => this.candidatesService.jobs;

  associate(data: CandidateJobOpportunity) {
    this.apiService.associate_candidate_with_job_opportunity(this.candidateId, data).subscribe(
      (associateCreated: CandidateJobOpportunity) => {
        console.log(associateCreated);
        this.associateJobForm.reset();
      },
      error => console.error(error)
    );
  }
}
