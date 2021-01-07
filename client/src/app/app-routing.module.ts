import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {AccountComponent} from './accounts/account.component';
import { AuthGuard } from './shared/gaurds/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./admin-layout/admin-layout.module').then(
        (mod) => mod.AdminLayoutModule
      ),
  },

  {
    path: 'account',
    component: AccountComponent,
    loadChildren: () =>
      import('./accounts/acoounts.module').then((mod) => mod.AccountModule),
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
