import { Component, OnInit, Input } from '@angular/core';
import { SkillScoreResultPresenter } from 'src/app/model-interfaces/result';

@Component({
  selector: 'app-skill-result',
  templateUrl: './skill-result.component.html',
  styleUrls: ['./skill-result.component.css']
})
export class SkillResultComponent implements OnInit {

  @Input() skillEvaluation: SkillScoreResultPresenter;
  constructor() { }

  ngOnInit(): void {
  }

  mapToText(score: number): string {
    if (score === 1) {
      return 'Péssimo';
    } else if (score === 2) {
      return 'Ruim';
    } else if (score === 3) {
      return 'Normal';
    } else if (score === 4) {
      return 'Bom';
    } else if (score === 5) {
      return 'Ótimo';
    }
  }

}
