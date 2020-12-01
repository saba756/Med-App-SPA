import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AccountsNavbarComponent } from './components/accounts-navbar/accounts-navbar.component';
import { AccountsFooterComponent } from './components/accounts-footer/accounts-footer.component';
import { AccountsHeaderComponent } from './components/accounts-header/accounts-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SideBarComponent,
    AccountsNavbarComponent,
    AccountsFooterComponent,
    AccountsHeaderComponent
  ],
  exports:
  [FormsModule,
    FooterComponent,
    NavbarComponent,
    SideBarComponent,
    AccountsNavbarComponent,
    AccountsFooterComponent,
    AccountsHeaderComponent
  ]
})
export class SharedModule { }
