import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { ClientComponent } from './client.component';
import { AdministrateurComponent } from './administrateur.component';
import { ServeurComponent } from './serveur.component';
import { LivreurComponent } from './livreur.component';
import { CuisinierComponent } from './cuisinier.component';
import { ServeurService } from './serveur.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ClientComponent,
    AdministrateurComponent,
    ServeurComponent,
    LivreurComponent,
    CuisinierComponent
  ],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationsModule,
    ModalModule
  ],
  providers :[
    ServeurService
  ]
})
export class PersonneModule { }
