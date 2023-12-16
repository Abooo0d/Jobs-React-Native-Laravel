<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use PhpParser\Node\NullableType;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('jobs', function (Blueprint $table) {
      $table->id();
      $table->string("job_title", 255)->nullable();
      $table->string("company_name", 255)->nullable();
      $table->string("location", 255)->nullable();
      $table->string("image", 255)->nullable();
      $table->string("highLight", 255)->nullable();
      $table->string("description", 255)->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('jobs');
  }
};