import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CabeceraService } from 'src/app/services/cabecera.service';
import { APP_SECTION_CV } from 'src/app/config/config.constants';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent implements OnInit, AfterViewInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService, public cabeceraService: CabeceraService) {
    this.cabeceraService.setSection(APP_SECTION_CV);

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

}
