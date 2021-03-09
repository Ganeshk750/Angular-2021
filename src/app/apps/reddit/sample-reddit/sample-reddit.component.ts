import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-sample-reddit',
  templateUrl: './sample-reddit.component.html',
  styleUrls: ['./sample-reddit.component.css']
})
export class SampleRedditComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and Link ${link.value}`);
    return false;
  }

}
