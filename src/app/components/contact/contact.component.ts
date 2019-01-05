import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { EmailService } from 'src/app/services/email.service';
import { UtilsService } from 'src/utils/utils.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(public _EmailService: EmailService, public _UtilsService: UtilsService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

  }

  contactForm(form) {
    this.spinnerService.show();

    this._EmailService.sendMessage(form).subscribe(
      (res) => {
        if (res) {
          this.spinnerService.hide();
          swal('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
        }
      },
      (err) => {
        this.spinnerService.hide();
        this._UtilsService.handleError(err.status, err.error, '/contact');
      }
    );
  }

}
