import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  public getArticulos(){
    return this.http.get('http://prueba.test:80/apiprueba/public/api/admin/articulos')
  }

  public buscarArticulos( articulos: string) {
    return this.http.get(`http://prueba.test:80/apiprueba/public/api/admin/articulos`)
    
  }
}

