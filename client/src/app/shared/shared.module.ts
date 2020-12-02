import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AccountsFooterComponent } from './components/accounts-footer/accounts-footer.component';
import { AccountsHeaderComponent } from './components/accounts-header/accounts-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SideBarComponent,
    AccountsFooterComponent,
    AccountsHeaderComponent
  ],
  exports:
  [FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    NavbarComponent,
    SideBarComponent,
    AccountsFooterComponent,
    AccountsHeaderComponent
  ]
})
export class SharedModule { }
