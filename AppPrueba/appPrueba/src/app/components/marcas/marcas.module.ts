import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { MarcasComponent } from './marcas.component';


@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    ComunesModule,
    IonicModule
  ]
})
export class MarcasModule { }
