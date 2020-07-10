import { Component, OnInit } from '@angular/core';
import { APIService } from '../api/api.service';
import { Candidate } from '../model-interfaces/candidate';
import { toggleDisabledInputsAndSelect } from '../utils/utils';
import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { User } from '../model-interfaces/user';

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
		private apiService: APIService) { }

	ngOnInit(): void {
		this.apiService.get.all_candidates().subscribe(
			(candidates: Candidate[]) => {
				this.candidates = candidates;
				this.filterCandidates();
			},
			(error) => console.log(error)
		);
	}

	addCandidate = (candidate: Candidate) => {
		this.candidates.push(candidate);
		this.filterCandidates();
	}
	
	filterCandidates = () => this.filteredCandidates = this.candidates
		.filter(candidate => candidate.deleted === (this.candidateStatusSelected === 'Inativos'));
}
