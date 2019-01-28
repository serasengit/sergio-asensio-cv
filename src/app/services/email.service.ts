import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }
  sendMessage(body, uploads) {
    return this._http.post(environment.SERVER_URL + '/' + environment.SERVER_PATH + '/formulario', body)
      .map(files => uploads);
  }
}
