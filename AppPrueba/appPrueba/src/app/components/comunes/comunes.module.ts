import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesRoutingModule } from './comunes-routing.module';
import { PortadaComponent } from './portada/portada.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PipesModule } from '../../pipes/pipes.module';
import { RegistroComponent } from './registro/registro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
  declarations: [HeaderComponent, LoginComponent, PortadaComponent, FaqComponent, InicioComponent,RegistroComponent, PopoverComponent],
  exports: [HeaderComponent, LoginComponent, PortadaComponent, FaqComponent, InicioComponent,RegistroComponent, PopoverComponent],
  imports: [
    CommonModule,
    ComunesRoutingModule,
    IonicModule,
    FormsModule,
    PipesModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ComunesModule { }
