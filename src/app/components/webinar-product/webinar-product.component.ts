import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-webinar-product',
  templateUrl: './webinar-product.component.html',
  styleUrls: ['./webinar-product.component.scss']
})
export class WebinarProductComponent {
  @Input() webinar: any;

}
