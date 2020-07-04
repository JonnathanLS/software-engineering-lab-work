import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { APIService } from '../api/api.service';
import { toggleDisabledInputsAndSelect } from '../utils/utils';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobForm: FormGroup;
  departments: string[] = [];
  jobs: JobOpportunity[] = [];
  showButtonUpdateJobID: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.get.departments().subscribe((departments: string[]) => this.departments = departments);
    const job: JobOpportunity = { _id: null, name: '', stages: null, department: '', description: '' };
    this.jobForm = this.formBuilder.group(job);
    this.apiService.get.job_opportunities().subscribe((jobs: JobOpportunity[]) => this.jobs = jobs);
  }
  create(job: JobOpportunity) {
    this.apiService.post.job_opportunity(job).subscribe(
      (jobCreated: JobOpportunity) => {
        this.jobs.push(jobCreated);
        this.jobForm.reset();
      },
      error => console.log(error)
    );
  }
  delete(job: JobOpportunity) {
    debugger
    this.apiService.delete.job_opportunity(job._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Vaga deletada com sucesso');
          this.jobs = this.jobs.filter(j => !(j._id === job._id));
        }
      },
      error => console.warn(error)
    );
  }
  edit(job: JobOpportunity) {
    toggleDisabledInputsAndSelect(job._id);
    this.showButtonUpdateJobID = job._id;
  }
  update(job: JobOpportunity) {
    this.apiService.update.job_opportunity(job).subscribe(
      jobUpdated => {
        toggleDisabledInputsAndSelect(job._id);
        this.showButtonUpdateJobID = null;
      },
      error => console.log(error)
    );
  }
}
