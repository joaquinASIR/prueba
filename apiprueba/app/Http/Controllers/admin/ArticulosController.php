<?php

namespace App\Http\Controllers\admin;
use App\Models\Articulos;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ArticulosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $articulo = Articulos::all();

        return  response()->json([
            'status' => 'success',
            'message' => 'Listado Articulos' ,
            'data' => $articulo,
            'code' => 401,
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
    public function show($articuloid)
    {
        $articulos = Articulos::with('marcas')
                            ->select('*')
                            ->where('articuloid', '=', $articuloid)
                            ->get();
                return  response()->json([
                'status' => 'success',
                'message' => 'Articulo seleccionado' ,
                'data' => $articulos[0],
                'code' => 401,
                ]);
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
