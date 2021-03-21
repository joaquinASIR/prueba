import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { CategoriasService } from './categorias.service';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController, private cService: CategoriasService, private NavController: NavController) { }

  async alertaInformativa(message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaborrado (categoriaid: any) {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: '¿Quieres eliminar el articulo ' + categoriaid + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => { },
        }, {
            text: 'Aceptar',
            handler: async () => {
              const peticion = await this.cService.delCategoria(categoriaid);
              this.alertaInformativa(peticion.message);
              this.NavController.navigateRoot('/categorias', { animated: true });
            }
          }
      ]
    });
    await alert.present();
  }
}

