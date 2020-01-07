import { Component, OnInit } from '@angular/core';
import { CabeceraService } from 'src/app/services/cabecera.service';
import { APP_SECTION_PROGRAMMING_AREA } from 'src/app/config/config.constants';

@Component({
  selector: 'app-programming-area',
  templateUrl: './programming-area.component.html',
  styleUrls: ['./programming-area.component.scss']

})
export class ProgrammingAreaComponent implements OnInit {

  constructor(private cabeceraService: CabeceraService) {
    this.cabeceraService.setSection(APP_SECTION_PROGRAMMING_AREA);

  }

  ngOnInit() {
  }

}
