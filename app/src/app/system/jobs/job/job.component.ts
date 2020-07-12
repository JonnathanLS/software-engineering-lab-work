import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { APIService } from 'src/app/api/api.service';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { Skill } from 'src/app/model-interfaces/skill';
import { Stage } from 'src/app/model-interfaces/stage';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/utils/notifier/notifier.service';
import { JobService } from '../job.service';

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
  @Output() jobUpdate = new EventEmitter<null>();
  updateJob: boolean = false;
  displayContainerNewStage: boolean = false;
  textButtonNewStage: string = TXT_NEW_STAGE.Show;

  constructor(
    private apiService: APIService,
    private router: Router,
    private notifierService: NotifierService,
    private jobService: JobService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid("JobComponent", this.job, this.departments, this.skills);
  }

  delete() {
    this.apiService.delete.job_opportunity(this.job._id).subscribe(
      response => {
        if (response.status === 204) {
          this.notifierService.success('Vaga Desativada com Sucesso');
          this.job.deleted = true;
          this.jobUpdate.emit();
        }
      },
      error => console.warn(error)
    );
  }
  activate(){
    this.apiService.activate.job(this.job._id).subscribe(
      response => {
        if (response) {
          this.notifierService.success('Vaga Reativada com Sucesso');
          this.job.deleted = false;
          this.jobUpdate.emit()
        }
      },
      error => console.error(error)
    );
  }
  edit() {
    toggleDisabledInputsAndSelect(this.job._id);
    this.updateJob = true;
  }
  update() {
    this.apiService.update.job_opportunity(this.job).subscribe(
      (jobUpdated: JobOpportunity) => {
        this.notifierService.success('Vaga Atualizada com Sucesso');
        toggleDisabledInputsAndSelect(jobUpdated._id);
        this.updateJob = false;
      },
      error => console.log(error)
    );
  }

  toogleContainerNewStage = () => {
    this.textButtonNewStage = this.textButtonNewStage === TXT_NEW_STAGE.Show ? TXT_NEW_STAGE.Hide : TXT_NEW_STAGE.Show;
    this.displayContainerNewStage = !this.displayContainerNewStage;
  }
  addStage = (stage: Stage) => {
    this.job.stages.push(stage);
    this.toogleContainerNewStage();
  }

  seeResults() {
    this.router.navigate(['/jobs/' + this.job._id + '/results']);
  }

  finalize(){
    this.apiService.finish_job(this.job._id).subscribe(
      response => {
        if (response) {
          this.notifierService.success('Vaga Encerrada com Sucesso');
          this.job.finished = true;
          this.jobUpdate.emit()
        }
      },
      error => console.error(error)
    );
  }
}
