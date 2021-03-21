import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { IonicModule } from '@ionic/angular';
import { ComunesModule } from '../comunes/comunes.module';
import { ArticulosdetallesComponent } from './articulosdetalles/articulosdetalles.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ArticulosComponent, ArticulosdetallesComponent],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    IonicModule,
    ComunesModule,
    FormsModule
  ]
})
export class ArticulosModule { }
