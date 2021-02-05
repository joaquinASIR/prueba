import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(data => {this.categorias = data, console.log(data);});
  }

}
