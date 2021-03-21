import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { ArticulosdetallesComponent } from './articuloscategorias/articulosdetalles/articulosdetalles.component';
import { ArticuloscategoriasComponent } from './articuloscategorias/articuloscategorias.component';
import { NewcategoriaComponent } from './newcategoria/newcategoria.component';
import { EditcategoriaComponent } from './editcategoria/editcategoria.component';

const routes: Routes = [{
  path: '', component: CategoriasComponent,
  children: [
        
  ]
},
{path: 'articulos/:categoriaid', component: ArticuloscategoriasComponent},
{path: 'articulos/:categoriaid/:articuloid', component: ArticulosdetallesComponent},
{path: 'newcategoria', component: NewcategoriaComponent},
{path: 'editcategoria/:categoriaid', component: EditcategoriaComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
