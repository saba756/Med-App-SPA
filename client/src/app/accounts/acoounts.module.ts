import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './accounts.rounting';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AccountModule { }
