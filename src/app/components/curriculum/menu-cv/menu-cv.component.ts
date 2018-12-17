import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-menu-cv',
  templateUrl: './menu-cv.component.html',
  styleUrls: ['./menu-cv.component.scss']
})
export class MenuCvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showHideSideVar() {
    $('#sidebar').toggleClass('active');
  }

}
