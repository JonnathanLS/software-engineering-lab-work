import { Component, OnInit } from '@angular/core';
import { APIService } from '../api/api.service';
import { Candidate } from '../model-interfaces/candidate';
import { toggleDisabledInputsAndSelect } from '../utils/utils';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];
  currentCandidate: string;
  newLink: string;

  constructor(
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.apiService.get.all_candidates().subscribe(
      (candidates: Candidate[]) => this.candidates = candidates,
      (error) => console.log(error)
    );
  }
  addCandidate = (candidate: Candidate) => this.candidates.push(candidate);
  delete(candidate: Candidate){
    this.apiService.delete.candidate(candidate._id).subscribe(
      response => {
        if (response.status === 204) {
          console.log('Candidato deletado com sucesso');
          this.candidates = this.candidates.filter(c => !(c._id === candidate._id));
        }
      },
      error => console.warn(error)
    );
  }
  edit(candidate: Candidate){
    toggleDisabledInputsAndSelect(candidate._id);
    this.currentCandidate = candidate._id;
  }
  update(candidate: Candidate){
    this.apiService.update.candidate(candidate).subscribe(
      (candidateUpdated: Candidate) => {
        toggleDisabledInputsAndSelect(candidateUpdated._id);
        this.currentCandidate = null;
      },
      error => console.log(error)
    );
  }

  addLinkToCandidate = (candidate: Candidate) => {
    if ( this.newLink && !candidate.links.includes(this.newLink)) {
      candidate.links.push(this.newLink);
      this.newLink = '';
    }
  }
  removeLinkOfCandidate = (url: string, candidate: Candidate) => 
    candidate.links = candidate.links.filter(link => !(link === url));


  showComponent = (candidateId: string) =>  this.currentCandidate !== candidateId;
}
