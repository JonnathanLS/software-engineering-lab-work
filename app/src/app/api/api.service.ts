import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, STAGES_PATH as stagesPath, JOBS_PATH as jobsPath } from './api-endpoint';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';
import { Candidate } from '../model-interfaces/candidate';
import { CandidateJobOpportunity } from '../model-interfaces/candidate-job-opportunity';

const json = (object: Object) => JSON.stringify(object);

@Injectable({ providedIn: 'root'})
export class APIService {

	constructor(private httpClient: HttpClient) { }

	jobOpportunities = {
		get: {
			all: () => this.httpClient.get(API.job_opportunities),
			id: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}`),
			stages: (job_id: Stage) => this.httpClient.get(`${API.job_opportunities}${job_id}${stagesPath}`),
			evaluators: () => this.httpClient.get(`${API.job_opportunities}/users/evaluators`),
		},
		add: (stage: Stage, job_id: string) => this.httpClient.post(`${API.job_opportunities}${job_id}${stagesPath}`, json(stage)),
		create: (job: JobOpportunity) => this.httpClient.post(API.job_opportunities, json(job)),
		update: (id: string, job: JobOpportunity) => this.httpClient.put(`${API.job_opportunities}${id}`, json(job)),
		delete: (id: string) => this.httpClient.delete(`${API.job_opportunities}${id}`)
	}

	skills = {
		get: {
			all: () => this.httpClient.get(API.skills),
			id: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}`)
		},
		create: (skill: Skill) => this.httpClient.post(API.skills, json(skill)),
		update: (id: string, skill: Skill) => this.httpClient.put(`${API.skills}${id}`, json(skill)),
		delete: (id: string) => this.httpClient.delete(`${API.skills}${id}`)
	}
	
	stages = {
		update: (id: string, stage: Stage) => this.httpClient.put(`${API.stages}${id}`, json(stage)),
		delete: (id: string) => this.httpClient.delete(`${API.stages}${id}`)
	}

	candidates = {
		get: {
			all: () => this.httpClient.get(API.candidates),
			id: (id: string) => this.httpClient.get(`${API.candidates}${id}`),
		},
		create: (candidate: Candidate) => this.httpClient.post(API.candidates, json(candidate)),
		update: (id: string, candidate: Candidate) => this.httpClient.put(`${API.candidates}${id}`, json(candidate)),
		associate: (candidate_id: string, associate: CandidateJobOpportunity) => this.httpClient.post(`${API.candidates}${candidate_id}${jobsPath}`, json(associate)),
		delete: {
			id: (id: string) => this.httpClient.delete(`${API.candidates}${id}`),	
			job: (associate_id: string, job_id: string) => this.httpClient.delete(`${API.candidates}job-opportunities/${associate_id}`)
		},

	}
}
