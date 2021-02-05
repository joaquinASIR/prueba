<?php

namespace App\Models;
use App\Models\Articulos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marcas extends Model
{
    use HasFactory;
    protected $table = 'marcas';
    protected $primarykey = 'marcaid';
    protected $fillable = [
        'marcaid','nombre_marca, descripcion_marca, logo'
    ];

    public $timestamps = false;

    public function Articulos() {
        return $this->hasMany(Articulos::class,'marcaid', 'marcaid');
    }
}
