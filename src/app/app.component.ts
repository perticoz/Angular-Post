import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon BLog & Moi';

  date = new Date();
  postList = [
  new Post ('Mon Premier Post', 'lorem ipsum', 0, this.date),
  new Post ('Mon Deuxième Post', 'lorem ipsum', 0, this.date),
  new Post ('Un Autre Post', 'lorem ipsum', 0, this.date)
  ];

}