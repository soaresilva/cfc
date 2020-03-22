<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class OrganizationMiddleware
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
        if (\Auth::guard('organization')->user()) {
            if (\Auth::guard('organization')->user()) {
                return $next($request);
            }

            return redirect('/');
        }
        return redirect('/');
    }
}
