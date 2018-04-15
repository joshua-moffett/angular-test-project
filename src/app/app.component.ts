import { Component } from '@angular/core';

import { columns } from './data/columns';
import { posts } from './data/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columns = columns;
  posts = posts;

}
