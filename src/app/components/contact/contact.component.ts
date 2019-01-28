import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import swal from 'sweetalert';
import { EmailService } from 'src/app/services/email.service';
import { UtilsService } from 'src/utils/utils.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.scss']

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
  filesToUpload: Array<File> = [];

  constructor(public _EmailService: EmailService, public _UtilsService: UtilsService, private spinnerService: Ng4LoadingSpinnerService,
    private formBuilder: FormBuilder, private translate: TranslateService, private cd: ChangeDetectorRef
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
      filesToUpload: [new Array<File>()]
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }



  onSubmit(form) {
    // Show spinner
    this.spinnerService.show();
    // Attach Files
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for (let i = 0; i < files.length; i++) {
      formData.append('uploads[]', files[i], files[i]['name']);
    }
    formData.append('name', this.nameValue);
    formData.append('subject', this.subjectValue);
    formData.append('email', this.emailValue);
    formData.append('message', this.messageValue);
    // Send Email
    this._EmailService.sendMessage(formData, files)
      .subscribe(
        (res) => {
          if (res) {
            this.spinnerService.hide();
            swal(this.translate.instant('resultMessages.contactSection.contactForm'),
              this.translate.instant('resultMessages.contactSection.mailOK'), 'success');
          }
        },
        (err) => {
          this.spinnerService.hide();
          this._UtilsService.handleError(err.status, err.error, '/contact');
        }
      );
  }


}
