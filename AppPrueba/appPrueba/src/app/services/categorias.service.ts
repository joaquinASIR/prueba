import { MsnApiCategorias } from './../Interfaces/ArticulosInterface';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { environment } from '../../environments/environment.prod';
import { ICategoria, MsnApiNewCat } from '../Interfaces/ArticulosInterface';



const URL=environment.url;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private httpOptions: any ;
  token: string = null;

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

  async newCategoria (categoria: ICategoria): Promise<MsnApiNewCat>{
    console.log(categoria);
  
    const ruta = `${ URL }/public/api/admin/categorias`;
    const data = categoria;
    console.log (ruta, data);
  
    return new Promise ( resolve => {
      this.http.post<MsnApiNewCat>(ruta, data)
        .subscribe (respuesta => {
          if (respuesta.status == 'success'){
            resolve(respuesta)
          }        
      });
  });
  }
  
  async delCategoria(categoriaid): Promise<MsnApiCategorias>{
    const ruta = `${ URL }/public/api/admin/categorias/${categoriaid}/remove`;
    console.log(ruta);
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias>(ruta)
      .subscribe(data => {
        console.log(data);
        resolve(data);        
      });
  });
  }

  async updCategoria(categoriaid, nombre_categoria: string, logo: string): Promise<MsnApiCategorias>{
    const ruta =  `${ URL }/public/api/admin/${categoriaid}/upcategorias`;;
    const data = { nombre_categoria, logo };
    console.log(ruta);
    return new Promise ( resolve => {
      this.http.put<MsnApiCategorias>(ruta,data)
      .subscribe(data => {
        console.log(data);
        resolve(data);        
      });
  });
  }
}
