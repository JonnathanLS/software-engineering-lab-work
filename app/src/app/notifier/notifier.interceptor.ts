import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotifierService } from './notifier.service';
import { NotifierPosition } from './notifier';

@Injectable({
    providedIn: 'root',
})
export class NotifierInterceptor implements HttpInterceptor{
    constructor(
        private notifierService: NotifierService
    ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                this.notifierService.error(
                    `Não Foi Possível Concluir a Solicitação ${err.url} - Mensagem de Status: ${err.statusText}`, { millisecs: 5000 }
                );
                throw err;
            }),
        );
      }
}