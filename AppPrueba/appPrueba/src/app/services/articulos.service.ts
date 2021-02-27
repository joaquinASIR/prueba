import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { MsnApiArticulos } from '../Interfaces/ArticulosInterface';
import { UsuariosService } from './usuarios.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private httpOptions: any;
  public respuesta: MsnApiArticulos;

  constructor(private http: HttpClient, private uService: UsuariosService) { }

 async getArticulos(): Promise<MsnApiArticulos>{
  const ruta = `${ URL }/public/api/admin/articulos`;
  return new Promise (resolve => {
    this.http.get<MsnApiArticulos>(ruta)
    .subscribe(respuesta => {
      resolve(respuesta);
    })
  })
 }

  async showArticulos(articuloid): Promise<MsnApiArticulos>{
    console.log('Articuloid = ', articuloid);
    const ruta = `${ URL }/public/api/admin/articulos/${articuloid}`;
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
      .subscribe (respuesta => {
        resolve(respuesta);
      });
    })
  }
  public buscarArticulos( articulos: string) {
    return this.http.get(`http://prueba.test:80/apiprueba/public/api/admin/articulos`)
    
  }
}

/* 
 public getArticulos(){
    return this.http.get('http://prueba.test:80/apiprueba/public/api/admin/articulos')
  }

public buscarArticulos( articulos: string) {
  return this.http.get(`http://prueba.test:80/apiprueba/public/api/admin/articulos`)
  
} */