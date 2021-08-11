import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  @ViewChild('textField') txtField: ElementRef;

  searchSubcription: Subscription

  constructor(private _apiService: ApiService, private _sharedService: SharedService) { }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getSearchValue();
  }

  getSearchValue(): void {
    this.searchSubcription = fromEvent<any>(this.txtField.nativeElement, 'keyup')
      .pipe(
        // Time for Key events
        debounceTime(1000),
        map(event => event.target.value),
        distinctUntilChanged(),
        switchMap(val => this._apiService.getUsersByLocation(val))
      )
      .subscribe(data => {
        this._sharedService.setUserData(data.items);
      })
  }

}
