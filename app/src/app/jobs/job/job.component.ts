import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { APIService } from 'src/app/api/api.service';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { Skill } from 'src/app/model-interfaces/skill';
import { Stage } from 'src/app/model-interfaces/stage';

interface TextNewStage { Show: string, Hide: string };
const TXT_NEW_STAGE: TextNewStage = { Show: 'Nova Etapa', Hide: 'Ocultar' };

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  panelOpenState = false;
  @Input() job: JobOpportunity;
  @Input() departments: string[];
  @Input() skills: Skill[];
  @Output() jobDeleted = new EventEmitter<string>();
  uploadJob: boolean = false;
  displayContainerNewStage: boolean = false;
  textButtonNewStage: string = TXT_NEW_STAGE.Show;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid("JobComponent", this.job, this.departments, this.skills);
  }

  delete() {
    this.apiService.delete.job_opportunity(this.job._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Vaga deletada com sucesso');
          this.emitJobDeleted(this.job._id);
        }
      },
      error => console.warn(error)
    );
  }
  edit() {
    toggleDisabledInputsAndSelect(this.job._id);
    this.uploadJob = true;
  }
  update() {
    this.apiService.update.job_opportunity(this.job).subscribe(
      (jobUpdated: JobOpportunity) => {
        toggleDisabledInputsAndSelect(jobUpdated._id);
        this.uploadJob = false;
      },
      error => console.log(error)
    );
  }
  emitJobDeleted = (id: string) => this.jobDeleted.emit(id);

  toogleContainerNewStage = () => {
    this.textButtonNewStage = this.textButtonNewStage === TXT_NEW_STAGE.Show ? TXT_NEW_STAGE.Hide : TXT_NEW_STAGE.Show;
    this.displayContainerNewStage = !this.displayContainerNewStage;
  }
  addStage = (stage: Stage) => {
    this.job.stages.push(stage);
    this.toogleContainerNewStage();
  }

}
