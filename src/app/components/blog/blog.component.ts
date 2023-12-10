import { Component } from '@angular/core';
import { artykuly } from 'src/app/artykul-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  artykulList = artykuly;
}
