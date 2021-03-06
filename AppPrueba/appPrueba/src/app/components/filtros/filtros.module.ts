import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrosComponent } from './filtros.component';
import { ComunesModule } from '../comunes/comunes.module';


@NgModule({
  declarations: [FiltrosComponent],
  exports: [FiltrosComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ComunesModule
  ]
})
export class FiltrosModule { }
