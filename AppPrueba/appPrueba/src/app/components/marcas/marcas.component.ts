import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas.service';
import { IMarca } from '../../Interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {
  marca: IMarca[];
  marcas: any;

  constructor(private marcasService: MarcasService, private route: ActivatedRoute) { 
    this.marcas = this.route.snapshot.paramMap.get('marcaid');
  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    this.marcas = respuesta.data;
    console.log(respuesta);
    
  }

}
