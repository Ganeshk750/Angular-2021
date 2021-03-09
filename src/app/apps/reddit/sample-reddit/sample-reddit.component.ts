import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-reddit',
  templateUrl: './sample-reddit.component.html',
  styleUrls: ['./sample-reddit.component.css']
})
export class SampleRedditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and Link ${link.value}`);
    return false;
  }

}
