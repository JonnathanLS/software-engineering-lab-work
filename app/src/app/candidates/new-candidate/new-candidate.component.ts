import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Candidate } from 'src/app/model-interfaces/candidate';
import { APIService } from 'src/app/api/api.service';
import { fbSetValue, fbGetValue } from 'src/app/utils/utils';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

interface TextNewCandidate { Show: string, Hide: string };
const TXT_NEW_CANDIDATE: TextNewCandidate = { Show: 'Novo Candidato', Hide: 'Ocultar' };

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class NewCandidateComponent implements OnInit {
  newLink: string;
  candidateForm: FormGroup;

  textButtonNewCandidate: string = TXT_NEW_CANDIDATE.Show;
  displayContainerNewCandidate: boolean = false;

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
        this.candidateCreated.emit(candidateCreated);
        this.candidateForm.reset(); 
        this.toogleContainerNewCandidate();
      },
      error => console.error(error)
    );
  }
  getLinks = () => fbGetValue(this.candidateForm, 'links');
  removeLink = (url: string) => {
    const newLinks: string[] = fbGetValue(this.candidateForm, 'links').filter(link => !(link === url));
    fbSetValue(this.candidateForm, 'links', newLinks);
  }
  toogleContainerNewCandidate = () => {
    this.textButtonNewCandidate = this.textButtonNewCandidate === TXT_NEW_CANDIDATE.Show ? TXT_NEW_CANDIDATE.Hide : TXT_NEW_CANDIDATE.Show;
    this.displayContainerNewCandidate = !this.displayContainerNewCandidate;
  }
}
