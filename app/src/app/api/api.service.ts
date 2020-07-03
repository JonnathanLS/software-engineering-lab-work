import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, STAGES_PATH as stagesPath, JOBS_PATH as jobsPath } from './api-endpoint';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';
import { Candidate } from '../model-interfaces/candidate';
import { CandidateJobOpportunity } from '../model-interfaces/candidate-job-opportunity';
import { User } from '../model-interfaces/user';
import { hasPropertyWithValueNullOrEmpty, builderObject } from '../utils/utils';

const json = (object: Object) => JSON.stringify(object);

@Injectable({ providedIn: 'root' })
export class APIService {

	constructor(private httpClient: HttpClient) { }

	// delete = (data: any, interfaceName: string) => {
	// 	switch (interfaceName) {
	// 		case "job": return this.jobOpportunities.delete(data);
	// 		case "stage": return this.stages.delete(data);
	// 		case "skill": return this.skills.delete(data);
	// 		default: throw new Error("API Service DELETE : the interface name is not configured");
	// 	}
	// }

	user = {
		create: (user: User) => this.httpClient.post(API.users, json(user)),
		evaluators: () => this.httpClient.get(`${API.users}evaluators`),
	}

	departments = {
		get: {
			all: () => this.httpClient.get(API.departments)
		}
	}
	jobOpportunities = {
		get: {
			all: () => this.httpClient.get(API.job_opportunities),
			id: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}`),
			stages: (job_id: Stage) => this.httpClient.get(`${API.job_opportunities}${job_id}${stagesPath}`),

		},
		add: (stage: Stage, job_id: string) => {
			const newStage = builderObject(stage, ['name', 'description', 'skills']);
			return this.httpClient.post(`${API.job_opportunities}${job_id}${stagesPath}`, json(newStage));
		},
		create: (job: JobOpportunity) => {
			const newJob = builderObject(job, ['name', 'description', 'department']);
			return this.httpClient.post(API.job_opportunities, json(newJob));
		},
		update: (job: JobOpportunity) => {
			const newData = { name: job.name, description: job.description, department: job.department };
			return this.httpClient.put(`${API.job_opportunities}${job._id}`, json(newData));
		},
		delete: (id: string) => this.httpClient.delete(`${API.job_opportunities}${id}`, { observe: 'response'})
	}

	skills = {
		get: {
			all: () => this.httpClient.get(API.skills),
			id: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}`)
		},
		create: (skill: Skill) => {
			const newSkill = builderObject(skill, ['name', 'description']);
			return this.httpClient.post(API.skills, json(newSkill));
		},
		update: (skill: Skill) => this.httpClient.put(`${API.skills}${skill._id}`, json(skill)),
		delete: (id: string) => this.httpClient.delete(`${API.skills}${id}`, { observe: 'response'})
	}

	stages = {
		update: (stage: Stage) => {
			const newData = builderObject(stage, ['name', 'description', 'skills']);
			return this.httpClient.put(`${API.stages}${stage._id}`, json(newData))
		},
		delete: (id: string) => this.httpClient.delete(`${API.stages}${id}`, { observe: 'response'})
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
