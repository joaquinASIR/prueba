import { Component, OnInit } from '@angular/core';
import { IDeseado } from '../../Interfaces/ArticulosInterface';
import { DeseadosService } from '../../services/deseados.service';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../Interfaces/UsuarioInterface';

@Component({
  selector: 'app-deseados',
  templateUrl: './deseados.component.html',
  styleUrls: ['./deseados.component.scss'],
})
export class DeseadosComponent implements OnInit {

  deseados: any;
  deseado: IDeseado[];
  usuario:any;

  constructor(private deseadosService: DeseadosService, private uService: UsuariosService) { }

  async ngOnInit() {
    let respuesta = await this.deseadosService.getDeseados();
    if (respuesta.status == 'success'){
      this.deseados = respuesta.data;
      console.log(this.deseados);
      
    }
    this.uService.userStorageObservable
    .subscribe ( data => {
      this.usuario = data;
      console.log(this.usuario);
    })
  }
}
