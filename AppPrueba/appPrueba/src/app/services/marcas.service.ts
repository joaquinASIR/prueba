import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { MsnApiMarcas } from '../Interfaces/ArticulosInterface';
import { environment } from '../../environments/environment';


const URL= environment.url;
@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient, private uService: UsuariosService) { }


  /* public getMarcas(){
    return this.http.get('http://prueba.test:80/apiprueba/public/api/admin/marcas')
  } */

  async getArticulosMarcas(marcaid):Promise<MsnApiMarcas>{
    const ruta = `${ URL }/api/admin/marcas/${marcaid}/articulos`;    
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta)
        .subscribe ( respuesta => {
          resolve( respuesta );
        });
    })
    
  }

  async getMarcas(): Promise<MsnApiMarcas>{
    const ruta = `${ URL }/api/admin/marcas`;
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }
}
