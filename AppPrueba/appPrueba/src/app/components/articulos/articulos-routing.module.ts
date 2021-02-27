import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos.component';
import { ArticulosdetallesComponent } from '../articulos/articulosdetalles/articulosdetalles.component';

const routes: Routes = [
  {
    path: '', component: ArticulosComponent,
      children: [
        
      ]
  },
  {path: ':articuloid', component: ArticulosdetallesComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
