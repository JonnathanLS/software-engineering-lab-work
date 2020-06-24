import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { Stage } from 'src/app/model-interfaces/stage';

@Component({
  selector: 'app-add-stages',
  templateUrl: './add-stages.component.html',
  styleUrls: ['./add-stages.component.css']
})
export class AddStagesComponent implements OnInit {

  @Output() updateStagesEventEmitter = new EventEmitter<Stage[]>();

  stagesForm: FormGroup;
  stages: Stage[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    
    this.stagesForm = this.formBuilder.group([])  
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'stages': {
            this.updateStages();
          }
        }
      }
    }
  }
  addStage = ($event) => this.stages.push($event);
  updateStages = () => this.updateStagesEventEmitter.emit(this.stages);
  
}
