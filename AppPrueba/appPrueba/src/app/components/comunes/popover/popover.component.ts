import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IFiltrosArticulos } from '../../../Interfaces/FiltrosInterface';
import { MarcasService } from '../../../services/marcas.service';
import { CategoriasService } from '../../../services/categorias.service';
import { IMarca, ICategoria } from '../../../Interfaces/ArticulosInterface';
import { FiltrosarticulosService } from 'src/app/services/filters/filtrosarticulos.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public IFiltros: IFiltrosArticulos = {
     precio: [],
  //   marcas: []
   };
   public rangeVal: string;
   public items: string[] = [];
   marcas: IMarca;
   categorias: ICategoria;

  constructor(private marcasService: MarcasService, private categoriasService: CategoriasService, private filterArticulosService: FiltrosarticulosService) { }

  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
   this.IFiltros.precio[0] = precio.detail.value.lower;
   this.IFiltros.precio[1] = precio.detail.value.upper;

  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    this.marcas = respuesta.data;
    console.log(respuesta);
    let respuestaa = await this.categoriasService.getCategorias();
    this.categorias = respuestaa.data;
    console.log(respuestaa);   
  }

  async selectmarca(marca, pos){
    console.log(marca, pos);
    //
    let i = this.items.indexOf(marca);
    if ( i == -1 ){
      this.items.push(marca);
    }else {
      this.items.splice( i, 1 );
    }
    console.log(this.items);
  }

  async aplicar(){
  //   this.IFiltros.marcas = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterArticulosService.getFilter(this.IFiltros);
      this.items = [];
  }
}
