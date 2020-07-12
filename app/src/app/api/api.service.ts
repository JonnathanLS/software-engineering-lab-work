import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API, STAGES_PATH, JOBS_PATH } from './api-endpoint';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';
import { Candidate } from '../model-interfaces/candidate';
import { User } from '../model-interfaces/user';
import { Evaluate } from '../model-interfaces/evaluate';
import { builderObject, hasPropertyWithValueNullOrEmpty } from '../utils/utils';
import { CandidateJobOpportunity } from '../model-interfaces/candidate-job-opportunity';
import { of } from 'rxjs';
import { Evaluation } from '../model-interfaces/evaluation';

const json = (object: Object) => JSON.stringify(object);

@Injectable({ providedIn: 'root' })
export class APIService {

	constructor(private httpClient: HttpClient) { }
	
	get = {
		// Users
		user_info: () => this.httpClient.get<User>(`${API.users}login`),
		evaluators: () => this.httpClient.get<User[]>(`${API.users}evaluators`),
		// Departments
		departments: () => this.httpClient.get<string[]>(API.departments),
		// Job Oppotunities
		job_opportunities: () => this.httpClient.get<JobOpportunity[]>(API.job_opportunities),
		job_opportunity: (id: string) => this.httpClient.get<JobOpportunity>(`${API.job_opportunities}${id}`),
		stages_of_job_opportunity: (job_id: Stage) => this.httpClient.get<Stage>(`${API.job_opportunities}${job_id}${STAGES_PATH}`),
		// Skills
		skills: () => this.httpClient.get<Skill[]>(API.skills),
		skill_by_id: (id: string) => this.httpClient.get<Skill>(`${API.skills}${id}`),
		// Candidates
		candidates: () => this.httpClient.get<Candidate[]>(API.candidates),
		candidate: (id: string) => this.httpClient.get<Candidate>(`${API.candidates}${id}`),
		candidate_resume: (candidate_id: string) => this.httpClient.get(`${API.candidates}${candidate_id}/resume`),

		evaluations_that_the_user_is_responsible: () => this.httpClient.get<Evaluation[]>(`${API.evaluations}`),
		candidate_curriculum: (id: string) => this.httpClient.get(`${API.candidates}${id}/resume`, { responseType: 'blob' }),
		job_opportunity_result: (id: string) => this.httpClient.get(`${API.job_opportunities}${id}/results`),
	}
	post = {
		user: (user: User) => this.httpClient.post(API.users, json(user)),
		job_opportunity: (job: JobOpportunity) => {
			const newValue = builderObject(job, ['name', 'description', 'department']);
			return this.httpClient.post<JobOpportunity>(API.job_opportunities, json(newValue));
		},
		skill: (skill: Skill) => {
			const newValue = builderObject(skill, ['name', 'description']);
			return this.httpClient.post<Skill>(API.skills, json(newValue));
		},
		candidate: (candidate: Candidate) => {
			const newValue = builderObject(candidate, ['name', 'cpf', 'address', 'links']);
			return this.httpClient.post<Candidate>(API.candidates, json(newValue));
		},
		candidate_curriculum: (candidate_id: string, file: FormData) => {
			const empty = file.get('resume') === 'null';
			if (empty) throw new Error('You must attach a resume to the candidate!');
			const headers = new HttpHeaders().set("FormData", "sera-removido-pelo-interceptor");
			return this.httpClient.post(`${API.candidates}${candidate_id}/resume`, file, { observe: 'response', headers });
		},
		evaluate: (evaluate: Evaluate) => {
			const newValue = builderObject(evaluate, ['stageEvaluator', 'skillScoreList']);
			return this.httpClient.post(API.evaluations, json(newValue));
		}

	}
	update = {
		job_opportunity: (job: JobOpportunity) => {
			console.log(job._id);
			const newData = builderObject(job, ['name', 'description', 'department']);
			console.log(job._id);
			return this.httpClient.put<JobOpportunity>(`${API.job_opportunities}${job._id}`, json(newData));
		},
		skill: (skill: Skill) => {
			const newData = builderObject(skill, ['name', 'description']);
			return this.httpClient.put<Skill>(`${API.skills}${skill._id}`, json(newData));
		},
		stage: (stage: Stage) => {
			const newData = builderObject(stage, ['name', 'description', 'skills']);
			return this.httpClient.put<Stage>(`${API.stages}${stage._id}`, json(newData))
		},
		candidate: (candidate: Candidate) => {
			const newData = builderObject(candidate, ['name', 'cpf', 'address', 'links']);
			return this.httpClient.put<Candidate>(`${API.candidates}${candidate._id}`, json(newData))
		},
	}
	delete = {
		job_opportunity: (id: string) => this.httpClient.delete(`${API.job_opportunities}${id}`, { observe: 'response' }),
		skill: (id: string) => this.httpClient.delete(`${API.skills}${id}`, { observe: 'response' }),
		stage: (id: string) => this.httpClient.delete(`${API.stages}${id}`, { observe: 'response' }),
		// Candidates
		candidate: (id: string) => this.httpClient.delete(`${API.candidates}${id}`, { observe: 'response' }),
		candidate_curriculum: (id: string) => this.httpClient.delete(`${API.candidates}${id}/resume`, { observe: 'response' }),
	}
	activate = {
		job: (id: string) => this.httpClient.put<boolean>(`${API.job_opportunities}${id}/activate`, {}),
		skill: (id: string) => this.httpClient.put<boolean>(`${API.skills}${id}/activate`, {}),
		candidate: (id: string) => this.httpClient.put<boolean>(`${API.candidates}${id}/activate`, {}),
	}
	finish_job = (id: string) => this.httpClient.put<boolean>(`${API.job_opportunities}${id}/finish`, {});
	add_estages_to_job_opportunity = (stage: Stage, job_id: string) => {
		const newStage = builderObject(stage, ['name', 'description', 'skills']);
		return this.httpClient.post<Stage>(`${API.job_opportunities}${job_id}${STAGES_PATH}`, json(newStage));
	}
	associate_candidate_with_job_opportunity = (candidate_id: string, associate: CandidateJobOpportunity) => {
		associate.stageEvaluatorList.map(stageEvaluator => delete stageEvaluator.done);
		const newValue = builderObject(associate, ['jobOpportunityId', 'stageEvaluatorList']);
		
		return this.httpClient.post(`${API.candidates}${candidate_id}${JOBS_PATH}`, json(newValue));
	}
	disassociate_candidate_with_job_opportunity = (associate_id: string) => this.httpClient.delete(`${API.candidates}job-opportunities/${associate_id}`, { observe: 'response' });
}
