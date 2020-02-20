<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';

    protected $fillable = [
        'name',
        'description',
        'status',
        'comments'
    ];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
