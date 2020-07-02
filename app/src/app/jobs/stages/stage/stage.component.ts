import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stage } from 'src/app/model-interfaces/stage';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Output() private addEventEmitter = new EventEmitter<Stage>();

  stage: Stage = { 
    id: 's1', name: "Estágio-1", description: "Desc-1", 
    skills: [ 
      {id: 's1', name: 'skill-1', description: "desc-1"},
      {id: 's2', name: 'skill-2', description: "desc-2"}
    ]
  }; 

  skillsFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void { }

  addStage = () => this.addEventEmitter.emit(this.stage);

}
