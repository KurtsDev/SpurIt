<?php

use Illuminate\Http\Request;

Route::post('store', 'TaskController@store');

Route::get('getList', 'TaskController@getList');

Route::get('update', 'TaskController@update');

Route::post('updateStore', 'TaskController@updateStore');

Route::get('getJson', 'TaskController@getJson');
