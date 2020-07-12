import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(){}
  getUserPermission = () => sessionStorage.getItem('role') === 'HR';
  getUserName = () => sessionStorage.getItem('user');
}
