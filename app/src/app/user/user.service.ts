import { Injectable } from '@angular/core';
import { User } from '../model-interfaces/user';
import { APIService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private hasPermission: boolean;
  // private userLogged: string;
  constructor(){}
  // setPermission = (value: boolean) => this.hasPermission = value;
  // setUserLogged = (userName: string) => this.userLogged = userName;
  getUserPermission = () => sessionStorage.getItem('role') === 'HR';
  getUserName = () => sessionStorage.getItem('user');
}
