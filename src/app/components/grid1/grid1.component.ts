import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class Grid1Component implements OnInit {

    breakpoint!: number;
    constructor() { }

    ngOnInit() {
      this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
    }

    onResize(event: any) {
      this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
    }

}

