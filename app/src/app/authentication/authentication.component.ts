import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { APIService } from '../api/api.service';
import { Stage } from '../model-interfaces/stage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public authForm: FormGroup;

  constructor(
    private service: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({ username: '', password: '' });
  }
  onSubmit(userData) {
    const user: User = { _id: '', username: userData.username, password: userData.password, department: null, role: null };
    this.service
      .authenticate(user)
      .then(response => {
        this.router.navigate(['/user']);
      })
      .catch(error => console.log(error));
  }

}
