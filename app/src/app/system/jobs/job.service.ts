import { Injectable } from '@angular/core';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { APIService } from 'src/app/api/api.service';

@Injectable({ providedIn: 'root' })
export class JobService {
    jobs: JobOpportunity[] = [];
    constructor( private apiService: APIService ){
        this.getJobs().then(jobs => this.jobs = jobs);
    }
    setJobs = (jobs: JobOpportunity[])  => this.jobs = jobs;
    private async getJobs(){
		return await this.apiService.get.job_opportunities().toPromise();
	}
}
