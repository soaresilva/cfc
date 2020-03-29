<?php

namespace App\Http\Controllers;

use App\Charts\OrganizationTripsChart;
use App\Charts\UserTripsChart;
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

    public function userTripsChart()
    {
        // first plucked column is the value, second is the key
        $trips = Trip::where('user_id', '=', auth()->user()->id)->orderBy('created_at')->pluck('carbon_amount', "created_at");
        $userChart = new UserTripsChart;
        $userChart->labels($trips->keys());
        $userChart->dataset('CO2 (t)', 'bar', $trips->values());

        return view('home', compact('userChart'));
    }

    public function orgTripsChart()
    {
        // first plucked column is the value, second is the key
        $trips = Trip::where('organization_id', '=', auth()->guard('organization')->user()->id)->orderBy('created_at')->pluck('carbon_amount', 'airport_to');
        $orgChart = new OrganizationTripsChart;
        $orgChart->labels($trips->keys());
        $orgChart->dataset('CO2 (t)', 'bar', $trips->values());

        return view('organization', compact('orgChart'));
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

    public function sendUserTripToDB(Request $request, $user_id, $dateDepart, $airportFrom, $airportTo, $totalDistance, $totalCO2amount, $offset)
    {
        $trip = new Trip;
        $trip->user_id = $user_id;
        $trip->distance = $totalDistance;
        $trip->carbon_amount = $totalCO2amount;
        $trip->offset_amount = $offset;
        $trip->flight_date = $dateDepart;
        $trip->airport_from = $airportFrom;
        $trip->airport_to = $airportTo;
        $trip->save();
        return response()->json(['okay' => true], 200);

    }

    public function sendOrgTripToDB(Request $request, $org_id, $dateDepart, $airportFrom, $airportTo, $totalDistance, $totalCO2amount, $offset)
    {
        $trip = new Trip;
        $trip->organization_id = $org_id;
        $trip->distance = $totalDistance;
        $trip->carbon_amount = $totalCO2amount;
        $trip->offset_amount = $offset;
        $trip->flight_date = $dateDepart;
        $trip->airport_from = $airportFrom;
        $trip->airport_to = $airportTo;
        $trip->save();
        return response()->json(['okay' => true], 200);

    }

}
