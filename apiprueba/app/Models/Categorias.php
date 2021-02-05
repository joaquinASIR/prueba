<?php

namespace App\Models;
use App\Models\Articulos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorias extends Model
{
    use HasFactory;
    protected $table = 'categorias';
    protected $primarykey = 'categoriaid';
    protected $fillable = [
        'categoriaid','nombre_categoria','logo'
    ];

    public $timestamps = false;

    public function Articulos() {
        return $this->hasMany(Articulos::class,'categoriaid', 'categoriaid');
    }
}
