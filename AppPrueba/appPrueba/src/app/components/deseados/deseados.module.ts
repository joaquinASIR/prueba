import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeseadosRoutingModule } from './deseados-routing.module';
import { DeseadosComponent } from './deseados.component';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [DeseadosComponent],
  imports: [
    CommonModule,
    DeseadosRoutingModule,
    ComunesModule,
    IonicModule
  ]
})
export class DeseadosModule { }
