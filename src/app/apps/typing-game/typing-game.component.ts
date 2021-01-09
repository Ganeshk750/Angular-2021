import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing-game',
  templateUrl: './typing-game.component.html',
  styleUrls: ['./typing-game.component.css']
})
export class TypingGameComponent implements OnInit {

  randomText: string;

  constructor() { }

  ngOnInit() {
    this.randomText = lorem.sentence();
  }

}
