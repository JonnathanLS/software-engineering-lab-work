import { Injectable } from '@angular/core';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { APIService } from '../api/api.service';
import { User } from '../model-interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  jobs: JobOpportunity[] = [];
  evaluators: User[] = [];
  constructor(
    private apiService: APIService,
  ) { }
  private getJobs = () => this.apiService.get.job_opportunities().subscribe(
    (jobs: JobOpportunity[]) => this.jobs = jobs,
    error => console.log(error)
  );
  reloadJobs = () => this.getJobs();
  getEvaluators = () => this.apiService.get.evaluators().subscribe(
    (evaluators: User[]) => this.evaluators = evaluators,
    error => console.log(error)
  );
  reloadEvaluators = () => this.getEvaluators();
}
