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
  skills: Skill[] = [];
  filteredSkills: Skill[];
  skillStatusSelected: string =  "Ativas";
  constructor( private apiService: APIService ) { }

  ngOnInit(): void {
    this.apiService.get.all_skills().subscribe((skills: Skill[]) => {
      this.skills = skills;
      this.filterSkills();
    });
  }

  addSkill = (skill: Skill) => this.skills.push(skill); 
   
  filterSkills = () => {
    this.filteredSkills = this.skills.filter(skill => skill.deleted === (this.skillStatusSelected === 'Inativas'));
  }
}
