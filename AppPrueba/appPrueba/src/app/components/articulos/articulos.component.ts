import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  articulos: any;
  /* favorito: boolean = false; */
  favorito = {};
  
 
  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data, console.log(data);
    });
  }

 
 /* onClick() {
   this.favorito = !this.favorito
 } */

}
