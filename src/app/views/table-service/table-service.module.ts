import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableServiceRoutingModule } from './table-service-routing.module';
import { TableServiceComponent } from './table-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [TableServiceComponent],
  imports: [
    CommonModule,
    TableServiceRoutingModule,
    ReactiveFormsModule,
    NotificationsModule,
    ModalModule
  ]
})
export class TableServiceModule { }
