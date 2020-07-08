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
	jobOpportunies: JobOpportunity[] = [];
	evaluators: User[];

	constructor(
		private apiService: APIService) { }

	ngOnInit(): void {
		this.apiService.get.all_candidates().subscribe(
			(candidates: Candidate[]) => this.candidates = candidates,
			(error) => console.log(error)
		);
	}
	addCandidate = (candidate: Candidate) => this.candidates.push(candidate);
	removeCandidate = (id: string) => this.candidates = this.candidates.filter(c => !(c._id === id));

}
