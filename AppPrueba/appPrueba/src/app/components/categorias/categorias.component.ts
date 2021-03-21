import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { ICategoria } from '../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any;
  categoria: ICategoria[];
  categoriaid: any;

  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute, private aService: UiServiceService) {
    this.categorias = this.route.snapshot.paramMap.get('categoriaid');
   }

   async ngOnInit() {
    let respuesta = await this.categoriasService.getCategorias();
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
      console.log(this.categorias);
    }
  }

  async borrarcat(categoriaid){
    console.log(categoriaid);
    let respuesta = await this.categoriasService.delCategoria(categoriaid);
    console.log(respuesta);
    if (respuesta.status=='success'){
      this.aService.alertaborrado(categoriaid);
    }
  }
}
