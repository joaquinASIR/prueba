<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->smallInteger('id')->primary();
            $table->string('nombre_usuario',100);
            $table->string('apellidos_usuario',100);
            $table->string('login',100);
            $table->string('passwd',100);
            $table->string('rol',25);
            $table->smallInteger('perfilid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
