@extends('layouts.auth')

@section('content')
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-10 col-sm-8 col-xs-6">
      <div class="card">
        <div class="card-header">{{ Auth::user()->first_name }} {{ Auth::user()->surname  }}'s Profile</div>

        <div class="card-body">
          @if (session('status'))
          <div class="alert alert-success" role="alert">
            {{ session('status') }}
          </div>
          @endif
          {!! $userChart->container() !!}
        </div>
      </div>

      <div id="userProfile"></div>




      {!! $userChart->script() !!}


    </div>
  </div>
</div>
@endsection