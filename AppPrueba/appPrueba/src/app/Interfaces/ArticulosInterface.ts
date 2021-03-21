export interface IArticulo {
    articuloid              ?:    number;
    nombre_articulo         ?:    string;
    descripcion_articulo    ?:    string;
    sexo_articulo           ?:    string;
    precio                  ?:    number;
    imagen                  ?:    string;
    categoriaid             ?:    ICategoria;
    marcaid                 ?:    IMarca;
}

export interface ICategoria {
    categoriaid         ?:     number;
    nombre_categoria    ?:     string;
    logo                ?:     string;
    articulos          ?:    IArticulo[]
}


export interface IMarca {
    marcaid            ?:    number;
    nombre_marca       ?:    string;
    descripcion_marca  ?:    string;
    logo               ?:    string;
    articulos          ?:    IArticulo[]
}

export interface IDeseado {
    articuloid    ?:    number;
    id     ?:    number;
}

type Marcas = IMarca[] | IMarca;

type Categorias = ICategoria[] | ICategoria;

type Articulos = IArticulo[] | IArticulo;

export interface MsnApiMarcas {
    status    ?:    string;
    message   ?:    string;
    errors    ?:    string;
    code      ?:    number;
    data      ?:    IMarca;
}

export interface MsnApiCategorias {
    status    ?:    string;
    message   ?:    string;
    errors    ?:    string;
    code      ?:    number;
    data      ?:    ICategoria;
}

export interface MsnApiArticulos {
    status    ?:    string;
    message   ?:    string;
    errors    ?:    string;
    code      ?:    number;
    data      ?:    IArticulo
}

export interface MsnApiDeseados {
    status    ?:    string;
    message   ?:    string;
    errors    ?:    string;
    code      ?:    number;
    data      ?:    IArticulo
}

export interface MsnApiNewCat {
    status?: string;
    message?: string;
    errors?: string;
    data?: ICategoria;
}

export interface editCategoria {
    nombre_categoria    ?: any;
    logo    ?:    any;
}