<?php

namespace App\Models;
use App\Models\Marcas;
use App\Models\Categorias;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulos extends Model
{
    use HasFactory;
    protected $table ='articulos';
    protected $primarykey = 'articuloid';
    protected $fillable = [
        'articuloid','nombre_articulo','descripcion_articulo','sexo_articulo',
        'categoriaid','marcaid','precio','imagen'
    ];

    public $timestamps = false;

    public function Marcas() {
        return $this->belongsTo(Marcas::class,'articulo_id','articulo_id');
    }

    public function Categorias() {
        return $this->belongsTo(Categorias::class,'categoriaid','categoriaid');
    }
}
