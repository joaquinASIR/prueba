import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { ArticulosdetallesComponent } from './articuloscategorias/articulosdetalles/articulosdetalles.component';
import { ArticuloscategoriasComponent } from './articuloscategorias/articuloscategorias.component';

const routes: Routes = [{
  path: '', component: CategoriasComponent,
  children: [
        
  ]
},
{path: 'articulos/:categoriaid', component: ArticuloscategoriasComponent},
{path: 'articulos/:categoriaid/:articuloid', component: ArticulosdetallesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
