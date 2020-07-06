import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';


interface TextNewJob { Show: string, Hide: string };
const TXT_NEW_JOB: TextNewJob = { Show: 'Nova Vaga', Hide: 'Ocultar' };

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  jobForm: FormGroup;

  textButtonNewJob: string = TXT_NEW_JOB.Show;
  displayContainerNewJob: boolean = false;

  @Output() jobCreated = new EventEmitter();
  @Input() departments: string[];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('NewJobComponent', this.departments);

    const job: JobOpportunity = {
      _id: null, name: '', stages: null,
      department: '', description: ''
    };
    this.jobForm = this.formBuilder.group(job);

  }
  create(job: JobOpportunity) {
    this.apiService.post.job_opportunity(job).subscribe(
      (jobCreated: JobOpportunity) => {
        this.emitJobCreated(jobCreated);
        this.jobForm.reset();
        this.toogleContainerNewJob();
      },
      error => console.log(error)
    );
  }
  emitJobCreated = (job: JobOpportunity) => this.jobCreated.emit(job);

  toogleContainerNewJob = () => {
    this.textButtonNewJob = this.textButtonNewJob === TXT_NEW_JOB.Show ? TXT_NEW_JOB.Hide : TXT_NEW_JOB.Show;
    this.displayContainerNewJob = !this.displayContainerNewJob;
  }
}
