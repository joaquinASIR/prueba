<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
 


class Usuarios extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;

    protected $table = 'usuarios';
    protected $primarykey = 'id';
    protected $fillable = [
        'id','nombre_usuario','apellidos_usuario','email','password',
        'rol','perfilid'
    ];
    public $timestamps = false;
    
}
