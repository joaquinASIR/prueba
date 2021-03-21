import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../../Interfaces/ArticulosInterface';
import { CategoriasService } from '../../../services/categorias.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';

@Component({
  selector: 'app-newcategoria',
  templateUrl: './newcategoria.component.html',
  styleUrls: ['./newcategoria.component.scss'],
})
export class NewcategoriaComponent implements OnInit {

  newcategoria: ICategoria ={
    categoriaid: 0,
    nombre_categoria: 'otros',
    logo: 'otros.png'
  }

  constructor(private categoriasService: CategoriasService, private navController: NavController, private messService: UiServiceService) { }

  ngOnInit() {}

  async agregarc(fAgregarc) {

    if (fAgregarc.invalid) { return; }
    
    const peticion = await this.categoriasService.newCategoria( this.newcategoria);
    
    if ( peticion.status == 'success' ){
     this.messService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('categorias', { animated: true });
      } 
    else {
    console.log(peticion);
    this.messService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

}
