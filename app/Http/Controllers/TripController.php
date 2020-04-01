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
        $trips = Trip::orderBy('flight_date')->where('user_id', '=', $user_id)->get();
        return $trips;
    }
    public function userTripsChart()
    {
        // first plucked column is the value, second is the key
        $carbon = Trip::where('user_id', '=', auth()->user()->id)->orderBy('flight_date')->pluck('carbon_amount');
        $offset = Trip::where('user_id', '=', auth()->user()->id)->orderBy('flight_date')->pluck('offset_amount');

        $datelabel = Trip::where('user_id', '=', auth()->user()->id)->orderBy('flight_date')->pluck('flight_date')->toArray();
        $airportlabel = Trip::where('user_id', '=', auth()->user()->id)->orderBy('flight_date')->pluck('airport_to')->toArray();
        $chartLabels = array_map(function ($a, $b) {return $a . ', ' . $b;}, $airportlabel, $datelabel);

        $userChart = new UserTripsChart;
        $userChart->labels($chartLabels);
        $userChart->dataset('CO2 (t) emitted', 'horizontalBar', $carbon->values())->backgroundColor('grey');
        $userChart->dataset('CO2 (t) offset', 'horizontalBar', $offset->values())->backgroundColor('green');

        return view('home', compact('userChart'));
    }

    public function orgTripsChart()
    {
        // first plucked column is the value, second is the key
        $carbon = Trip::where('organization_id', '=', auth()->guard('organization')->user()->id)->orderBy('flight_date', 'asc')->orderBy('created_at', 'asc')->pluck('carbon_amount');
        $offset = Trip::where('organization_id', '=', auth()->guard('organization')->user()->id)->orderBy('flight_date', 'asc')->orderBy('created_at', 'asc')->pluck('offset_amount');
        // dd($carbon);

        $datelabel = Trip::where('organization_id', '=', auth()->guard('organization')->user()->id)->orderBy('flight_date', 'asc')->orderBy('created_at', 'asc')->pluck('flight_date')->toArray();
        $airportlabel = Trip::where('organization_id', '=', auth()->guard('organization')->user()->id)->orderBy('flight_date', 'asc')->orderBy('created_at', 'asc')->pluck('airport_to')->toArray();
        $chartLabels = array_map(function ($a, $b) {return $a . ', ' . $b;}, $airportlabel, $datelabel);

        $orgChart = new OrganizationTripsChart;
        $orgChart->labels($chartLabels);
        $orgChart->dataset('CO2 (t) emitted', 'horizontalBar', $carbon->values())->backgroundColor('grey');
        $orgChart->dataset('CO2 (t) offset', 'horizontalBar', $offset->values())->backgroundColor('green');

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

    public function getEventlessTrips(Request $request, $org_id)
    {
        $trips = Trip::where([['organization_id', '=', $org_id], ['event_id', '=', null]])->get();
        return $trips;

    }

    public function addTripToEvent($trip_id, $event_id)
    {
        $trip = Trip::findOrFail($trip_id);
        $trip->event_id = $event_id;
        $trip->save();
        return response()->json(['okay' => true], 200);

    }

}
