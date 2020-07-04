import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../model-interfaces/evaluation';
import { APIService } from '../api/api.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  evaluations: Evaluation[] = [];
  
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    // this.apiService.get.evaluations_that_the_user_is_responsible().subscribe(
		// 	(evaluations: Evaluation[]) => this.evaluations = evaluations,
		// 	(error) => console.log(error)
		// );
  }

}
