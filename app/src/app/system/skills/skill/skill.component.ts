import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { APIService } from 'src/app/api/api.service';
import { Skill } from 'src/app/model-interfaces/skill';
import { NotifierService } from 'src/app/utils/notifier/notifier.service';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;
  @Output() skillUpdate = new EventEmitter<string>();
  uploadSkill: boolean = false;
  panelOpenState: boolean = false;

  constructor( 
    private apiService: APIService,
    private notifierService: NotifierService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('SkillComponent', this.skill)
  }

  delete(){
    this.apiService.delete.skill(this.skill._id).subscribe(
      response => {
        if (response.status === 204) {
          this.notifierService.success('Competência Desativada com Sucesso');
          this.skill.deleted = true;
          this.skillUpdate.emit(this.skill._id)
        }
      },
      error => console.warn(error)
    );
  }

  activate(){
    debugger
    this.apiService.activate.skill(this.skill._id).subscribe(
      response => {
        if (response) {
          this.notifierService.success('Competência Ativada com Sucesso');
          this.skill.deleted = false;
          this.skillUpdate.emit(this.skill._id)
        }
      },
      error => console.error(error)
    );
  }
  
  edit(){
    toggleDisabledInputsAndSelect(this.skill._id);
    this.uploadSkill = true;
  }

  update(){
    this.apiService.update.skill(this.skill).subscribe(
      (skillUpdated: Skill) => {
        this.notifierService.success('Competência Atualizada com Sucesso');
        toggleDisabledInputsAndSelect(skillUpdated._id);
        this.uploadSkill = false;
      },
      error => console.log(error)
    );
  }
}
