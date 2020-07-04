import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, STAGES_PATH, JOBS_PATH } from './api-endpoint';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';
import { Candidate } from '../model-interfaces/candidate';
import { User } from '../model-interfaces/user';
import { Evaluate } from '../model-interfaces/evaluate';
import { builderObject } from '../utils/utils';
import { CandidateJobOpportunity } from '../model-interfaces/candidate-job-opportunity';

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
	get = {
		// Departments
		all_departments: () => this.httpClient.get(API.departments),
		// Job Oppotunities
		all_job_opportunities: () => this.httpClient.get(API.job_opportunities),
		job_opportunity: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}`),
		stages_of_job_opportunity: (job_id: Stage) => this.httpClient.get(`${API.job_opportunities}${job_id}${STAGES_PATH}`),
		// Skills
		all_skills: () => this.httpClient.get(API.skills),
		skill_by_id: (id: string) => this.httpClient.get(`${API.skills}${id}`),
		// Candidates
		all_candidates: () => this.httpClient.get(API.candidates),
		candidate: (id: string) => this.httpClient.get(`${API.candidates}${id}`),
		candidate_resume: (candidate_id: string) => this.httpClient.get(`${API.candidates}${candidate_id}/resume`),

		list_of_stages_a_user_is_responsible: () => this.httpClient.get(`${API.evaluations}`),
		job_opportunity_by_evaluation: (id: string) => this.httpClient.get(`${API.evaluations}${id}/job-opportunity`),
		candidate_by_evaluation: (id: string) => this.httpClient.get(`${API.evaluations}${id}/candidate`),
		skills_by_evaluation: (id: string) => this.httpClient.get(`${API.evaluations}${id}/skills`),
	}
	post = {
		job_opportunity: (job: JobOpportunity) => {
			const newValue = builderObject(job, ['name', 'description', 'department']);
			return this.httpClient.post(API.job_opportunities, json(newValue));
		},
		skill: (skill: Skill) => {
			const newValue = builderObject(skill, ['name', 'description']);
			return this.httpClient.post(API.skills, json(newValue));
		},
		candidate: (candidate: Candidate) => {
			const newValue = builderObject(candidate, ['name', 'cpf', 'address', 'links']);
			return this.httpClient.post(API.candidates, json(newValue));
		},
		evaluate: (evaluate: Evaluate) => {
			const newValue = builderObject(evaluate, ['stageEvaluator', 'skillScoreList']);
			return this.httpClient.post(API.evaluations, json(newValue));
		}
	}
	update = {
		job_opportunity: (job: JobOpportunity) => {
			const newData = { name: job.name, description: job.description, department: job.department };
			return this.httpClient.put(`${API.job_opportunities}${job._id}`, json(newData));
		},
		skill: (skill: Skill) => this.httpClient.put(`${API.skills}${skill._id}`, json(skill)),
		stage: (stage: Stage) => {
			const newData = builderObject(stage, ['name', 'description', 'skills']);
			return this.httpClient.put(`${API.stages}${stage._id}`, json(newData))
		},
		candidate: (candidate: Candidate) => this.httpClient.put(`${API.candidates}${candidate._id}`, json(candidate)),
	}
	delete = {
		job_opportunity: (id: string) => this.httpClient.delete(`${API.job_opportunities}${id}`, { observe: 'response'}),
		skill: (id: string) => this.httpClient.delete(`${API.skills}${id}`, { observe: 'response'}),
		stage: (id: string) => this.httpClient.delete(`${API.stages}${id}`, { observe: 'response'}),
		// Candidates
		candidate: (id: string) => this.httpClient.delete(`${API.candidates}${id}`, { observe: 'response'}),
		candidate_resume: (candidate_id: string) => this.httpClient.delete(`${API.candidates}${candidate_id}/resume`, { observe: 'response'}),
	}
	add_estages_to_job_opportunity = (stage: Stage, job_id: string) => {
		const newStage = builderObject(stage, ['name', 'description', 'skills']);
		return this.httpClient.post(`${API.job_opportunities}${job_id}${STAGES_PATH}`, json(newStage));
	}
	associate_candidate_with_job_opportunity = (candidate_id: string, associate: CandidateJobOpportunity) => this.httpClient.post(`${API.candidates}${candidate_id}${JOBS_PATH}`, json(associate));
	disassociate_candidate_with_job_opportunity = (associate_id: string) => this.httpClient.delete(`${API.candidates}job-opportunities/${associate_id}`);
	upload_candidate_resume = (candidate_id: string, file: FormData) => this.httpClient.post(`${API.candidates}${candidate_id}`, file, { observe: 'response'});
}
