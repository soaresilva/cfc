<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:organization');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = auth()->guard('organization')->user();
        return view('organization')->with(compact("user"));
    }
    public function ajaxIndex(Request $request)
    {

        if ($request->ajax()) {

            $user = auth()->guard('organization')->user();
            return response()->json($user);
        }
    }}
