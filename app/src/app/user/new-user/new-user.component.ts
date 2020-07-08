import { Component, OnInit, Input } from '@angular/core';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';
import { User } from 'src/app/model-interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  @Input() departments: string[];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService
  ) { }

 
  ngOnInit(): void {
    propertiesInputAngularInvalid('NewUserComponent', this.departments);
    const user: User = { _id: null, username: '', password: '', role: '', department: '' };
    this.userForm = this.formBuilder.group(user);
  }
  create(userData: User) {
    debugger
    this.apiService.post.user(userData).subscribe(
      (userCreated: User) => {
        console.log('Usuário criado com sucesso.');
        this.userForm.reset();
      },
      error => console.log(error)
    );

  }

}
