<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    public function events() 
    {
       return $this->hasMany(Event::class);
    }
}
