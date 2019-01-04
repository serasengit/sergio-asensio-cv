import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { EmailService } from 'src/app/services/email.service';
import { UtilsService } from 'src/utils/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(public _EmailService: EmailService, public _UtilsService: UtilsService) { }

  ngOnInit() {
  }

  contactForm(form) {
    this._EmailService.sendMessage(form).subscribe(
      (resp) => {
        swal('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
      },
      (err) => {
        console.log('DDDDD' + JSON.stringify(err));
        this._UtilsService.handleError(err.status, err.error, '/contact');
      }
    );
  }

}
