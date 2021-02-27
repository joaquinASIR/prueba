import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MsnApiArticulos, IArticulo } from '../../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulos: IArticulo;
  articuloid: any;

  constructor(private articulosService: ArticulosService, private route: ActivatedRoute) {
    this.articuloid = this.route.snapshot.paramMap.get('articuloid');
   }

  async ngOnInit() {
    let respuesta = await this.articulosService.getArticulos();
    this.articulos = respuesta.data;
    console.log(respuesta);
  }
  
  @ViewChild(IonSlides) slides: IonSlides;
  goToSlide() {
    this.slides.slideTo(2, 500);
    
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }
  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  /* slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 8,
    loop: true,
    autoplay: true
  }; */
  
  

}
