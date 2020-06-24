import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { JobOpportunity } from '../model-interfaces/job-opportunity'
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	jobOpportunities: JobOpportunity[] = [];

	constructor(private homeService: HomeService) { }

	ngOnInit(): void {
		// this.homeService.getJobOpportunities().subscribe((jobs: Object[]) => {
		// 	jobs.forEach(job => {
		// 		const stages: Stage[] = [];
		// 		job["stages"].forEach(stage => {
		// 			const skills: Skill[] = [];
		// 			stage["skills"].forEach(skill => {
		// 				const newSkill: Skill = {
		// 					id: skill["_id"],
		// 					name: skill["name"],
		// 					description: skill["description"],
		// 				}
		// 				skills.push(newSkill);
		// 			});
		// 			const newStage: Stage = {
		// 				id: stage["_id"],
		// 				name: stage["name"],
		// 				description: stage["description"],
		// 				skills: skills
		// 			}
		// 			stages.push(newStage);
		// 		})
		// 		const newJob: JobOpportunity = { 
		// 			id: job["_id"], 
		// 			name: job["name"], 
		// 			stages: stages,
		// 			department: job["department"], 
		// 			description: job["description"] 
		// 		}
		// 		this.jobOpportunities.push(newJob);
		// 	});
		// });
		// console.log(this.jobOpportunities)
	}

}
