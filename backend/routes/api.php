<?php



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('vod','App\Http\Controllers\VodController@index');
Route::post('add','App\Http\Controllers\VodController@store');
Route::post('edit/{id}','App\Http\Controllers\VodController@update');
Route::delete('delete/{id}','App\Http\Controllers\VodController@destroy');

Route::post('users/login', 'App\Http\Controllers\AuthController@login');