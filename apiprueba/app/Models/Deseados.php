<?php

namespace App\Models;
use App\Models\Articulos;
use App\Models\Usuarios;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deseados extends Model
{
    use HasFactory;
    protected $table = 'deseados';
    protected $primarykey = ['articuloid','id'];
    protected $fillable = [
        'articuloid','id'
    ];


public $timestamps = false;

public function Articulos() {
    return $this->belongsTo(Articulos::class,'articuloid','articuloid');
}

public function Usuarios(){
    return $this->belongsTo(Usuarios::class,'id','id');
}
}