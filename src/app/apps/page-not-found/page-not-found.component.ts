import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  private redirectCount = 10;

  constructor(private _router: Router) { }


  ngOnInit() {
   /*  setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount <= 0) {
        this._router.navigate(['']);
      }
    }, 1000); */
  }

 /*  get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting....';
    }
    return `Redirecting you to home page in ${this.redirectCount}`;
  } */

}
