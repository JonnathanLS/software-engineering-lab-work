import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { APIService } from '../api/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobForm: FormGroup;
  departments: string[] = [];
  jobs: JobOpportunity[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.departments.get.all().subscribe((departments: string[]) => this.departments = departments);
    const job: JobOpportunity = { _id: null, name: '', stages: null, department: '', description: '' };
    this.jobForm = this.formBuilder.group(job);
    this.apiService.jobOpportunities.get.all().subscribe((jobs: JobOpportunity[]) => this.jobs = jobs);
  }
  createJob(jobData: JobOpportunity) {
    this.apiService.jobOpportunities.create(jobData).subscribe(
      (job: JobOpportunity) => {
        this.jobs.push(job);
        this.jobForm.reset();
      },
      error => console.log(error)
    );

  }
  // updateStages = ($event) => this.properties.stages.push($event);
}
