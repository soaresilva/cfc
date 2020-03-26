<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Trip;

class EventController extends Controller
{
    public function getEvents(Request $request, $id) {
        $org_id = $id;
        $events = Event::orderBy('date', 'desc')->where('organization_id', '=', $org_id)->get();
        return $events;
    }

    public function deleteEventAndTrips(Request $request, $id) {  
        Event::where('id', '=', $id)->delete();
        Trip::where('event_id', '=', $id)->delete();
        return response()->json(['okay' => true],200);
    }
    
}
