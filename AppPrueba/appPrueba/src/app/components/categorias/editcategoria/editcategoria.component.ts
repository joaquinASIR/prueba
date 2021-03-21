import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategoria',
  templateUrl: './editcategoria.component.html',
  styleUrls: ['./editcategoria.component.scss'],
})
export class EditcategoriaComponent implements OnInit {

  public categoriaid: string; 
  nombre_categoria: any;
  logo: any;


  constructor(private categoriasService: CategoriasService, private navController: NavController, private messService: UiServiceService, private route: ActivatedRoute) {
    this.categoriaid = this.route.snapshot.paramMap.get('categoriaid');
   }

  ngOnInit() {}

  async updCategoria(fEditCategoria) {

    if (fEditCategoria.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.categoriasService.updCategoria(this.categoriaid, this.logo, this.nombre_categoria);
    
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
