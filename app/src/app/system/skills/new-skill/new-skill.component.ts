import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { APIService } from 'src/app/api/api.service';
import { Skill } from 'src/app/model-interfaces/skill';
import { propertiesInputAngularInvalid, opacityEnterLeaveTrigger, heightEnterLeaveTrigger } from 'src/app/utils/utils';
import { NotifierService } from 'src/app/utils/notifier/notifier.service';

interface TextNewSkill { Show: string, Hide: string };
const TXT_NEW_SKILL: TextNewSkill = { Show: 'Nova Competência', Hide: 'Ocultar' };

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
  animations: [ heightEnterLeaveTrigger , opacityEnterLeaveTrigger ]
})
export class NewSkillComponent implements OnInit {
  skillForm: FormGroup;
  @Input() skills: Skill[] = [];
  displayContainerNewSkill: boolean = false;
  textButtonNewSkill: string = TXT_NEW_SKILL.Show;
  @Output() skillCreated = new EventEmitter<Skill>();
  

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
    private notifierService: NotifierService){}

  ngOnInit(): void {
    propertiesInputAngularInvalid('NewSkillComponent', this.skills);
    this.skillForm = this.formBuilder.group({name: '', description: ''});
  }
  create(skill: Skill){
    this.apiService.post.skill(skill).subscribe(
      (skillCreated: Skill) => {
        this.notifierService.success('Competência Cadastrada com Sucesso')
        this.skillCreated.emit(skillCreated);
        this.skillForm.reset();
        this.toogleContainerNewSkill();
      },
      error => console.log(error)
    );
  }
  toogleContainerNewSkill = () => {
    this.textButtonNewSkill = this.textButtonNewSkill === TXT_NEW_SKILL.Show ? TXT_NEW_SKILL.Hide : TXT_NEW_SKILL.Show;
    this.displayContainerNewSkill = !this.displayContainerNewSkill;
  }
}
