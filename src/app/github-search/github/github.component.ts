import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  usersList = [];

  constructor(private _shardService: SharedService) {
    this._shardService.getUserData().subscribe(data => {
      this.usersList = data;
      console.log('usersList => ', this.usersList);
    })
  }

  ngOnInit() {
  }

}
