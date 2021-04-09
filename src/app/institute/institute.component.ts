import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  instituteName: string = "Web Devlopment";

  @ViewChild(StudentComponent) stud: StudentComponent;

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    console.log(this.stud);
    this.stud.studentName = "Vivek";
  }

}
