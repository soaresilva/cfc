<?php

namespace App;

use App\Event;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
