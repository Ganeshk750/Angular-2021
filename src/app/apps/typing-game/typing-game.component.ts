import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing-game',
  templateUrl: './typing-game.component.html',
  styleUrls: ['./typing-game.component.css']
})
export class TypingGameComponent {

  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
