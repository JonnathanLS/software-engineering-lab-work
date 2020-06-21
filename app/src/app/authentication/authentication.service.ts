import { Injectable } from '@angular/core';
import { User } from '../model-interfaces/user';
import { mock_api_backend as API } from './mock-authentication';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private token: string;

    authenticate = (user: User) => {
        this.token = "";
        if (!user.id) throw new Error('Authentication Service : authentication method requires a user to be informed.');
        return API.authenticate(user).then(response => {
            if(response) localStorage.setItem('user', user.id);
            this.token = response;
            return response;
        });
    }
    
    isAuthenticated = (): boolean => !!localStorage.getItem('user') && !this.token;
    
}
