import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postDate;
  @Input() loveIts;
  constructor() { }

  like: number = 0;
  dislike: number = 0;

  ngOnInit() {
  }
  
  onLike() {
    this.loveIts ++;
    this.like ++;
  }
  onDislike() {
    this.loveIts --;
    this.dislike ++;
  }

}
