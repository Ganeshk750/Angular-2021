import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-com',
  templateUrl: './basic-com.component.html',
  styleUrls: ['./basic-com.component.css']
})
export class BasicComComponent implements OnInit {

  firstName: String = "Ganesh";
  lastName: String = "Kumar";
  age: number = 25;
  receivenewsletter: boolean = true;
  gender: String = "Male";
  country: String = "India";
  address: String = "http://www.github.com/Ganeshk750";

  constructor() { }

  ngOnInit() {
  }

  changeData() {
    this.firstName = "Java"
    this.lastName = "Developer";
    this.age = 26;
    this.receivenewsletter = false;
    this.gender = "Other";
    this.country = "USA";
    this.address = "http://www.oracal.org"
  }

}
