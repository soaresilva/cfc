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

Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Auth::routes(); //all the authentification for the USER
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/indexAjax', 'HomeController@ajaxIndex');

Route::get('/organization', 'OrganizationController@index');
Route::view('/organization', 'organization');
Route::post('/orgIndexAjax', 'OrganizationController@ajaxIndex');

// Route::view('/home', 'home')->middleware('auth');

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'UserController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

// Organization Routes

Route::get('/login/organization', 'Auth\LoginController@showOrganizationLoginForm')->name('org-login');
Route::get('/register/organization', 'Auth\RegisterController@showOrganizationRegisterForm')->name('org-register');

Route::post('/login/organization', 'Auth\LoginController@organizationLogin');
Route::post('/register/organization', 'Auth\RegisterController@createOrganization');
