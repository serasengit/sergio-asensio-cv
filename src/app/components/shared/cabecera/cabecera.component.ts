import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent implements OnInit {
  section: string;


  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    this.section = '';
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
    this.section = sectionClicked;
    this.router.navigate([sectionClicked]);
  }


}
