import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { MsnApiArticulos, IArticulo } from '../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  public articulos: any;
  /* favorito: boolean = false; */
  favorito = {};

  usuario: any;
 
  constructor(private articulosService: ArticulosService, private uService: UsuariosService, private route: ActivatedRoute) {
    this.articulos = this.route.snapshot.paramMap.get('articuloid');
   }


  async ngOnInit() {
    let respuesta = await this.articulosService.getArticulos();
    this.articulos = respuesta.data;
    console.log(respuesta.data);
      this.uService.userStorageObservable
    .subscribe ( data => {
      this.usuario = data;
    });
  }

 
 /* onClick() {
   this.favorito = !this.favorito
 } */

 ionViewWillEnter (){
  this.uService.userStorageObservable
    .subscribe ( data => {
      this.usuario = data;
    })
}


async getUser() {
    this.usuario = await this.uService.getUsuarioStorage();
}

}
