import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import {
  SECTION_PERSONAL_DATA, SECTION_PROFILE, SECTION_EDUCATION,
  SECTION_LANGUAGES, SECTION_SOFTWARE_TOOLS,
  SECTION_WORK_EXPERIENCE, SECTION_TRAINING_COURSES, SECTION_CERTIFICATIONS, SECTION_PUBLICATIONS
} from 'src/app/config/config.constants';


@Component({
  selector: 'app-menu-cv',
  templateUrl: './menu-cv.component.html',
  styleUrls: ['./menu-cv.component.scss']
})
export class MenuCvComponent implements OnInit {
  section: string;

  constructor(private translate: TranslateService) {
    this.section = SECTION_PERSONAL_DATA;
  }

  ngOnInit() {
  }
  // Activate and Deactivate Sidebar
  showHideSideVar() {
    $('#sidebar').toggleClass('active');
  }
  // Menu Section Changing
  changeSection(sectionClicked: string) {
    if (sectionClicked !== SECTION_WORK_EXPERIENCE) {
      this.scrollTo(sectionClicked);
    }
    this.section = sectionClicked;
  }
  // Scroll to CV Section Function
  scrollTo(sectionClicked: string) {
    if (sectionClicked === SECTION_TRAINING_COURSES ||
      sectionClicked === SECTION_CERTIFICATIONS ||
      sectionClicked === SECTION_PUBLICATIONS ||
      this.sectionNumber(sectionClicked) <= this.sectionNumber(this.section)) {
      $('html').animate({ scrollTop: ($('html').scrollTop() + $('#' + sectionClicked).position().top) }, 500);
    }
    $('main').animate({ scrollTop: ($('main').scrollTop() + $('#' + sectionClicked).position().top) }, 500);
  }
  // Gives the CV Section Order Number
  sectionNumber(section: string): number {
    let number;
    if (section === SECTION_PERSONAL_DATA) {
      number = 0;
    } else if (section === SECTION_PROFILE) {
      number = 1;
    } else if (section === SECTION_EDUCATION) {
      number = 2;
    } else if (section === SECTION_LANGUAGES) {
      number = 3;
    } else if (section === SECTION_SOFTWARE_TOOLS) {
      number = 4;
    } else if (section === SECTION_WORK_EXPERIENCE) {
      number = 5;
    } else if (section === SECTION_TRAINING_COURSES) {
      number = 6;
    } else if (section === SECTION_CERTIFICATIONS) {
      number = 7;
    } else if (section === SECTION_PUBLICATIONS) {
      number = 8;
    }
    return number;
  }

}
