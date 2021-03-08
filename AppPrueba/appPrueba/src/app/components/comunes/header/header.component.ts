import { Component, OnInit, Input } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { IArticulo, MsnApiArticulos } from '../../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  articulos: any;
  public texto='';
  usuario: any;

  @Input('seccion') seccion: string;

  constructor(private articulosService: ArticulosService, public uService: UsuariosService, private route: ActivatedRoute, private popoverController: PopoverController) { 
    this.articulos = this.route.snapshot.paramMap.get('articuloid');
    console.log('header cargado');
  }

  async ngOnInit() {
    let respuesta = await this.articulosService.getArticulos();
    this.articulos = respuesta.data;
    console.log(respuesta);
      this.uService.userStorageObservable
    .subscribe ( data => {
      this.usuario = data;
      console.log(this.usuario);
    })
  }
  buscar(event) {
    const busqueda = event.detail.value
    this.articulosService.buscarArticulos(busqueda).subscribe(data => {
       console.log(this.texto);
    });
  }

  ionViewWillEnter (){
    this.uService.userStorageObservable
      .subscribe ( data => {
       this.usuario = data;
        console.log(this.usuario);
      })
  }
  
  
  async getUser() {
      this.usuario = await this.uService.getUsuarioStorage();
      console.log(this.usuario);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  

  
}
