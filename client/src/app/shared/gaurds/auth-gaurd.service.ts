import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { JwtHelperService} from '@auth0/angular-jwt'
import { AccountService } from "src/app/accounts/accounts.service";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IToken } from "../models/token";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper= new JwtHelperService();
  baseUrl = environment.apiUrl;
  token: IToken = <IToken>{};

  constructor(private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private authService: AccountService) {
      // console.log("in auth guard ");
      // console.log("hi",this.decodeToken)
     }

  async canActivate() {
   const  accessToken = this.cookieService.get('access-token');
   if (accessToken && !this.jwtHelper.isTokenExpired(accessToken)) {
    console.log(this.jwtHelper.decodeToken(accessToken));
    return true;
  }
    const isRefreshSuccess = await this.tryRefreshingTokens();
    console.log(" isRefreshSuccess ", isRefreshSuccess)
    if (!isRefreshSuccess) {

      this.router.navigate(["/account"]);

    return isRefreshSuccess;
  }
  }

private async  tryRefreshingTokens() {

    // Try refreshing tokens using refresh token
    const refreshToken = this.cookieService.get('refresh-token');
    const  accessToken = this.cookieService.get('access-token');
    const decodeToken=this.jwtHelper.decodeToken(accessToken);
    //console.log("accessToken", accessToken, "\nrefreshToken", refreshToken, " decodeToken.exp ", decodeToken.exp)
    if (!accessToken || !refreshToken) {
      return false;
    }

    this.token.accessToken= accessToken;
    this.token.refreshToken = refreshToken;
    this.token.email= decodeToken.email;
    const expireTime = new Date(0);
    expireTime.setUTCSeconds(decodeToken.exp);
    this.token.refreshTokenExpiryTime  = expireTime;
    this.token.userType= decodeToken.role
    console.log(decodeToken)
    let isRefreshSuccess: boolean;
    try {
      // console.log(this.baseUrl + 'token/refresh', " time ",this.token.refreshTokenExpiryTime , decodeToken.exp)
      const response = await this.http.post(this.baseUrl + 'token/refresh',this.token, {headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    });
    response.subscribe((user: any) =>{
      if (user){
        console.log("hiii",user);
        this.cookieService.set('access-token', user.accessToken)
        this.cookieService.set('refresh-token',user.refreshToken);
        isRefreshSuccess = true;

      }else {
        isRefreshSuccess = false;
      }
    })

    }

    catch (ex) {
      console.log(ex);
      isRefreshSuccess = false;
    }
    return isRefreshSuccess;
  }

}

