import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { User } from '../model-interfaces/user';
import { ErrorMessage } from './mock-authentication';

describe('AuthenticationComponent', () => {
	let component: AuthenticationComponent;
	let fixture: ComponentFixture<AuthenticationComponent>;
	let service : AuthenticationService;

	interface MockUser { valid: User, invalid: User, denied: User }

	const user: MockUser = {
		invalid: { id: "ABC000000", name: "Name", password: "***" },
		valid: { id: "ABC123456", name: "Name", password: "***" },
		denied: { id: "ABC123456", name: "Name", password: "wrong" }
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AuthenticationComponent ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthenticationComponent);
		component = fixture.componentInstance;
		service = TestBed.inject(AuthenticationService);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe("should validate a user's authentication", () =>{

		it('is not authenticated', () => expect(service.isAuthenticated()).toBeFalse());

		// service.authenticate(user.valid).then(result =>
		// 	it('is authenticated', () => expect(service.isAuthenticated()).toBeTrue()));	
	});  

	describe("should authenticate a user", () =>{

		it('user does not exist', (done) => {
			service.authenticate(user.invalid).catch(error => {
				expect(error).toThrowError(ErrorMessage.nonexistent);
			}).finally(done);
		});

		it('access denied', (done) =>
			service.authenticate(user.denied).catch(error =>
				expect(error).toThrowError(ErrorMessage.unauthorized)).finally(done));

		it('successful authentication', (done) => 
			service.authenticate(user.valid).catch(error =>
				expect(error).toThrowError(ErrorMessage.authorized)).finally(done));
	});  

	

});
