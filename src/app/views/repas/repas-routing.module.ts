import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepasPrincipalComponent } from './repas-principal.component';
import { EntreeComponent } from './entree.component';
import { DessertComponent } from './dessert.component';
import { BoissonComponent } from './boisson.component';

const routes: Routes = [{
 path: '',
 data: {
  title: 'Repas'
},
children: [
  {
    path: '',
    redirectTo: 'repas-principal'
  },
  {
    path: 'repas-principal',
    component: RepasPrincipalComponent,
    data: {
      title: 'Repas principal'
    }
  },
  {
    path: 'entree',
    component: EntreeComponent,
    data: {
      title: 'Entrees'
    }
  },
  {
    path: 'dessert',
    component: DessertComponent,
    data: {
      title: 'Desserts'
    }
  },
  {
    path: 'boisson',
    component: BoissonComponent,
    data: {
      title: 'Boissons'
    }
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepasRoutingModule { }
