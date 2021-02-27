import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../../services/articulos.service';
import { IArticulo } from '../../../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulosdetalles',
  templateUrl: './articulosdetalles.component.html',
  styleUrls: ['./articulosdetalles.component.scss'],
})
export class ArticulosdetallesComponent implements OnInit {

  public articuloid: string;
  public articulos: IArticulo;
  favorito: {};

  constructor(private articulosService: ArticulosService, private route: ActivatedRoute) {
    this.articuloid = this.route.snapshot.paramMap.get('articuloid');
   }

  async ngOnInit() {
    let respuesta = await this.articulosService.showArticulos(this.articuloid); 
    this.articulos = respuesta.data;
    console.log(this.articulos);
  }

}
