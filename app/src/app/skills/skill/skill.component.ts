import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { APIService } from 'src/app/api/api.service';
import { Skill } from 'src/app/model-interfaces/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;
  @Output() skillDeleted = new EventEmitter<string>();
  uploadSkill: boolean = false;
  panelOpenState: boolean = false;

  constructor( private apiService: APIService ) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('SkillComponent', this.skill)
  }

  delete(){
    this.apiService.delete.skill(this.skill._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Competência deletada com sucesso');
          this.skillDeleted.emit(this.skill._id)
        }
      },
      error => console.warn(error)
    );
  }
  edit(){
    toggleDisabledInputsAndSelect(this.skill._id);
    this.uploadSkill = true;
  }
  update(){
    this.apiService.update.skill(this.skill).subscribe(
      (skillUpdated: Skill) => {
        toggleDisabledInputsAndSelect(skillUpdated._id);
        this.uploadSkill = false;
      },
      error => console.log(error)
    );
  }
}
