import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private userData = new Subject<any>();

  setUserData(data: string): void {
    this.userData.next(data);
  }

  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }
}
