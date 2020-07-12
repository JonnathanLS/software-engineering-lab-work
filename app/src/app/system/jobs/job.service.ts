import { Injectable } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { APIService } from 'src/app/api/api.service';
import { User } from 'src/app/model-interfaces/user';

@Injectable({ providedIn: 'root' })
export class JobService {
    jobs: JobOpportunity[] = [];
    evaluators: User[] = [];

    constructor(private apiService: APIService) {
        this.getJobs();
        this.getEvaluators();
    }
    setJobs = (jobs: JobOpportunity[]) => this.jobs = jobs;
    setEvaluators = (evaluators: User[]) => this.evaluators = evaluators;
    private getJobs() {
        this.apiService.get.job_opportunities().subscribe(jobs => this.jobs = jobs);
    }
    private getEvaluators() {
        this.apiService.get.evaluators().subscribe(evaluators => this.evaluators = evaluators);
    }
}
