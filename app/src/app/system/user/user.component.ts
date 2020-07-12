import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api/api.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: string;
  hasPermission: boolean = false;
  departments: string[] = [];
  constructor(
    private apiService: APIService,
    private userService: UserService) {}
    
  ngOnInit(): void {
    this.user = this.userService.getUserName();
    this.hasPermission = this.userService.getUserPermission();
    this.apiService.get.departments().subscribe(
      (departments: string[]) => this.departments = departments,
      error => console.error(error)
    )
  }

}
