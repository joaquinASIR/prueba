import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { IonicModule } from '@ionic/angular';
import { ComunesModule } from '../comunes/comunes.module';
import { PerfilComponent } from './perfil.component';


@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    IonicModule,
    ComunesModule
  ]
})
export class PerfilModule { }
