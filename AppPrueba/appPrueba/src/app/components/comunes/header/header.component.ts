import { Component, OnInit, Input } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  articulos: any;
  public texto='';

  @Input('seccion') seccion: string;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data, console.log(data);
    });
  }
  buscar(event) {
    const busqueda = event.detail.value
    this.articulosService.buscarArticulos(busqueda).subscribe(data => {
       console.log(this.texto);
    });
  }
}
