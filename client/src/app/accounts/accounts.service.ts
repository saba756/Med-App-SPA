import { IAddress } from './../shared/models/address';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, ReplaySubject} from 'rxjs';
import { map} from 'rxjs/operators';
import {IUser} from './../shared/models/user';
import {environment} from './../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient,
             private cookieService: CookieService,
            private router: Router){}

login(values: any){
  return this.http.post(this.baseUrl + 'account/login', values).pipe(
    map((user: IUser) => {
      if (user){
        console.log("user is", user)
        this.cookieService.set('access-token', user.accessToken)
        this.cookieService.set('refresh-token', user.refreshToken)
        // localStorage.setItem('access-token', user.accessToken);
        // localStorage.setItem('refresh-token', user.refreshToken);
        return user;
        //this.currentUserSource.next(user);
      }
    })
  );
}

register(values: any){
  return this.http.post(this.baseUrl +'account/register', values).pipe(
    map((user: IAddress) => {
      if (user){
        this.cookieService.set('access-token', user.accessToken)
        this.cookieService.set('refresh-token', user.refreshToken)
        return user
       // this.currentUserSource.next(user);
      }
    })
  );
}

logout(){
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
//this.currentUserSource.next(null);
  this.router.navigateByUrl('/');
}
}
