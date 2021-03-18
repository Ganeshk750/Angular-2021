import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-parent',
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.css']
})
export class CardParentComponent implements OnInit {

   counter: number = 0;
  classToSet: string = 'positive';

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
      //counter: 5
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
      //counter: 6
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
      //counter: 8
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    }

  ];

  constructor() { }

  ngOnInit() {

  }

  onCounterChange(buttonType: string) {
     buttonType === 'INC' ? this.counter++ : this.counter--;
    this.classToSet = this.counter >= 0 ? 'positive' : 'negative';
  }

}
