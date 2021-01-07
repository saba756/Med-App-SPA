import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private cookieService: CookieService) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   const token = this.cookieService.get('access-token');

  //   if (token) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     });
  //   }
  //   return next.handle(request);
  // }
}
