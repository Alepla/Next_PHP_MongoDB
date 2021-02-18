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
        return  array(
            "token" => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdCIsInBhc3N3b3JkIjoidGVzdCJ9.Qg_GTve2U265AJrjrALRN637ycFR8HCuy9QTyqx4_Qc",
            "username" => $request['user']
        );
/*         $credentials = $request->only('user', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token')); */
    }

/*     public function getAuthenticatedUser()
        {
            try {

                if (! $user = JWTAuth::parseToken()->authenticate()) {
                    return response()->json(['user_not_found'], 404);
                }

            } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                return response()->json(['token_expired'], $e->getStatusCode());

            } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                return response()->json(['token_invalid'], $e->getStatusCode());

            } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                return response()->json(['token_absent'], $e->getStatusCode());

            }

            return response()->json(compact('user'));
        } */

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
}