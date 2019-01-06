import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { EmailService } from 'src/app/services/email.service';
import { UtilsService } from 'src/utils/utils.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  name: AbstractControl;
  nameValue: string;
  subject: AbstractControl;
  subjectValue: string;
  email: AbstractControl;
  emailValue: string;
  message: AbstractControl;
  messageValue: string;


  constructor(public _EmailService: EmailService, public _UtilsService: UtilsService, private spinnerService: Ng4LoadingSpinnerService,
    private formBuilder: FormBuilder, private translate: TranslateService,
  ) { }

  ngOnInit() {

    this.myForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ],
      subject: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(80),
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}$')
        ])],
      message: [
        '',
        Validators.compose([Validators.required])
      ],
    });
    this.name = this.myForm.controls['name'];
    this.nameValue = '';
    this.subject = this.myForm.controls['subject'];
    this.subjectValue = '';
    this.email = this.myForm.controls['email'];
    this.emailValue = '';
    this.message = this.myForm.controls['message'];
    this.messageValue = '';
  }

  onSubmit(form) {
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
