import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';
 

  @Output() counterChange: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  handleButton(operation: string) {
    this.counterChange.emit(operation);
    console.log(operation);
  }

}
