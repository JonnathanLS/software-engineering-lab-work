import { Component, OnInit } from '@angular/core';
import { APIService } from '../api/api.service';
import { Evaluation } from '../model-interfaces/evaluation';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  panelOpenState: boolean = false;
  evaluations: Evaluation[];
  constructor( private apiService: APIService ) { }

  ngOnInit(): void {
    this.apiService.get.evaluations_that_the_user_is_responsible().subscribe(
      (evaluations: Evaluation[]) => this.evaluations = evaluations,
      (error) => console.error(error)
    )
  }

  removeEvaluation = (id: string) => this.evaluations = this.evaluations.filter(evaluation => !(evaluation._id === id));
}
