<?php

namespace App\Http\Controllers\filters;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Articulos;

class FiltrosArticulosController extends Controller
{
    public function filtros(Request $request) {
        $data = json_decode($request->input('data'), true);
        $precio = $data['precio'];
       // $marcas = $data['marcas'];
        $articulos = Articulos::select("*")
                               // ->whereIn('marcaid', $marcas)
                                ->where('precio', '>', $precio[0])
                                ->where('precio', '<', $precio[1])
                                ->get();
        return  response()->json([
        'status' => 'success',
        'message' => 'Articulos filtrados' ,
        'data' => $articulos,
        'code' => 401,
        ]);
    }
}
