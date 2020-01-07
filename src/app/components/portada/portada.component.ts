import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CabeceraService } from 'src/app/services/cabecera.service';
import { APP_SECTION_HOME } from 'src/app/config/config.constants';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html'
})
export class PortadaComponent implements OnInit, AfterViewInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService, public cabeceraService: CabeceraService, private router: Router) {
    this.cabeceraService.setSection(APP_SECTION_HOME);

  }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }


}
