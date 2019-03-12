import { Component, OnInit, AfterContentChecked, HostListener, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from 'src/utils/utils.service';

@Component({
  selector: 'app-menu-cv',
  templateUrl: './menu-cv.component.html',
  styleUrls: ['./menu-cv.component.scss']
})
export class MenuCvComponent implements OnInit, AfterContentChecked, AfterViewInit {
  language: string;
  constructor(private translate: TranslateService, private _UtilsService: UtilsService) {
    this.language = !this._UtilsService.isNullOrUndefinedOrBlank(this.translate.currentLang)
      ? this.translate.currentLang : this.translate.getDefaultLang();

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngAfterContentChecked() {
    //  Save language app changed
    this.language = !this._UtilsService.isNullOrUndefinedOrBlank(this.translate.currentLang)
      ? this.translate.currentLang : this.translate.getDefaultLang();
  }
  // Activate and Deactivate Sidebar
  showHideSideVar() {
    $('#sidebar').toggleClass('active');
    $('#sidebarActivator').toggleClass('active');
    $('#main').toggleClass('active');
  }
  // Menu Section Changing
  changeSection(sectionClicked: string, $event) {
    $event.preventDefault();
    this.scrollTo(sectionClicked);
  }
  // Scroll to CV Section Function
  scrollTo(sectionClicked: string) {
    $('html, body').animate({
      scrollTop: $('#' + sectionClicked).position().top
    }, 500);
  }


}
