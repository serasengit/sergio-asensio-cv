import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu-cv',
  templateUrl: './menu-cv.component.html',
  styleUrls: ['./menu-cv.component.scss']
})
export class MenuCvComponent implements OnInit {
  section: string;

  constructor(private translate: TranslateService) {
    this.section = 'personalData';
  }

  ngOnInit() {
  }
  showHideSideVar() {
    $('#sidebar').toggleClass('active');
  }
  // Menu Section Changing
  changeSection(sectionClicked: string) {
    if (sectionClicked !== this.section) {
      this.section = sectionClicked;
      this.scrollTo(sectionClicked);
    }
  }
  scrollTo(sectionClicked: string) {
    $('main').animate({ scrollTop: ($('main').scrollTop() + $('#' + sectionClicked).position().top) }, 500);
  }

}
