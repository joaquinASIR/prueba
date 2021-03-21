import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { UsuariosService } from './usuarios.service';
import { MsnApiDeseados, IDeseado } from '../Interfaces/ArticulosInterface';

const URL= environment.url;
@Injectable({
  providedIn: 'root'
})
export class DeseadosService {

  constructor(private http: HttpClient, private uService: UsuariosService) { }
  async getDeseados(): Promise<MsnApiDeseados>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/public/api/admin/deseados`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise (resolve => {
      this.http.get<MsnApiDeseados>(ruta, httpOptions)
      .subscribe (respuesta => {
        resolve(respuesta);
      })
    })
  }

  async getnewDeseados(deseados: IDeseado): Promise<MsnApiDeseados>{
    const ruta = `${ URL }/public/api/admin/nuevodes`;
    const data = deseados;

    return new Promise (resolve => {
      this.http.post<MsnApiDeseados>(ruta, data)
      .subscribe (respuesta => {
        resolve(respuesta)
      })
    })
  }

  async getdeleteDeseados(deseados: IDeseado): Promise<MsnApiDeseados>{
    const ruta = `${ URL }/public/api/admin/deletedes`;
    const data = deseados;
    return new Promise ( resolve => {
      this.http.post<MsnApiDeseados>(ruta, data)
      .subscribe (respuesta => {
        resolve(respuesta);
      });
    })
  }
}
/* 
async getdeleteDeseados(id: number): Promise<MsnApiDeseados>{
  const ruta = `${ URL }/public/api/admin/deletedes`;
  const data = id;
  return new Promise (resolve => {
    this.http.post<MsnApiDeseados>(ruta, data)
    .subscribe (respuesta => {
      resolve(respuesta)
    })
  })
} */