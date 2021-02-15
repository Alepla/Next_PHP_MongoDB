<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Vod extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'vod';
    
    protected $fillable = [
        'id', 'titulo', 'genero','duracion', 'sinopsis', 'image'
    ];
}