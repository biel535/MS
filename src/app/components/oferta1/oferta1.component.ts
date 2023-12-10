import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta1',
  templateUrl: './oferta1.component.html',
  styleUrls: ['./oferta1.component.scss']
})
export class Oferta1Component implements OnInit {

  breakpoint!: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

}
