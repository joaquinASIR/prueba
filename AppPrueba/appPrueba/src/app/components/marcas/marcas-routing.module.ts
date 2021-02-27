import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './marcas.component';
import { ArticulosmarcasComponent } from './articulosmarcas/articulosmarcas.component';
import { ArticulosdetallesComponent } from './articulosmarcas/articulosdetalles/articulosdetalles.component';

const routes: Routes = [
  {
    path: '', component: MarcasComponent,
      children: [
        
      ]
  },
  {path: 'articulos/:marcaid', component: ArticulosmarcasComponent},
  {path: 'articulos/:marcaid/:articuloid', component: ArticulosdetallesComponent}
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
