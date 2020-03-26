<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('trips/{user_id}', 'TripController@getUserTrips');
Route::delete('trips/{user_id}', 'TripController@deleteTrips');

//Route::get('events/{org_id}', 'EventController@getEvents');
Route::get('events/trips/{event_id}', 'TripController@getOrgTrips');

Route::delete('events/{user_id}', 'EventController@deleteEventAndTrips');
Route::get('org/trips/{id}', 'EventController@getEventsAndTrips');






