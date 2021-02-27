import { MsnApiCategorias } from './../Interfaces/ArticulosInterface';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { environment } from '../../environments/environment.prod';


const URL=environment.url;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private httpOptions: any ;

  constructor(private http: HttpClient, private uService: UsuariosService) { }

  cabecera (token) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
  }
  async getArticulosCategorias(categoriaid):Promise<MsnApiCategorias>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/public/api/admin/categorias/${categoriaid}/articulos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias>(ruta, httpOptions)
        .subscribe(respuesta =>{
          console.log(respuesta);
          resolve(respuesta);
        });
    })
    
  }
  async getCategorias(): Promise<MsnApiCategorias>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/public/api/admin/categorias`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias>(ruta, httpOptions)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }
}
