import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hasPermission: boolean = false;

  constructor(private userService: UserService,
    private authenticationService: AuthenticationService) {
    authenticationService.getLoggedIn.subscribe(name => this.ngOnInit());
   }

  ngOnInit(): void {
    this.hasPermission = this.userService.getUserPermission();
  }

}
