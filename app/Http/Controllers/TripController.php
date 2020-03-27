<?php

namespace App\Http\Controllers;

use App\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function getUserTrips(Request $request, $id)
    {
        $user_id = $id;
        $trips = Trip::where('user_id', '=', $user_id)->get();
        return $trips;
    }

    public function getOrgTrips(Request $request, $id)
    {
        $event_id = $id;
        $trips = Trip::orderBy('flight_date')->where('event_id', '=', $event_id)->get();
        return $trips;
    }

    public function deleteTrips(Request $request, $id)
    {
        Trip::where('id', '=', $id)->delete();
        return response()->json(['okay' => true], 200);
    }

    public function sendUserTripToDB(Request $request, $user_id, $airportFrom, $airportTo, $totalDistance)
    {
        // dd(auth()->guard('api')->user());
        $trip = new Trip;
        $trip->user_id = $user_id;
        $trip->distance = $totalDistance;
        $trip->airport_from = $airportFrom;
        $trip->airport_to = $airportTo;
        $trip->save();
        return response()->json(['okay' => true], 200);

    }

    public function sendOrgTripToDB(Request $request, $org_id, $airportFrom, $airportTo, $totalDistance)
    {
        $trip = new Trip;
        $trip->organization_id = $org_id;
        $trip->distance = $totalDistance;
        $trip->airport_from = $airportFrom;
        $trip->airport_to = $airportTo;
        $trip->save();
        return response()->json(['okay' => true], 200);

    }

}
