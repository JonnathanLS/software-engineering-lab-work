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
  showButtonUpdateJobID: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.departments.get.all().subscribe((departments: string[]) => this.departments = departments);
    const job: JobOpportunity = { _id: null, name: '', stages: null, department: '', description: '' };
    this.jobForm = this.formBuilder.group(job);
    this.apiService.jobOpportunities.get.all().subscribe((jobs: JobOpportunity[]) => this.jobs = jobs);
  }
  create(job: JobOpportunity) {
    this.apiService.jobOpportunities.create(job).subscribe(
      (jobCreated: JobOpportunity) => {
        this.jobs.push(jobCreated);
        this.jobForm.reset();
      },
      error => console.log(error)
    );
  }
  delete(job: JobOpportunity){
    debugger
    this.apiService.jobOpportunities.delete(job._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('vaga deletada com sucesso');
          this.jobs = this.jobs.filter(j => !(j._id === job._id));
        }
      },
      error => console.warn(error)
    );
  }
  edit(job: JobOpportunity){
    this.toggleDisabledInputsAndSelect(job);
    this.showButtonUpdateJobID = job._id;
  }
  update(job: JobOpportunity){
    this.apiService.jobOpportunities.update(job).subscribe(
      response => {
        if(response.status === 200) {
          console.log(response.body);
          this.toggleDisabledInputsAndSelect(job);
          this.showButtonUpdateJobID = null;
        }
      },
      error => console.log(error)
    );
  }
  toggleDisabledInputsAndSelect(job: JobOpportunity){
    const jobElement = document.getElementById(job._id);
    jobElement.childNodes.forEach(node => {
      if(node.nodeName === 'INPUT' || node.nodeName === 'SELECT')
        node['disabled'] = !node['disabled'];
    });
  }
  // updateStages = ($event) => this.properties.stages.push($event);
}
