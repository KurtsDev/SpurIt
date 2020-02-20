<?php

Route::get('/api/getJson', 'TaskController@getJson');

Route::get('/{any}', 'TaskController@index')->where('any', '.*');
