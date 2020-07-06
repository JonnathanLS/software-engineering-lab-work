import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../model-interfaces/evaluation';
import { APIService } from '../api/api.service';
import { Skill } from '../model-interfaces/skill';
import { JobOpportunity } from '../model-interfaces/job-opportunity';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  evaluations: Evaluation[] = [];
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.getEvaluations();
  }
  private getEvaluations = () => {

    this.apiService.get.evaluations_that_the_user_is_responsible().subscribe(
      (evaluations: Evaluation[]) => {
        this.evaluations = evaluations;
        this.evaluations.map(evaluation => this.getSkillsByEvaluation(evaluation));
        this.evaluations.map(evaluation => this.getJobOpportunityByEvaluation(evaluation));
      },
      (error) => console.log(error)
    );
  }
  private getSkillsByEvaluation = (evaluation: Evaluation) => {
    this.apiService.get.skills_by_evaluation(evaluation._id).subscribe(
      (skills: Skill[]) => evaluation.stage.skills = skills,
      (error) => console.log(error)
    );
  }
  private getJobOpportunityByEvaluation = (evaluation: Evaluation) => {
    this.apiService.get.job_opportunity_by_evaluation(evaluation._id).subscribe(
      (job: JobOpportunity) => evaluation.jobOpportunity = job,
      (error) => console.log(error)
    );
  }

}
