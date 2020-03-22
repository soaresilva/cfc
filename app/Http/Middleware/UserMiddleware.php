<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
        |--------------------------------------------------------------------------
        | Authenticate Middleware
        |--------------------------------------------------------------------------
        |
        | This middleware is for checking whether user is from user table .
        | and authenticated.
        |
         */
        if (!Auth::user()) {
            return redirect('/');
        } else {
            return $next($request);

        }
    }

}
