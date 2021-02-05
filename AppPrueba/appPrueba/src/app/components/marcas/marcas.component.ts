import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas.service';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {

  marcas: any;

  constructor(private marcasService: MarcasService) { }

  ngOnInit() {
    this.marcasService.getMarcas().subscribe(data => {this.marcas = data, console.log(data);});
  }

}
