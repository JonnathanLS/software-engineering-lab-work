import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
        this.router.navigate(['/evaluations']);
      })
      .catch(error => console.log(error));
  }

}
