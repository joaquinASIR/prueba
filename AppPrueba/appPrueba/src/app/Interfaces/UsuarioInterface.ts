export interface IPerfil {

    perfilid     ?:    number;
    email        ?:    string;
    facebook     ?:    string;
    instagram    ?:    string;
    foto         ?:    string;
    id           ?:    number; 
}

export interface IUsuario {

    id                ?:    number;
    nombre_usuario    ?:    string;
    apellidos_usuario ?:    string;
    email             ?:    string;
    password          ?:    string;    
    perfilid          ?:    number;
    rol               ?:    string;
}

export interface MsnApiRegister {

    status     ?:    string;
    message    ?:    string;
    errors     ?:    string;
}

export interface MsnApiLogin {

    status    ?:    string;
    message   ?:    string;
    errors    ?:    string;
    token     ?:    IToken;
    user      ?:    IUsuario;
}

export interface IToken {

    access_token     ?:    string;
    token_type       ?:    string;
    expires_at       ?:    string;
}