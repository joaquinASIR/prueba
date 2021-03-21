import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeseadosComponent } from './deseados.component';

const routes: Routes = [{
  path: 'deseados', component: DeseadosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeseadosRoutingModule { }
