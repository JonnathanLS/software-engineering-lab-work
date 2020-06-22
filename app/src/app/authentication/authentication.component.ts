import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { APIService } from '../api/api.service';
import { Stage } from '../model-interfaces/stage';
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
    private apiService: APIService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // const user: User = { username: "Felipe", password: "123456", department: "HR", role: "HR" };
    // this.service.authenticate(user).then((response)=> {
    //   console.log(response);
    //   const stage: Stage = {
    //     description: "TesteDescrp",
    //     name: "TesteName",
    //     skillIds: [ "ID-Skill-1" ]
    //   }
    //   this.apiService.jobOpportunities.add(stage, "5eefd2c6dc11e00028af931a").subscribe(data => console.log(data));
    // })

    this.authForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  onSubmit(userData) {
    const user: User = { id: '', username: userData.username, password: userData.password }
    this.service
      .authenticate(user)
      .then(response => this.router.navigate(['/home']))
      .catch(error => console.log(error));
  }

}
