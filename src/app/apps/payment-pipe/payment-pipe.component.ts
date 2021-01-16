import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-pipe',
  templateUrl: './payment-pipe.component.html',
  styleUrls: ['./payment-pipe.component.css']
})
export class PaymentPipeComponent implements OnInit {

  name: string;
  date: string;
  amount: number;
  //custom pipes
  miles: number;

  constructor() { }

  ngOnInit() {
  }

  onChangeName(value: string) {
    this.name = value;
  }

  onChangeDate(value: string) {
    this.date = value;
  }

  onchangeAmount(value: number) {
    this.amount = value;
  }

  onchangeMiles(value: string) {
    this.miles = parseFloat(value);
  }
}
