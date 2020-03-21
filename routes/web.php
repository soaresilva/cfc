<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(); //all the authentification for the USER 
Route::get('/home', 'HomeController@index')->name('home');


//////
//FOR ORGANIZATIONS
//////
Route::get('organization-registration', 'OrganizationRegistrationController@form')->name('org-register'); //shows registration form
Route::post('organization-registration', 'OrganizationRegistrationController@register'); //stores registration form

Route::get('user-registration', 'UserController@form')->name('user-register'); //shows registration form
Route::post('user-registration', 'UserController@register'); //stores registration form


////////
// these are just here so that we know what is inside Auth::routes, can be removed later, just in case we need to alter something with the logins
///////
// Authentication Routes...
// Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
// Route::post('login', 'Auth\LoginController@login');
// Route::post('logout', 'Auth\LoginController@logout')->name('logout');
 
// // Registration Routes...
// Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
// Route::post('register', 'Auth\RegisterController@register');
 
// // Password Reset Routes...
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
// Route::post('password/reset', 'Auth\ResetPasswordController@reset');
