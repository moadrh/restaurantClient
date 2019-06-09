import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    ReactiveFormsModule,
    NotificationsModule,
    ModalModule
  ]
})
export class TableModule { }
