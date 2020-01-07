import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
}) 
export class UtilsService {

  constructor(private translate: TranslateService, private router: Router) { }
  /**Create alert pop-up to show Server Api exceptions*/
  swalVolverConExclamacion(text: string) {
    return swal({
      type: 'error',
      title: 'Oops...',
      html: text
    });
  }
  /**Show pop-up with Server Api exceptions*/
  handleError(errorCode: number, errorMessage: string, urlBack: string) {
    const errorBody = errorMessage;
    this.swalVolverConExclamacion(errorBody).then(result => {
      this.router.navigate([urlBack]);
    });
  }
  /** Metthod checks than if a parameter is null, undefined or blank **/
  isNullOrUndefinedOrBlank(param: any) {
    return (
      isNullOrUndefined(param) ||
      JSON.stringify(param) === '{}' ||
      param.toString() === ''
    );

  }

}
