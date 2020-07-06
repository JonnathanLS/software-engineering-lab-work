import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stage } from 'src/app/model-interfaces/stage';
import { FormControl } from '@angular/forms';
import { propertiesInputAngularInvalid, toggleDisabledInputsAndSelect } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';
import { Skill } from 'src/app/model-interfaces/skill';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input() stage: Stage;
  @Input() skills: Skill[];
  updateStage: boolean = false;
  panelOpenState = false;

  @Output() stageDeleted = new EventEmitter<string>();
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('StageComponent', this.stage, this.skills);
  }

  delete() {
    this.apiService.delete.stage(this.stage._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Etapa deletada com sucesso');
          this.stageDeleted.emit(this.stage._id);
        }
      },
      error => console.warn(error)
    );
  }
  edit() {
    toggleDisabledInputsAndSelect(this.stage._id);
    this.updateStage = true;
  }
  update() {
    this.apiService.update.stage(this.stage).subscribe(
      (stageUpdated: Stage) => {
        this.stage = stageUpdated;
        toggleDisabledInputsAndSelect(this.stage._id);
        this.updateStage = false;
      },
      error => console.log(error)
    );
  }

}
