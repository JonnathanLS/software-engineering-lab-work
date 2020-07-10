import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CandidateJobOpportunity } from 'src/app/model-interfaces/candidate-job-opportunity';
import { fbGetValue, fbSetValue, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { User } from 'src/app/model-interfaces/user';

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
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('AssociateJobComponent', this.candidate)
    const associate: CandidateJobOpportunity = { _id: null, stageEvaluatorList: null, jobOpportunityId: null, jobOpportunity: null };
    this.associateJobForm = this.formBuilder.group(associate);
    fbSetValue(this.associateJobForm, 'stageEvaluatorList', []);
    //
    
    // MODIFICAR E ALTERAR POR UM JOBSERVICE QUE ira dispor das vagas

    // this.apiService.get.job_opportunities().subscribe(
    //   (jobs: JobOpportunity[]) => {
    //     this.jobs = jobs;
    //     this.jobs = this.jobsToBeDisplayed();
    //   },
    //   error => console.error(error)
    // )
  }
  selectJob = () => {
    let jobResult: JobOpportunity;
    this.jobs.map(job =>
      job._id === this.associateJobForm.get('jobOpportunityId').value ? jobResult = job : null);
    this.selectedJob = jobResult;
  }
  jobsToBeDisplayed = () => {
    debugger
    const associatedJobsId: string[] = [];
    this.candidate.jobOpportunities.map(associate => associatedJobsId.push(associate.jobOpportunity._id));
    return this.jobs.filter(job => !associatedJobsId.includes(job._id));
  }

  associate(associatedJob: CandidateJobOpportunity) {
    debugger
    if (!associatedJob.jobOpportunityId) throw new Error("Select a job opportunity to link to the candidate.");
    const job: JobOpportunity =
      this.jobs.filter(job => job._id === associatedJob.jobOpportunityId)[0];
    const stagesInvalid = !associatedJob.stageEvaluatorList.length || associatedJob.stageEvaluatorList.length !== job.stages.length;
    if (stagesInvalid) throw new Error("To associate a job opportunity to the candidate, register the evaluator for all steps.")
    this.apiService.associate_candidate_with_job_opportunity(this.candidate._id, associatedJob).subscribe(
      (associatedJobs: CandidateJobOpportunity[]) => {
        console.log(associatedJobs)
        this.jobs = this.jobsToBeDisplayed();
        this.associatedJobs.emit(associatedJobs);
        this.associateJobForm.reset();
      },
      error => console.error(error)
    );
  }
}
