import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivraisonComponent } from './livraison.component';

const routes: Routes = [{
  path: '',
  component: LivraisonComponent,
  data: {
    title: 'Livraison'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutingModule { }
