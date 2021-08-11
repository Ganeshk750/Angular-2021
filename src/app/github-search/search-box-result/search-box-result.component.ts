import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-box-result',
  templateUrl: './search-box-result.component.html',
  styleUrls: ['./search-box-result.component.css']
})
export class SearchBoxResultComponent implements OnInit {

  usersList = [];

  constructor(private _shardService: SharedService) {
    this._shardService.getUserData().subscribe(data => {
      this.usersList = data;
      console.log('usersList => ', this.usersList);
    })

  }

  ngOnInit(): void {
  }

}
