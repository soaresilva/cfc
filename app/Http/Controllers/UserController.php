<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Trip;



class UserController extends Controller
{
    public function form()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        User::create([
            'first_name' => $request->input('first_name'),
            'surname' => $request->input('surname'),
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
