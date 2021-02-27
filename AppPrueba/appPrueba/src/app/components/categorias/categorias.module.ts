import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { ArticuloscategoriasComponent } from './articuloscategorias/articuloscategorias.component';
import { ArticulosdetallesComponent } from './articuloscategorias/articulosdetalles/articulosdetalles.component';


@NgModule({
  declarations: [CategoriasComponent, ArticuloscategoriasComponent, ArticulosdetallesComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ComunesModule,
    IonicModule
  ]
})
export class CategoriasModule { }
