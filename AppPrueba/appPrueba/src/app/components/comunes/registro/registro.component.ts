import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IUsuario } from '../../../Interfaces/UsuarioInterface';
import { UsuariosService } from '../../../services/usuarios.service';
import { UiServiceService } from '../../../services/ui-service.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registroUsuario: IUsuario  = {
    id                : 1,
    nombre_usuario    : 'Joaquin',
    apellidos_usuario :'Manzano',
    email             : 'joaquin@gmail.com',
    password          : 'usuario',
    perfilid          : 1,
    rol               : 'admin'
    
  }

  constructor(private uService: UsuariosService,
    private navCtrl: NavController, 
    private uiService: UiServiceService) {

}

ngOnInit() {}

async registro(fRegistro) {

if (fRegistro.invalid) { return; }

const peticion = await this.uService.registro( this.registroUsuario );

if ( peticion.status == 'success' ){
 this.uiService.alertaInformativa( peticion.message );
 this.navCtrl.navigateRoot('login', { animated: true });
}else {
console.log(peticion);
this.uiService.alertaInformativa( 'Usuario creado correctamente' );
 }

}

}

/* this.uiService.alertaInformativa( JSON.stringify(peticion.errors) );
 */