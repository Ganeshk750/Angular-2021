import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-pipe',
  templateUrl: './payment-pipe.component.html',
  styleUrls: ['./payment-pipe.component.css']
})
export class PaymentPipeComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeName(value: string){
    this.name = value;
  }

}
