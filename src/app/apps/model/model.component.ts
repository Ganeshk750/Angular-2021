import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Output()
  onClose = new EventEmitter();

  @Input()
  selected: string = '';

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.onClose.emit(null);
  }

  selectedItem() {
    this.onClose.emit(this.selected);
    console.log('Selectd Value => '+ this.selected)
  }

}
