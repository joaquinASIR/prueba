import { Component, OnInit } from '@angular/core';
import { ICategoria, IArticulo } from '../../../Interfaces/ArticulosInterface';
import { CategoriasService } from '../../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-articuloscategorias',
  templateUrl: './articuloscategorias.component.html',
  styleUrls: ['./articuloscategorias.component.scss'],
})
export class ArticuloscategoriasComponent implements OnInit {

  public categoriaid: string;
  public categorias: ICategoria;
  public articulo: IArticulo;
  usuario: any;
  favorito = {};

  constructor(private categoriasServicve: CategoriasService, private route: ActivatedRoute, private uService: UsuariosService) {
    this.categoriaid = this.route.snapshot.paramMap.get('categoriaid');
   }

  async ngOnInit() {
    let respuesta = await this.categoriasServicve.getArticulosCategorias(this.categoriaid);
    this.categorias = respuesta.data;
    console.log(this.categorias);
    this.uService.userStorageObservable
    .subscribe ( data => {
      this.usuario = data;
    })
    
    
  }
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