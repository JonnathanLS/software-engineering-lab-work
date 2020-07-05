import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CandidatesService } from '../../candidates.service';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CandidateJobOpportunity } from 'src/app/model-interfaces/candidate-job-opportunity';
import { fbGetValue, fbSetValue } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';
import { Candidate } from 'src/app/model-interfaces/candidate';

@Component({
  selector: 'app-associate-job',
  templateUrl: './associate-job.component.html',
  styleUrls: ['./associate-job.component.css']
})
export class AssociateJobComponent implements OnInit {

  associateJobForm: FormGroup;
  selectedJob: JobOpportunity;
  jobs: JobOpportunity[];
  @Input() candidate: Candidate;
  @Output() associatedJobs = new EventEmitter<CandidateJobOpportunity[]>();

  constructor(
    private formBuilder: FormBuilder,
    private candidatesService: CandidatesService,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    if (!this.candidate)
      throw new Error('AssociateJobComponent : there are properties that have not been loaded.');
    const associate: CandidateJobOpportunity = { _id: null, jobOpportunityId: '', stageEvaluatorList: null, jobOpportunity: null };
    this.associateJobForm = this.formBuilder.group(associate);
    fbSetValue(this.associateJobForm, 'stageEvaluatorList', []);
    this.jobs = this.jobsToBeDisplayed();
  }
  selectJob = () => {
    let jobResult: JobOpportunity;
    this.candidatesService.jobs.map(job =>
      job._id === this.associateJobForm.get('jobOpportunityId').value ? jobResult = job : null);
    this.selectedJob = jobResult;
  }
  jobsToBeDisplayed = () => {
    const associatedJobsId: string[] = [];
    this.candidate.jobOpportunities.map(associate => associatedJobsId.push(associate.jobOpportunity._id));
    return this.candidatesService.jobs.filter(job => !associatedJobsId.includes(job._id));
  }

  associate(associatedJob: CandidateJobOpportunity) {
    if (!associatedJob.jobOpportunityId) throw new Error("Select a job opportunity to link to the candidate.");
    const job: JobOpportunity =
      this.candidatesService.jobs.filter(job => job._id === associatedJob.jobOpportunityId)[0];
    const stagesInvalid = !associatedJob.stageEvaluatorList.length || associatedJob.stageEvaluatorList.length !== job.stages.length;
    if (stagesInvalid) throw new Error("To associate a job opportunity to the candidate, register the evaluator for all steps.")
    this.apiService.associate_candidate_with_job_opportunity(this.candidate._id, associatedJob).subscribe(
      (associatedJobs: CandidateJobOpportunity[]) => {
        console.log(associatedJobs)
        this.jobs = this.jobsToBeDisplayed();
        this.emitNewAssociatedJobs(associatedJobs);
        this.associateJobForm.reset();
      },
      error => console.error(error)
    );
  }
  private emitNewAssociatedJobs = (associatedJobs: CandidateJobOpportunity[]) =>
    this.associatedJobs.emit(associatedJobs);
}
