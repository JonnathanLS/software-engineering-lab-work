import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { APIService } from '../api/api.service';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private service: AuthenticationService,
    private apiService: APIService) { }

  ngOnInit(): void {
    const user: User = { username: "Felipe", password: "123456", department: "HR", role: "HR" };
    this.service.authenticate(user).then((response)=> {
      console.log(response);
      const stage: Stage = {
        description: "TesteDescrp",
        name: "TesteName",
        skillIds: [ "ID-Skill-1" ]
      }
      this.apiService.jobOpportunities.add(stage, "5eefd2c6dc11e00028af931a").subscribe(data => console.log(data));
    })
  }

}
