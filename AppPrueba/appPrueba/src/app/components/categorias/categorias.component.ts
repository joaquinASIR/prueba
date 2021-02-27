import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { ICategoria } from '../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any;
  categoria: ICategoria[];

  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute) {
    this.categorias = this.route.snapshot.paramMap.get('categoriaid');
   }

   async ngOnInit() {
    let respuesta = await this.categoriasService.getCategorias();
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
      console.log(this.categorias);
    }
  }


}
