import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { MarcasComponent } from './marcas.component';
import { ArticulosmarcasComponent } from './articulosmarcas/articulosmarcas.component';
import { ArticulosdetallesComponent } from './articulosmarcas/articulosdetalles/articulosdetalles.component';


@NgModule({
  declarations: [MarcasComponent, ArticulosmarcasComponent, ArticulosdetallesComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    ComunesModule,
    IonicModule
  ]
})
export class MarcasModule { }
