import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta2',
  templateUrl: './oferta2.component.html',
  styleUrls: ['./oferta2.component.scss']
})
export class Oferta2Component implements OnInit {

  breakpoint!: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  isWindowWidthUnder1000() {
    return window.innerWidth <= 1300;
  }
}
