import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from '../utils/notifier/notifier.service';

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
    private formBuilder: FormBuilder,
    private notifierService: NotifierService ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({ username: '', password: '' });
  }
  onSubmit(userData) {

    const user: User = {
      _id: '', username: userData.username, 
      password: userData.password, 
      department: null, role: null 
    };

    this.service
      .authenticate(user)
      .then(response => {
        console.log(response);
        this.router.navigate(['/evaluations']);
      })
      .catch(error => this.notifierService.error(error));
  }

}
