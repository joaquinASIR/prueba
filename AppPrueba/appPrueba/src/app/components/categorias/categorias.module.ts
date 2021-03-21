import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { ArticuloscategoriasComponent } from './articuloscategorias/articuloscategorias.component';
import { ArticulosdetallesComponent } from './articuloscategorias/articulosdetalles/articulosdetalles.component';
import { NewcategoriaComponent } from './newcategoria/newcategoria.component';
import { FormsModule } from '@angular/forms';
import { EditcategoriaComponent } from './editcategoria/editcategoria.component';


@NgModule({
  declarations: [CategoriasComponent, ArticuloscategoriasComponent, ArticulosdetallesComponent, NewcategoriaComponent, EditcategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ComunesModule,
    IonicModule,
    FormsModule
  ]
})
export class CategoriasModule { }
