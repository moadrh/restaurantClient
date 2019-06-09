import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepasRoutingModule } from './repas-routing.module';
import { BoissonComponent } from './boisson.component';
import { RepasPrincipalComponent } from './repas-principal.component';
import { EntreeComponent } from './entree.component';
import { DessertComponent } from './dessert.component';

@NgModule({
  declarations: [
    BoissonComponent,
    RepasPrincipalComponent,
    EntreeComponent,
    DessertComponent
  ],
  imports: [
    CommonModule,
    RepasRoutingModule
  ]
})
export class RepasModule { }
