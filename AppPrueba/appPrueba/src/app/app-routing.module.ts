import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/comunes/portada/portada.component';
import { LoginComponent } from './components/comunes/login/login.component';
import { FaqComponent } from './components/comunes/faq/faq.component';
import { InicioComponent } from './components/comunes/inicio/inicio.component';
import { RegistroComponent } from './components/comunes/registro/registro.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'portada', pathMatch: 'full'
  },
  {
    path: 'portada', component: PortadaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: '',
    loadChildren: () => import('./components/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: 'marcas',
    loadChildren: () => import('./components/marcas/marcas.module').then(m => m.MarcasModule)
  },
  {
    path: 'articulos',
    loadChildren: () => import('./components/articulos/articulos.module').then(m => m.ArticulosModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/categorias/categorias.module').then(m => m.CategoriasModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/filtros/filtros.module').then( m => m.FiltrosModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/deseados/deseados.module').then( m => m.DeseadosModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
