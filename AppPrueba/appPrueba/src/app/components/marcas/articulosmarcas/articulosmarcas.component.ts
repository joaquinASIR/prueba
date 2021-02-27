import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMarca, IArticulo } from '../../../Interfaces/ArticulosInterface';
import { MarcasService } from '../../../services/marcas.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-articulosmarcas',
  templateUrl: './articulosmarcas.component.html',
  styleUrls: ['./articulosmarcas.component.scss'],
})
export class ArticulosmarcasComponent implements OnInit {
  
  public marcaid: string;
  public marcas: IMarca;
  public articulo: IArticulo;
  favorito = {};
  usuario: any; 

  constructor(private mService: MarcasService, private route: ActivatedRoute, private uService: UsuariosService) {
        this.marcaid = this.route.snapshot.paramMap.get('marcaid');

   }

  async ngOnInit() {
    let respuesta = await this.mService.getArticulosMarcas(this.marcaid); 
    this.marcas = respuesta.data;
    console.log(this.marcas);
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
  
  


