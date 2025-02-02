import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    anio : number;
    loginUser = {
    email: 'joaquin@gmail.com',
    password: 'usuario'
  };

  constructor(private uService: UsuariosService, private navCtrl: NavController, private uiService: UiServiceService) { 
    
    this.anio = new Date().getFullYear();
  }

  async login(fLogin: NgForm){
    console.log(this.loginUser);
    if (fLogin.invalid) { return; }
    // recordemos que 'peticion' es una PROMESA 
    const peticion = await this.uService.login(this.loginUser.email, this.loginUser.password);
    if ( peticion.status == 'success' ){
      // navegar al home
      this.navCtrl.navigateRoot('inicio', { animated: true } );
    }else {
      this.uiService.alertaInformativa('Usuario/Password no son válidos');
    }
  }

  ngOnInit() {}

}
