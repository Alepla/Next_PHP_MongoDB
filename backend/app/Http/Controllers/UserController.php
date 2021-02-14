<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{

    public function __invoke(Request $request)
    {
        return "Welcome to our homepage";
    }

    public function index()
    {
        echo "Hola";
    }
}