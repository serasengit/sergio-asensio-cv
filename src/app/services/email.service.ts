import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  sendMessage(body) {
    return this._http.post(environment.SERVER_URL + '/' + environment.SERVER_PATH + '/formulario', body);
  }
}
