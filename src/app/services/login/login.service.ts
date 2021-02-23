import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from 'src/app/model/logindetails.model';
import { UserCredentials } from '../index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getLoginDetails(): Observable<LoginDetails[]> {
    return new Observable((observer) => {
      observer.next(UserCredentials)
    });
  }
}
