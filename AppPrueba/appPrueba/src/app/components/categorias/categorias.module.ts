import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ComunesModule,
    IonicModule
  ]
})
export class CategoriasModule { }
