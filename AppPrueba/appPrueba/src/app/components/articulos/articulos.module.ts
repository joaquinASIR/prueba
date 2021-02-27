import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { IonicModule } from '@ionic/angular';
import { ComunesModule } from '../comunes/comunes.module';
import { ArticulosdetallesComponent } from './articulosdetalles/articulosdetalles.component';


@NgModule({
  declarations: [ArticulosComponent, ArticulosdetallesComponent],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    IonicModule,
    ComunesModule
  ]
})
export class ArticulosModule { }
