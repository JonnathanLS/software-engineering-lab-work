import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

	constructor(private authService: AuthenticationService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.authService.isAuthenticated()) {
			const auth = this.authService.getAuthorization();
			let headers = !req.headers.get('Content-Type')
				? req.headers.set('Authorization', "Basic " + auth).set("Content-Type", "application/json")
				: req.headers.set('Authorization', "Basic " + auth).set('Content-Type', req.headers.get('Content-Type'));
			const dupReq = req.clone({ headers });
			return next.handle(dupReq);
		}
		return next.handle(req);
	}
}
