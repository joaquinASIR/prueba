<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articulos', function (Blueprint $table) {
            $table->smallInteger('articuloid')->primary();
            $table->string('nombre_articulo',100);
            $table->longtext('descripcion_articulo');
            $table->string('sexo_articulo',10);
            $table->smallInteger('categoriaid');
            $table->smallInteger('marcaid');
            $table->double('precio');
            $table->string('imagen',100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articulos');
    }
}
