<?php

namespace App\Http\Controllers\admin;
use App\Models\Categorias;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getArticulos($categoriaid){
        $articulos = Categorias::with('articulos')->where('categoriaid','=',$categoriaid)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Articulos de la categoria'. $categoriaid,
            'code' => 401,
            'data' => $articulos
        ]);
    }

    public function newCategoria(Request $request){
        $rules = [
            'categoriaid'        => 'required|integer',
            'nombre_categoria'   => 'required',
            'logo'               => 'required'
        ];

        #Paso1-. Validación de los campos del usuario
        $input = $request->all();
        $validator = Validator::make($input, $rules);
//        dd($validator->errors());
        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => 'Error al rellenar los campos',
                'errors'=> $validator->errors()
            ], 200);
        }

        $categoria = Categorias::create(array(
            'categoriaid'        => $request->input('categoriaid'),
            'nombre_categoria'   => $request->input('nombre_categoria'),
            'logo'               => $request->input('logo')
        ));

        return response()->json([
            'status' => 'success',
            'message' => 'Categoria agregada',
            'code' => 401,
            'data' => $categoria
        ]);
    }

    public function delCategoria($categoriaid)
    {   
        $result = Categorias::where('categoriaid', $categoriaid)->delete();
        //$articulo = Articulo::find($articuloid);
    //    $result = $articulo[0]->delete();
        if ($result == 1){
            $mensaje = "Categoria ". $categoriaid. " eliminado correctamente";
        }else{
            $mensaje = "Categoria ". $categoriaid. " No eliminado";
        };

        return response()->json([
            'status' => 'success',
            'message' => $mensaje,
            'code' => 401,
        ]);
    }

    public function upCategorias(Categorias $categoria, Request $request, $categoriaid)
{
    $categoria = Categorias::where('categoriaid', $categoriaid)->update($request->only('nombre_categoria', 'logo'));
    
    
    if ($categoria === null) {
        return response()->json('', 404);
    }
    
    return  response()->json([
        'status' => 'success',
        'message' => 'Categorias.',
        'code' => 401,
        'data' => $categoria
    ]);
    
    }

    public function index()
    {
        $categorias = Categorias::with('articulos')->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Categorias.',
            'code' => 401,
            'data' => $categorias
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
