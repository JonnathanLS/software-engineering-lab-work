import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

	constructor(private authService: AuthenticationService) {}

	intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.authService.isAuthenticated()){
			const auth = this.authService.getAuthorization();
			const dupReq = req.clone({ 
				headers: req.headers
					.set('Authorization', "Basic " + auth)
					.set("Content-Type", "application/json")
			});
			return next.handle(dupReq);
		}
		return next.handle(req);
	}
}
