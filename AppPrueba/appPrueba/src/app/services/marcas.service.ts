import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  public getMarcas(){
    return this.http.get('http://prueba.test:80/apiprueba/public/api/admin/marcas')
  }
}
