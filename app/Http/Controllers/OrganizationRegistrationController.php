<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrganizationRegistrationController extends Controller
{
    public function form()
    {
        return view('auth.organization-register');
    }
    
    public function register(Request $request)
    {
        $this->validate ($request, [
            'name'=> 'required',
            'email'=> 'required',
            'password'=> 'required',
        ]);

        //KEEP UNTIL WE'VE SET THIS UP CORRECTLY 
        // $user = User::create([
        //     'name' => $request->input('name'),
        //     'email' => $request->input('email'),
        //     'password' => bcrypt($request->input('password')),
        // ]);   

        Organization::create([
            //'user_id' => $user->id,            
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        Auth::attempt([ // this is so that the user gets logged in after registering, needs the credentials of the user
            'email' =>$user->email,
            'password' =>$request->input('password'),
        ]);

       // return redirect()->route('home');
        return redirect('/'); 
    }
}





    
