import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpInterceptorService } from './shared/interceptor/http-interceptor.service';
import { AuthGuard } from './shared/gaurds/auth-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],

  providers: [AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
