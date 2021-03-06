import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './filtros.component';

const routes: Routes = [{
  path: 'filters', component: FiltrosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
