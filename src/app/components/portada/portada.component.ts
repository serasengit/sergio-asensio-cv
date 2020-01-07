import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CabeceraService } from 'src/app/services/cabecera.service';
import { APP_SECTION_HOME } from 'src/app/config/config.constants';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html'
})
export class PortadaComponent implements OnInit, AfterViewInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService, private cabeceraService: CabeceraService) {
    this.cabeceraService.setSection(APP_SECTION_HOME);

  }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }

}
