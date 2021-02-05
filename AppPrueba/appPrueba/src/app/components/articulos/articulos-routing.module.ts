import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos.component';

const routes: Routes = [{path: 'articulos', component: ArticulosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
