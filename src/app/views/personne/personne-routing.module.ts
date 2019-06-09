import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { AdministrateurComponent } from './administrateur.component';
import { ServeurComponent } from './serveur.component';
import { LivreurComponent } from './livreur.component';
import { CuisinierComponent } from './cuisinier.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Personnel'
  },
  children: [
    {
      path: '',
      redirectTo: 'client'
    },
    {
      path: 'client',
      component: ClientComponent,
      data: {
        title: 'Clients'
      }
    },
    {
      path: 'administrateur',
      component: AdministrateurComponent,
      data: {
        title: 'Administrateurs'
      }
    },
    {
      path: 'serveur',
      component: ServeurComponent,
      data: {
        title: 'Serveurs'
      }
    },
    {
      path: 'livreur',
      component: LivreurComponent,
      data: {
        title: 'Livreurs'
      }
    },
    {
      path: 'cuisinier',
      component: CuisinierComponent,
      data: {
        title: 'Cuisiniers'
      }
    }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
