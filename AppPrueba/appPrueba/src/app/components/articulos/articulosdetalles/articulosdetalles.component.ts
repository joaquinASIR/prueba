import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { IArticulo, IDeseado } from '../../../Interfaces/ArticulosInterface';
import { DeseadosService } from '../../../services/deseados.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-articulosdetalles',
  templateUrl: './articulosdetalles.component.html',
  styleUrls: ['./articulosdetalles.component.scss'],
})
export class ArticulosdetallesComponent implements OnInit {

  public articuloid: string;
  public articulos: IArticulo;
  favorito: {};
  public deseado: IDeseado = {
    articuloid: 0,
    id: 0
  };

  constructor(private articulosService: ArticulosService, private route: ActivatedRoute, private newDeseadoArticulos: DeseadosService, private uService: UsuariosService) {
    this.articuloid = this.route.snapshot.paramMap.get('articuloid');
   }

  async ngOnInit() {
    let respuesta = await this.articulosService.showArticulos(this.articuloid); 
    this.articulos = respuesta.data;
    console.log(this.articulos);
  }

  async fav(codigoart){
    this.favorito = !this.favorito;
    if (this.favorito) {
      console.log(this.uService.usuario.id, this.uService.usuario.nombre_usuario);
      this.deseado.articuloid = codigoart;
      this.deseado.id = this.uService.usuario.id;
      console.log(this.deseado);
      let respuesta = await this.newDeseadoArticulos.getnewDeseados(this.deseado)
    } else if (!this.favorito) {
      console.log(this.uService.usuario.id, this.uService.usuario.nombre_usuario);
      this.deseado.articuloid = codigoart;
      this.deseado.id = this.uService.usuario.id;
      console.log(this.deseado);
      let respuesta = await this.newDeseadoArticulos.getdeleteDeseados(this.deseado)
    }    
  }

}