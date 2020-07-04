import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { APIService } from 'src/app/api/api.service';
import { fbSetValue, fbGetValue } from 'src/app/utils/utils';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {
  newLink: string;
  candidateForm: FormGroup;

  @Output() candidateCreated = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private apiService: APIService) { }

  ngOnInit(): void {
    const newCandidate: Candidate = { _id: null, name: '', cpf: '', address: '', links: null, curriculum: null, jobOpportunities: null, hasResume: null };
    this.candidateForm = this.formBuilder.group(newCandidate);
    fbSetValue(this.candidateForm, 'links', []);
  }

  addLink = () => {
    const links: string[] = fbGetValue(this.candidateForm, 'links');
    if (this.newLink && !links.includes(this.newLink)) {
      fbSetValue(this.candidateForm, 'links', [...links, this.newLink]);
      this.newLink = '';
    }
  };
  create(candidate: Candidate) {
    this.apiService.post.candidate(candidate).subscribe(
      (candidateCreated: Candidate) => {
        this.emitCandidateCreated(candidateCreated);
        this.candidateForm.reset();
      },
      error => console.error(error)
    );
  }
  emitCandidateCreated = (candidate: Candidate) => this.candidateCreated.emit(candidate);
  getLinks = () => fbGetValue(this.candidateForm, 'links');
  removeLink = (url: string) => {
    const newLinks: string[] = fbGetValue(this.candidateForm, 'links').filter(link => !(link === url));
    fbSetValue(this.candidateForm, 'links', newLinks);
  }
}
