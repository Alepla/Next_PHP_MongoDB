<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Auth;
use JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('user', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $username = $request->input('user');
        return response()->json(compact( 'token', 'username'));
    }

    public function like(Request $request)
    {
        $userName = $request->input('content.user');
        $user = Auth::where('user', $userName)->first()->push('favs', $request->input('content.id'));
        return Auth::where('user', $userName)->first();
    }

    public function dislike(Request $request)
    {
        $userName = $request->input('content.user');
        $user = Auth::where('user', $userName)->first()->pull('favs', $request->input('content.id'));
        return Auth::where('user', $userName)->first();
    }

    public function userInfo(Request $request)
    {
        $userName = $request->input('data.user');
        return $favs = Auth::where('user', $userName)->first();
    }
}