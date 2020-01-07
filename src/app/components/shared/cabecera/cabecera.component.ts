import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabeceraService } from 'src/app/services/cabecera.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent implements OnInit {


  constructor(private translate: TranslateService, private router: Router, public cabeceraService: CabeceraService) {
    translate.setDefaultLang('en');
  }
  ngOnInit() {
  }

  // CONTROLLER METHODS

  // Website Language Changing
  useLanguage(language: string) {
    this.translate.use(language);
  }

  // Section Changing
  changeSection(sectionClicked: string) {
    this.router.navigate([sectionClicked]);
  }


}
