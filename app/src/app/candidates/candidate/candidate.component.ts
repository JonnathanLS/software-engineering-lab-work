import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { APIService } from 'src/app/api/api.service';
import { toggleDisabledInputsAndSelect } from 'src/app/utils/utils';

@Component({
	selector: 'app-candidate',
	templateUrl: './candidate.component.html',
	styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

	@Input() candidate: Candidate;
	@Output() candidateRemoved = new EventEmitter();

	uploadCandidate = false;
	newLink: string = '';
	hasCurriculum = true;
	curriculumActions: string[] = ['download', 'delete'];

	// associatedJobs: Job
	constructor(
		private apiService: APIService
	) { }

	ngOnInit(): void {
		if (!this.candidate)
			throw new Error('CandidateComponent : there are properties that have not been loaded.');
		this.hasCurriculum = this.candidate.hasResume;
	}
	delete() {
		this.apiService.delete.candidate(this.candidate._id).subscribe(
			response => {
				if (response.status === 204) {
					console.log('Candidato deletado com sucesso');
					this.candidateRemoved.emit(this.candidate._id);
				}
			},
			error => console.warn(error)
		);
	}
	edit() {
		toggleDisabledInputsAndSelect(this.candidate._id);
		this.uploadCandidate = true;
	}
	update() {
		this.apiService.update.candidate(this.candidate).subscribe(
			(candidateUpdated: Candidate) => {
				toggleDisabledInputsAndSelect(candidateUpdated._id);
				this.uploadCandidate = false;
			},
			error => console.log(error)
		);
	}

	addLinkToCandidate = () => {
		if (this.newLink && !this.candidate.links.includes(this.newLink)) {
			this.candidate.links.push(this.newLink);
			this.newLink = '';
		}
	}
	removeLinkOfCandidate = (url: string) =>
		this.candidate.links = this.candidate.links.filter(link => !(link === url));

	curriculumClicked = (action: 'download' | 'delete') => {
		debugger
		if (action === 'download') {
			this.apiService.get.candidate_curriculum(this.candidate._id).subscribe(
				curriculum => {
					console.log(curriculum);
				},
				error => console.error(error)
			);
		}
		else this.apiService.delete.candidate_curriculum(this.candidate._id).subscribe(
			response => {
				if (response.status === 204) {
					console.log('Currículo deletado com sucesso');
					this.hasCurriculum = false;
				}
			},
			error => console.error(error)
		);
	}
	curriculumAdded = (result: boolean) => this.hasCurriculum = result;

}
