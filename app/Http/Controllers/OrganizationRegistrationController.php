<?php

namespace App\Http\Controllers;

use App\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrganizationRegistrationController extends Controller
{
    public function form()
    {
        return view('auth.organization-register');
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        Organization::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        Auth::attempt([ // this is so that the user gets logged in after registering, needs the credentials of the user
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        return redirect()->route('home');
        // return redirect('/');
    }
}
