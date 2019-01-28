import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  headers: HttpHeaders;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq = request.clone();

    this.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(environment.SERVER_USER + ':' + environment.SERVER_PASS)
    });

    customReq = request.clone({
      headers: this.headers
    });
    return next.handle(customReq);
  }
}
