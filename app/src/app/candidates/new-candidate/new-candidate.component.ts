import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { APIService } from 'src/app/api/api.service';

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
    const newCandidate: Candidate = { _id: null, name: '', cpf: '', address: '', links: null, curriculum: null, jobOpportunities: null};
    this.candidateForm = this.formBuilder.group(newCandidate);
    this.fbSetValue('links', []);
  }
  fbGetValue = (key: string) => this.candidateForm.get(key).value;
  private fbSetValue = (key: string, value: any) => this.candidateForm.get(key).setValue(value);
  addLink = () => {
    const links: string[] = this.fbGetValue('links');
    if ( this.newLink && !links.includes(this.newLink)) {
      this.fbSetValue('links', [...links, this.newLink]);
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
  removeLink = (url: string) => 
    this.fbSetValue('links', this.fbGetValue('links').filter(link => !(link === url)));
}
