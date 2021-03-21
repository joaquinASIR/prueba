<?php

namespace App\Http\Controllers\admin;
use App\Models\Deseados;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeseadosController extends Controller
{
    public function nuevoDeseado(Request $request) {
        $data = Deseados::create(array(
            'id'       => $request->input('id'),
            'articuloid'       => $request->input('articuloid')            
        ));
        return  response()->json([
            'status' => 'success',
            'message' => 'Deseado añadido correctamente.' ,
            'code' => 401,
            'data' => $data,
            ]);
    }
    public function borrarDeseado(Request $request){
        $data = Deseados::destroy(array(
            'id'       => $request->input('id'),
            'articuloid'       => $request->input('articuloid')            
        ));
        return response()->json([
            'status' => 'success',
            'message' => 'Deseado eliminado correctamente.' ,
            'code' => 401,
            'data' => $data,
        ]);
    }

   /*  public function borrarDeseado($id){
        $data = Deseados::destroy('id', '=', $id);
        return response()->json([
            'status' => 'success',
            'message' => 'Deseado eliminado correctamente.' ,
            'code' => 401,
            'data' => $data,
        ]);
    } */



    public function index()
    {
        $deseados = Deseados::with('articulos','usuarios')->get();

        return  response()->json([
            'status' => 'success',
            'message' => 'Listado de Articulos deseados' ,
            'data' => $deseados,
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
