import { Component, OnInit, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { Stage } from 'src/app/model-interfaces/stage';
import { Skill } from 'src/app/model-interfaces/skill';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  @Input() stages: Stage[];
  @Input() skills: Skill[];

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    propertiesInputAngularInvalid('StagesComponent', this.stages, this.skills);
  }
  removeStage = (id: string) => {
    debugger
    this.stages = this.stages.filter(stage => stage._id !== id);
  } 
}
