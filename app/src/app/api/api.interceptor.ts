import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

	constructor(private authService: AuthenticationService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.authService.isAuthenticated()) {
			debugger
			const auth = this.authService.getAuthorization();
			let headers: HttpHeaders;
			if (req.url.includes('resume')) headers = req.headers.set('Authorization', "Basic " + auth);
			else headers = req.headers.set('Authorization', "Basic " + auth).set("Content-Type", "application/json");
			const dupReq = req.clone({ headers });
			return next.handle(dupReq);
		}
		return next.handle(req);
	}
}
