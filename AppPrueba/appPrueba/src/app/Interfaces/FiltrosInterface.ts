interface IPrecio {
    min: number;
    max: number;
}

export interface IFiltrosArticulos {
 //   precio?: IPrecio;
    marcas: string[];
    precios: number[];
}