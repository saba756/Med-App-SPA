import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { IAddress } from "../shared/models/address";
import { IFilter } from "../shared/models/filter";



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,
               private cookieService: CookieService,
              private router: Router){}


              getUsersList(filter: IFilter){
                console.log(this.baseUrl +'user/' + '?' + this.toQueryString(filter));
  return this.http.get(this.baseUrl +'user/' + '?' + this.toQueryString(filter));

              }
              toQueryString(obj){
                var parts =[];
                for(var property in obj){
                  var value = obj[property];
                  if(value !== null && value !== undefined)
                  parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
                }
                return parts.join('&');
              }
  }
