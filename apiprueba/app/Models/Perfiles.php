<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfiles extends Model
{
    use HasFactory;
    protected $table = 'perfiles';
    protected $primarykey = 'perfilid';
    protected $fillable = [
        'perfilid','email','facebook','instagram','foto','id'
    ];

    public $timestamps = false;

    
}
