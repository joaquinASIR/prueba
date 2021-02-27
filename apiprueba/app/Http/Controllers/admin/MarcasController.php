<?php

namespace App\Http\Controllers\admin;
use App\Models\Marcas;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MarcasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getArticulos($marcaid){
        $articulos = Marcas::with('articulos')->where('marcaid', '=', $marcaid)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Articulos de la marca'. $marcaid ,
            'code' => 401,
            'data' => $articulos
        ]);
    }

    public function index()
    {
        /* $marca = Marcas::with('articulos')->get();
        return response()->json($marca); */

        $marcas = Marcas::with('articulos')->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Marcas',
            'code' => 401,
            'data' => $marcas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
