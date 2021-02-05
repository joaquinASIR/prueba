import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], texto: string=''): any {

    if (texto == '') {
      return array;
    }

    if ( !array)  {
      return array;
    }

    texto = texto.toLocaleLowerCase();

    return array.filter(
      item =>item.nombre_articulo.toLowerCase().includes(texto)
    )
  }

}
