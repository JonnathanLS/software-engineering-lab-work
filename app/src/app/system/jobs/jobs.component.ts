import { Component, OnInit } from '@angular/core';
import { JobOpportunity } from '../../model-interfaces/job-opportunity';
import { APIService } from '../../api/api.service';
import { Skill } from '../../model-interfaces/skill';
import { JobService } from './job.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  skills: Skill[] = [];
  departments: string[] = [];
  jobs: JobOpportunity[] = [];
  filteredJobs: JobOpportunity[] = [];
  jobStatusSelected: string = 'Ativas';

  constructor( 
    private apiService: APIService,
    private jobService: JobService
     ) { }

  ngOnInit(): void {
    this.apiService.get.departments().subscribe((departments: string[]) => this.departments = departments);
    this.apiService.get.skills().subscribe((skills: Skill[]) => this.skills = skills);
    this.apiService.get.job_opportunities().subscribe((jobs: JobOpportunity[]) => {
      this.jobs = jobs;
      this.jobService.setJobs(jobs);
      this.filterJobs();
    });
  }

  
  addJob = (job: JobOpportunity) => {
    this.jobs.push(job);
    this.filterJobs();
  }
  filterJobs(){
    if (this.jobStatusSelected === 'Encerradas') this.filteredJobs = this.jobs.filter(job => job.finished).reverse();
    else this.filteredJobs = this.jobs.filter(job => job.deleted === (this.jobStatusSelected === 'Inativas') && !job.finished).reverse();
    this.jobService.setJobs(this.jobs);
  }

}
