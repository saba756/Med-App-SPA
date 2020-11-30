import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
               DashboardComponent,
              AdminLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    NgbModule,
    ToastrModule,
    AdminLayoutRoutes
  ]
})

export class AdminLayoutModule {}
