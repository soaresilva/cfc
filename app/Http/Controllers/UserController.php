<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function form()
    {
        return view('auth.user-register');
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
