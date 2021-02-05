import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './marcas.component';

const routes: Routes = [{
  path: 'marcas', component: MarcasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
