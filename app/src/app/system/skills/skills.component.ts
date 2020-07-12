import { Component, OnInit } from '@angular/core';
import { Skill } from '../../model-interfaces/skill';
import { APIService } from '../../api/api.service';

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
    this.apiService.get.skills().subscribe((skills: Skill[]) => {
      this.skills = skills;
      this.filterSkills();
    });
  }

  addSkill = (skill: Skill) => {
    this.skills.push(skill); 
    this.filterSkills();
  }
   
  filterSkills = () => {
    this.filteredSkills = this.skills.filter(skill => skill.deleted === (this.skillStatusSelected === 'Inativas')).reverse();
  }
}
