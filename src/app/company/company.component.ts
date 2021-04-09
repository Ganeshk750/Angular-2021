import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyName: string = "Infotech Company"
  @ViewChildren(EmployeeComponent) emp: QueryList<EmployeeComponent>
  
  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
    console.log(this.emp);
    let arr = this.emp.toArray();
    for(let i = 0; i <arr.length; i++){
       arr[i].employeeName = "Shashi";
    }
  }

}
