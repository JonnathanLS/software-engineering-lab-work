import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Skill } from '../model-interfaces/skill';
import { APIService } from '../api/api.service';
import { toggleDisabledInputsAndSelect } from '../utils/utils';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillForm: FormGroup;
  skills: Skill[] = [];
  showButtonUpdateSkillID: string = null;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.apiService.get.all_skills().subscribe((skills: Skill[]) => this.skills = skills);
    const newSkill: Skill = { _id: null, name: '', description: '' };
    this.skillForm = this.formBuilder.group(newSkill);
  }
  create(skill: Skill){
    this.apiService.post.skill(skill).subscribe(
      (skillCreated: Skill) => {
        this.skills.push(skillCreated);
        this.skillForm.reset();
      },
      error => console.log(error)
    );
  }
  delete(skill: Skill){
    this.apiService.delete.skill(skill._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Competência deletada com sucesso');
          this.skills = this.skills.filter(j => !(j._id === skill._id));
        }
      },
      error => console.warn(error)
    );
  }
  edit(skill: Skill){
    toggleDisabledInputsAndSelect(skill._id);
    this.showButtonUpdateSkillID = skill._id;
  }
  update(skill: Skill){
    this.apiService.update.skill(skill).subscribe(
      (skillUpdated: Skill) => {
        toggleDisabledInputsAndSelect(skillUpdated._id);
        this.showButtonUpdateSkillID = null;
      },
      error => console.log(error)
    );
  }
}
