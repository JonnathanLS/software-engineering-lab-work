import { Component, OnInit, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { Stage } from 'src/app/model-interfaces/stage';
import { Skill } from 'src/app/model-interfaces/skill';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  @Output() updateStagesEventEmitter = new EventEmitter<Stage[]>();

  @Input() job: JobOpportunity;
  stageForm: FormGroup;
  skills: Skill[] = [];
  showAddStage: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.apiService.skills.get.all().subscribe((skills: Skill[]) => this.skills = skills);
    const stage: Stage = { _id: null, name: '', description: '', skills: null };
    this.stageForm = this.formBuilder.group(stage); 
  }
  addStage(stageData: Stage) {
    this.apiService.jobOpportunities.add(stageData, this.job._id).subscribe(
      (jobStages: Stage[]) => {
        this.job.stages = jobStages;
        this.stageForm.reset();
        console.log(this.job.stages);
      },
      error => console.log(error)
    );
    this.job.stages.push(stageData);
    
  }
  toggleAddStage = () => this.showAddStage = !this.showAddStage;
  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName in changes) {
  //     if (changes.hasOwnProperty(propName)) {
  //       switch (propName) {
  //         case 'stages': {
  //           this.updateStages();
  //         }
  //       }
  //     }
  //   }
  // }
  // addStage = ($event) => this.stages.push($event);
  // updateStages = () => this.updateStagesEventEmitter.emit(this.stages);
  
}
