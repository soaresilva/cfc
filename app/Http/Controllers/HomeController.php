<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (auth()->user()) {
            $user = auth()->user();
        }
        return view('home')->with(compact("user"));
    }

    public function ajaxIndex(Request $request)
    {

        if ($request->ajax()) {

            if (auth()->user()) {
                $user = auth()->user();
            }
            return response()->json($user);
        }
    }
}
