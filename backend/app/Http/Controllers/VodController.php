<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vod;

class VodController extends ApiController
{
    public function index()
    {
        $content = Vod::all();
        return $content;
    }

    public function content($id)
    {
        $content = Vod::find($id);
        if($content !== null) {
            return $content;
        } else {
            return $this->respondFail($message = 'Not found', 404);
        }
    }
    
    public function store(Request $request)
    {
        $content = new Vod();
        $content->titulo = $request->get('titulo');
        $content->genero = $request->get('genero');
        $content->duracion = $request->get('duracion');    
        $content->sinopsis = $request->get('sinopsis');
        $content->image = $request->get('image');    
        $content->save();
        return $this->respondSuccess();
    }

    public function update(Request $request, $id)
    {
        $content = Vod::find($id);
        if($content != null) {
            $content->titulo = $request->get('titulo');
            $content->genero = $request->get('genero');
            $content->duracion = $request->get('duracion');    
            $content->sinopsis = $request->get('sinopsis');
            $content->image = $request->get('image');         
            $content->save();
            return $this->respondSuccess();
        } else {
            return $this->respondFail($message = 'Not found', 404);
        }

    }

    public function destroy($id)
    {
        $content = Vod::find($id);
        if ($content != null) {
            $content->delete();
            $content = Vod::all();
            return $content;
        } else {
            return $this->respondFail($message = 'Not found', 404);
        }
        
    }
}