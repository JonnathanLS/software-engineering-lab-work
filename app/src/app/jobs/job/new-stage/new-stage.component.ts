import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/model-interfaces/skill';
import { FormGroup, FormBuilder } from '@angular/forms';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { Stage } from 'src/app/model-interfaces/stage';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.css']
})
export class NewStageComponent implements OnInit {
  stageForm: FormGroup;
  @Input() skills: Skill[] = [];
  @Input() jobID: string;
  @Output() stageCreated = new EventEmitter<Stage>();

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('NewStageComponent', this.skills, this.jobID);
    const stage: Stage = { _id: null, name: '', description: '', skills: null };
    this.stageForm = this.formBuilder.group(stage);
  }
  add(stageData: Stage) {
    this.apiService.add_estages_to_job_opportunity(stageData, this.jobID).subscribe(
      (jobStages: Stage) => {
        this.stageCreated.emit(jobStages);
        this.stageForm.reset();
      },
      error => console.log(error)
    );

  }
}
