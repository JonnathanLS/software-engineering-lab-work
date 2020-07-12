import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { APIService } from 'src/app/api/api.service';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { JobOpportunity } from 'src/app/model-interfaces/job-opportunity';
import { NotifierService } from 'src/app/utils/notifier/notifier.service';
import { CandidateJobOpportunity } from 'src/app/model-interfaces/candidate-job-opportunity';
import { toggleDisabledInputsAndSelect, propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { JobService } from '../../jobs/job.service';

interface TextNewCurriculum { Show: string, Hide: string };
const TXT_NEW_CURRICULUM: TextNewCurriculum = { Show: 'Anexar Currículo', Hide: 'Ocultar' };

@Component({
	selector: 'app-candidate',
	templateUrl: './candidate.component.html',
	styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

	@Input() candidate: Candidate;
	@Output() candidateUpdate = new EventEmitter<null>();

	newLink: string = '';
	hasCurriculum = true;
	showUploadFile = false;
	uploadCandidate = false;
	panelOpenState: boolean = false;
	textCurriculum = 'Anexar Currículo';
	jobOpportunities: JobOpportunity[] = [];
	thereAreJobOpportunitiesToAssociate: boolean;
	curriculumActions: string[] = ['download', 'delete'];

	

	constructor(
		private apiService: APIService,
		private notifierService: NotifierService,
		private jobService: JobService) { }

	ngOnInit(): void {
		propertiesInputAngularInvalid('CandidateComponent', this.candidate);
		this.hasCurriculum = this.candidate.hasResume;
		this.jobOpportunities = this.jobService.jobs;
		this.updatePropJobOpportunitiesToAssociate();
	}

	delete() {
		this.apiService.delete.candidate(this.candidate._id).subscribe(
			response => {
				if (response.status === 204) {
					this.notifierService.success('Candidato Desativado com Sucesso');
					this.candidate.deleted = true;
					this.candidateUpdate.emit();
				}
			},
			error => console.warn(error)
		);
	}
	activate(){
		
		this.apiService.activate.candidate(this.candidate._id).subscribe(
		  response => {
			if (response) {
			  this.notifierService.success('Candidato Reativado com Sucesso');
			  this.candidate.deleted = false;
			  this.candidateUpdate.emit()
			}
		  },
		  error => console.error(error)
		);
	  }
	edit() {
		toggleDisabledInputsAndSelect(this.candidate._id);
		this.uploadCandidate = true;
	}
	update() {
		this.apiService.update.candidate(this.candidate).subscribe(
			(candidateUpdated: Candidate) => {
				this.notifierService.success('Candidato Atualizado com Sucesso')
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
	removeLinkOfCandidate = (url: string) => {
		this.candidate.links = this.candidate.links.filter(link => link !== url);
	}

	toggleUploadFileContainer = () => {
		this.textCurriculum = this.textCurriculum === TXT_NEW_CURRICULUM.Show ? TXT_NEW_CURRICULUM.Hide : TXT_NEW_CURRICULUM.Show;
		this.showUploadFile = !this.showUploadFile;		
	}

	curriculumClicked = (action: 'download' | 'delete') => {
		if (action === 'download') {
			this.apiService.get.candidate_curriculum(this.candidate._id).subscribe(
				curriculum => {
					this.notifierService.success("Download do Currículo do Candidato Concluído.");
					const url = window.URL.createObjectURL(new Blob([curriculum as BlobPart], { type: 'application/pdf' }));
					var link = document.createElement('a');
					document.body.appendChild(link);
					link.setAttribute('style', 'display: none');
					link.href = url;
					link.download = `Curriculo-${this.candidate.name}.pdf`;
					link.click();
				},
				error => console.error(error)
			);
		}
		else this.apiService.delete.candidate_curriculum(this.candidate._id).subscribe(
			response => {
				if (response.status === 204) {
					this.notifierService.success('Currículo Excluído com Sucesso');
					this.hasCurriculum = false;
				}
			},
			error => console.error(error)
		);
	}

	curriculumAdded = (result: boolean) => {
		this.hasCurriculum = result;
		this.showUploadFile = false;
	}

	newAssociatedJobs = (newData: CandidateJobOpportunity[]) => {
		this.candidate.jobOpportunities = newData;
		this.updatePropJobOpportunitiesToAssociate();
	}

	disassociateJob = (associateId: string) => {
		this.apiService.disassociate_candidate_with_job_opportunity(associateId).subscribe(
			response => {
				if (response.status === 204) {
					this.notifierService.success('Vaga de Trabalho Desvinculada com Sucesso');
					this.thereAreJobOpportunitiesToAssociate = true;
					this.candidate.jobOpportunities = this.candidate.jobOpportunities.filter(associate => associate._id !== associateId);
				}
			},
			error => console.error(error)
		);
	}

	updatePropJobOpportunitiesToAssociate = () => {
		this.thereAreJobOpportunitiesToAssociate = this.candidate.jobOpportunities.length < this.jobOpportunities.filter(job=> !job.deleted && !job.finished).length;
	}

}
