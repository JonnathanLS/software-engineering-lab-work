import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from '../api/api.service';
import { User } from '../model-interfaces/user';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {

  userForm: FormGroup;
  evaluators;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    let properties = { username: '', password: '', department: '', role: '' };
    this.userForm = this.formBuilder.group(properties);
    this.apiService.user.evaluators().subscribe(data=> this.evaluators = data);
    console.log(this.evaluators);
  }
  onSubmit(userData: User) {
    this.apiService.user.create(userData).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
