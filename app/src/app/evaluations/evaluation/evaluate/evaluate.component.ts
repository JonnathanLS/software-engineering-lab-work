import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Skill } from 'src/app/model-interfaces/skill';
import { propertiesInputAngularInvalid, fbSetValue, fbGetValue } from 'src/app/utils/utils';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';
import { Evaluate } from 'src/app/model-interfaces/evaluate';
import { SKillScore } from 'src/app/model-interfaces/skill-score';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  @Input() skills: Skill[];
  @Input() evaluationID: string;

  skillScoreList: SKillScore[] = [];
  scoreSelected: string = '';
  

  evaluateForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private apiService: APIService ){}

  ngOnInit(): void {
    propertiesInputAngularInvalid('', this.skills, this.evaluationID);
    const evaluate: Evaluate = { _id: null, stageEvaluator: this.evaluationID, skillScoreList: null };
    this.evaluateForm = this.formBuilder.group(evaluate);
    this.skills.map(skill => this.skillScoreList.push({_id: null, skill: skill._id, score: null}));
    fbSetValue(this.evaluateForm, 'skillScoreList', this.skillScoreList);
  }
  private skillScoreListIsValid = () => {
    let result = true;
    this.skillScoreList.forEach(skillScore =>{
      if (!skillScore.score) result = false;
    });
    return result;
  }
  evaluate(evaluate: Evaluate) {
    debugger
    if ( this.skillScoreListIsValid() ) {
      this.apiService.post.evaluate(evaluate).subscribe(
        (evaluateCreated: Evaluate) => {
          console.log('Avaliação Registrada Com Sucesso', evaluateCreated);
          this.evaluateForm.reset(); 
        },
        error => console.error(error)
      );
    }
    
  }
  setSkillSkore = (skill_id: string) => {
    this.skillScoreList.forEach(skillScore => {
      if (skillScore.skill === skill_id){
        skillScore.score = this.scoreSelected;
        this.scoreSelected = '';
      }
    });
  }

}
