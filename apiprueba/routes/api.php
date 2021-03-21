<?php
namespace App\Http\Controllers\admin;
use App\Http\Controllers\admin\MarcasController;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\CategoriasController;
use App\Http\Controllers\admin\UsuariosController;
use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\filters\FiltrosArticulosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('admin/marcas', [MarcasController::class, 'index']);
Route::get('admin/marcas/{marcaid}/articulos', [MarcasController::class,'getArticulos']);
Route::get('admin/articulos', [ArticulosController::class, 'index']);
/*  Route::resource('admin/categorias', CategoriasController::class);
 */ Route::resource('admin/usuarios', UsuariosController::class);

Route::post('login', [AuthController::class, 'login']);
Route::post('registro', [AuthController::class, 'registro']);

Route::get('admin/articulos/{articulo}', [ArticulosController::class,'show']);
Route::get('admin/categorias', [CategoriasController::class, 'index']);
Route::get('admin/categorias/{categoriaid}/articulos', [CategoriasController::class,'getArticulos']);


    Route::get('admin/deseados', [DeseadosController::class, 'index']);
    Route::post('admin/nuevodes', [DeseadosController::class, 'nuevoDeseado']);
/*     Route::get('admin/deletedes/{id}', [DeseadosController::class, 'borrarDeseado']);
 */
Route::post('admin/deletedes', [DeseadosController::class, 'borrarDeseado']);


Route::post('admin/categorias', [CategoriasController::class,'newCategoria']);
Route::put('admin/{categoriaid}/upcategorias', [CategoriasController::class,'upCategorias']);
Route::get('admin/categorias/{categoriaid}/remove', [CategoriasController::class,'delCategoria']);
Route::group(['middleware' => 'rol.admin'], function () {

});

Route::post('articulos/filters', [FiltrosArticulosController::class, 'filtros']);
    
    
Route::group(['middleware' => ['auth:api']], function () {
     //Route::resource('admin/categorias', CategoriasController::class);
    Route::get('user', [AuthController::class, 'getUser']);
    Route::post('logout', [AuthController::class, 'logout']);

});



