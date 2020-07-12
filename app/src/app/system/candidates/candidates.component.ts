import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api/api.service';
import { Candidate } from '../../model-interfaces/candidate';
import { User } from '../../model-interfaces/user';
import { JobService } from '../jobs/job.service';

@Component({
	selector: 'app-candidates',
	templateUrl: './candidates.component.html',
	styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
	
	candidates: Candidate[] = [];
	currentCandidate: string;
	newLink: string;
	evaluators: User[];
	filteredCandidates: Candidate[] = [];
	candidateStatusSelected: string = "Ativos";
	
	constructor(
		private apiService: APIService,
		private jobService: JobService) { }

	ngOnInit(): void {
		this.apiService.get.candidates().subscribe(
			(candidates: Candidate[]) => {
				this.candidates = candidates;
				this.filterCandidates();
			},
			(error) => console.log(error)
		);		
		// this.getJobs();
	}
	// private async getJobs(){
	// 	return await this.apiService.get.job_opportunities().toPromise()
	// }
	addCandidate = (candidate: Candidate) => {
		this.candidates.push(candidate);
		this.filterCandidates();
	}
	
	filterCandidates = () => this.filteredCandidates = this.candidates
		.filter(candidate => candidate.deleted === (this.candidateStatusSelected === 'Inativos')).reverse();
}
