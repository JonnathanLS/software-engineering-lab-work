import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CandidateJobOpportunity } from 'src/app/model-interfaces/candidate-job-opportunity';
import { fbGetValue, fbSetValue, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { JobService } from 'src/app/system/jobs/job.service';
import { NotifierService } from 'src/app/utils/notifier/notifier.service';

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
    private apiService: APIService,
    private jobService: JobService,
    private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    
    propertiesInputAngularInvalid('AssociateJobComponent', this.candidate)
    const associate: CandidateJobOpportunity = { _id: null, stageEvaluatorList: null, jobOpportunityId: null, jobOpportunity: null };
    this.associateJobForm = this.formBuilder.group(associate);
    fbSetValue(this.associateJobForm, 'stageEvaluatorList', []);
    this.jobs = this.jobService.jobs;
    this.jobsToBeDisplayed();
  }
  selectJob = () => {
    let jobResult: JobOpportunity;
    this.jobs.map(job => job._id === this.associateJobForm.get('jobOpportunityId').value ? jobResult = job : null);
    this.selectedJob = jobResult;
  }
  jobsToBeDisplayed = () => {
    const associatedJobsId: string[] = [];
    this.candidate.jobOpportunities.map(associate => associatedJobsId.push(associate.jobOpportunity._id));
    this.jobs = this.jobs.filter(job => !associatedJobsId.includes(job._id) && !job.deleted && !job.finished);
  }

  associate(associatedJob: CandidateJobOpportunity) {

    if (!associatedJob.jobOpportunityId) {
      const message = 'Select a job opportunity to link to the candidate.'
      this.notifierService.warning(message);
      throw new Error(message)
    }
    const job: JobOpportunity = this.jobs.filter(job => job._id === associatedJob.jobOpportunityId)[0];
    
    const stagesInvalid = !associatedJob.stageEvaluatorList.length || associatedJob.stageEvaluatorList.length !== job.stages.length;
    
    if (stagesInvalid) {
      const message = 'To associate a job opportunity to the candidate, register the evaluator for all steps.'
      this.notifierService.warning(message);
      throw new Error(message)
    }
    this.apiService.associate_candidate_with_job_opportunity(this.candidate._id, associatedJob).subscribe(
      (associatedJobs: CandidateJobOpportunity[]) => {
        this.jobsToBeDisplayed();
        this.notifierService.success('Candidato associado a vaga com Sucesso.')
        this.associatedJobs.emit(associatedJobs);
        this.associateJobForm.reset();
      },
      error => console.error(error)
    );
  }
}
