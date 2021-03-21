<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkUsuariosFkArticulosToDeseados extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('deseados', function (Blueprint $table) {
            $table->foreign('articuloid')->references('articuloid')->on('articulos')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('usuarioid')->references('id')->on('usuarios')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('deseados', function (Blueprint $table) {
            //
        });
    }
}
