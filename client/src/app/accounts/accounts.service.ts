import { IAddress } from './../shared/models/address';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, ReplaySubject} from 'rxjs';
import { map} from 'rxjs/operators';
import {IUser} from './../shared/models/user';
import {environment} from './../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient,
            private router: Router){}

login(values: any){
  return this.http.post(this.baseUrl + 'account/login', values).pipe(
    map((user: IUser) => {
      if (user){
        localStorage.setItem('token', user.token);
        //this.currentUserSource.next(user);
      }
    })
  );
}

register(values: any){
  // debugger
  return this.http.post(this.baseUrl + 'account/register', values).pipe(
    map((user: IAddress) => {
      if (user){
        localStorage.setItem('token', user.token);
       // this.currentUserSource.next(user);
      }
    })
  );
}
logout(){
  localStorage.removeItem('token');
//this.currentUserSource.next(null);
  this.router.navigateByUrl('/');
}
}
