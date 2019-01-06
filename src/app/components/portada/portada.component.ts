import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html'
})
export class PortadaComponent implements OnInit, AfterViewInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

}
