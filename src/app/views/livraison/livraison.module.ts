import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonRoutingModule } from './livraison-routing.module';
import { LivraisonComponent } from './livraison.component';

@NgModule({
  declarations: [LivraisonComponent],
  imports: [
    CommonModule,
    LivraisonRoutingModule
  ]
})
export class LivraisonModule { }
