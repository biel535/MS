import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artykul',
  templateUrl: './artykul.component.html',
  styleUrls: ['./artykul.component.scss']
})
export class ArtykulComponent {
  @Input() artykul: any;
}
