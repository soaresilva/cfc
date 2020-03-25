<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trip;

class TripController extends Controller
{
    public function getUserTrips(Request $request, $id) {
        $user_id = $id;
        $trips = Trip::where('user_id', '=', $user_id)->get();
        return $trips;
    }

    public function deleteTrips(Request $request, $id) {         
        Trip::where('id', '=', $id)->delete();
        return response()->json(['okay' => true],200);
    }
    
    public function getOrgTrips(Request $request, $id) {
        $event_id = $id;
        $trips = Trip::orderBy('flight_date')->where('event_id', '=', $event_id)->get();
        return $trips;
    }

}
