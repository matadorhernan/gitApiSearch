import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as env from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGithubService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request: HttpRequest<any> = req;
    const token= env.environment.token;

    request = req.clone({
      
      setHeaders:{
        Authorization: `Token ${token}`
      }

    })

    return next.handle(request);
  }
}
