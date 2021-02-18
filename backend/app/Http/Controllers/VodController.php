<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vod;

class VodController extends ApiController
{
    public function index()
    {
        //return Vod::paginate(5);
        return Vod::all();
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
        $content->titulo = $request->input('content.titulo');
        $content->genero = $request->input('content.genero');
        $content->duracion = $request->input('content.duracion');    
        $content->sinopsis = $request->input('content.sinopsis');
        $content->image = $request->input('content.image');    
        $content->save();
        return $this->respondSuccess();
    }

    public function update(Request $request, $id)
    {
        $content = Vod::find($id);
        if($content != null) {
            $content->titulo = $request->input('content.titulo');
            $content->genero = $request->input('content.genero');
            $content->duracion = $request->input('content.duracion');    
            $content->sinopsis = $request->input('content.sinopsis');
            $content->image = $request->input('content.image');         
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