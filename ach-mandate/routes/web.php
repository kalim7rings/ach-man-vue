<?php

use Illuminate\Support\Facades\Route;

Route::name('ach-mandate.')->group(function () {
        //Route::get('/', 'GrievanceController@index')->name('index');

      /*  Route::get('/', function(){
               dd('hello......');
        })->name('index');*/

       /* Route::get('/complaint', 'GrievanceController@complaintForm')->name('complaint');
        Route::post('/generate-request', 'GrievanceController@generateRequest')->name('generate.request');
        Route::post('/send-otp', 'GrievanceController@sendOtp')->name('send.otp');
        Route::post('/verify-otp', 'GrievanceController@verifyOtp')->name('verify.otp');
        Route::post('/get-data', 'GrievanceController@getData')->name('getData');
        Route::post('/store', 'GrievanceController@store')->name('complaint.store');*/

   // Route::post('/generate-request', 'GrievanceController@generateRequest')->name('generate.request');

    Route::get('/{any?}', 'HomeController@index')->where('any', '.*');
});