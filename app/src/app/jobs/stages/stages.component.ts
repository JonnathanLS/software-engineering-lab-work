import { Component, OnInit, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { Stage } from 'src/app/model-interfaces/stage';
import { Skill } from 'src/app/model-interfaces/skill';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { toggleDisabledInputsAndSelect } from 'src/app/utils/utils';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  @Input() job: JobOpportunity;
  stageForm: FormGroup;
  skills: Skill[] = [];
  showAddStage: boolean = false;
  showButtonUpdateStageID: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.apiService.get.all_skills().subscribe((skills: Skill[]) => this.skills = skills);
    const stage: Stage = { _id: null, name: '', description: '', skills: null };
    this.stageForm = this.formBuilder.group(stage); 
  }

  toggleAddStage = () => this.showAddStage = !this.showAddStage;

  addStage(stageData: Stage) {
    this.apiService.add_estages_to_job_opportunity(stageData, this.job._id).subscribe(
      (jobStages: Stage[]) => {
        this.job.stages = jobStages;
        this.stageForm.reset();
        console.log(this.job.stages);
      },
      error => console.log(error)
    );
    this.job.stages.push(stageData);
  }
  delete(stage: Stage){
    this.apiService.delete.stage(stage._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Etapa deletada com sucesso');
          this.job.stages = this.job.stages.filter(s => !(s._id === stage._id));
        }
      },
      error => console.warn(error)
    );
  }
  edit(stage: Stage){
    toggleDisabledInputsAndSelect(stage._id);
    this.showButtonUpdateStageID = stage._id;
  }
  update(stage: Stage){
    this.apiService.update.stage(stage).subscribe(
      (stageUpdated: Stage) => {
        stage = stageUpdated;
        toggleDisabledInputsAndSelect(stage._id);
          this.showButtonUpdateStageID = null;
      },
      error => console.log(error)
    );
  }
  // getValuesOfSkills(skills: Skill[]): string[]{
  //   debugger
  //   const result: string[] = [];
  //   skills.map(skill => result.push(skill.name));
  //   return result;
  // }
  // skillsContainsID(id: string, skills: Skill[]): boolean {
  //   debugger
  //   const skillsID: string[] = [];
  //   skills.map(skill => skillsID.push(skill._id));
  //   return skillsID.includes(id);
  // }
}
