import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { APIService } from '../api/api.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  jobForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    let properties: JobOpportunity = { id: '', name: '', stages: [], department: '', description: '' }
    this.jobForm = this.formBuilder.group(properties);
  }
  onSubmit(jobData: JobOpportunity) {
    this.apiService.jobOpportunities.create(jobData).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
