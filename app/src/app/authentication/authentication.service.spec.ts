import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

import { AuthenticationComponent } from './authentication.component';
import { User } from '../model-interfaces/user';
let httpClient: HttpClient;
import { ErrorMessages } from 'src/assets/error-messages';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModule } from './authentication.module';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationComponent', () => {
	let component: AuthenticationComponent;
	let fixture: ComponentFixture<AuthenticationComponent>;
	let httpClient: HttpClient;
	let authService : AuthenticationService;

	// interface UserType { valid: User, invalid: User }

	// const user: UserType = {
	// 	valid: { username: "Felipe", password: "123456", department: "HR", role: "HR" },
	// 	invalid: { username: "Jonnathan", password: "000000", department: "HR", role: "HR" },
	// }

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		});
		httpClient = TestBed.get(HttpClient);
		authService = TestBed.get(AuthenticationService);
	});

});
