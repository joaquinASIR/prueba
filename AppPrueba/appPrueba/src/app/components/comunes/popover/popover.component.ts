import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IFiltrosArticulos } from '../../../Interfaces/FiltrosInterface';
import { MarcasService } from '../../../services/marcas.service';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public IFiltros: IFiltrosArticulos = {
     precios: [],
     marcas: []
   };

   marcas: any;
   categorias: any;

  constructor(private marcasService: MarcasService, private categoriasService: CategoriasService) { }

  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
   this.IFiltros.precios[0] = precio.detail.value.lower;
   this.IFiltros.precios[1] = precio.detail.value.upper;

  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    this.marcas = respuesta.data;
    console.log(respuesta);
    let respuestaa = await this.categoriasService.getCategorias();
    this.categorias = respuestaa.data;
    console.log(respuestaa);
    
  }

}
