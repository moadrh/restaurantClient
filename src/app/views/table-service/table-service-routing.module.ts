import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableServiceComponent } from './table-service.component';

const routes: Routes = [{
  path: '',
  component: TableServiceComponent,
  data: {
    title: 'Table service'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableServiceRoutingModule { }
