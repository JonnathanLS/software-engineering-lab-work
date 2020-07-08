import { Component, OnInit } from '@angular/core';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { APIService } from '../api/api.service';
import { Skill } from '../model-interfaces/skill';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  departments: string[] = [];
  jobs: JobOpportunity[] = [];
  skills: Skill[] = []

  constructor( private apiService: APIService ) { }

  ngOnInit(): void {
    this.apiService.get.departments().subscribe((departments: string[]) => this.departments = departments);
    this.apiService.get.all_skills().subscribe((skills: Skill[]) => this.skills = skills);
    this.apiService.get.job_opportunities().subscribe((jobs: JobOpportunity[]) => this.jobs = jobs);
  }

  addJob = (job: JobOpportunity) => this.jobs.push(job);
  removeJob = (id: string) => this.jobs = this.jobs.filter(job => !(job._id === id));

}
