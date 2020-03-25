<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;

class EventController extends Controller
{
    public function getEvents(Request $request, $id) {
        $org_id = $id;
        $events = Event::orderBy('date', 'desc')->where('organization_id', '=', $org_id)->get();
        return $events;
    }

}
