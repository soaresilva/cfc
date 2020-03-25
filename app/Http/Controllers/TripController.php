<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trip;

class TripController extends Controller
{
    public function getTrips(Request $request, $id) {
        $user_id = $id;
        $trips = Trip::where('user_id', '=', $user_id)->get();
        return $trips;
    }

    public function deleteTrips(Request $request, $id) {         
        Trip::where('id', '=', $id)->delete();
        return response()->json(['okay' => true],200);
    }
}
