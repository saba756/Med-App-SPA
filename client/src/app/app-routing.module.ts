import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';

const routes: Routes =[

  {path: '', loadChildren : () => import('./admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)},
  {path: 'account', loadChildren : () => import('./accounts/acoounts.module').then(mod => mod.AccountModule)},
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // }]},

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
