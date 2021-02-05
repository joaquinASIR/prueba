import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  articulos: any;
  favorito = {}

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data, console.log(data[0]);
    });
  }

  onClick() {
    this.favorito = !this.favorito;
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
