import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://api.github.com/search/user?=';

  constructor(private _http: HttpClient) { }


  getUsersByLocation(country: string): Observable<any> {
    return this._http.get<any>(this.API_URL + 'location:' + country)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      )
  }

}