@extends('layouts.auth')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Dashboard</div>

        <div class="card-body">
          @if (session('status'))
          <div class="alert alert-success" role="alert">
            {{ session('status') }}
          </div>
          @endif

          You are now managing {{ Auth::guard('organization')->user()->name }}'s Carbon Footprint Calculator.
        </div>
        <div class="card-body">
          {!! $orgChart->container() !!}
        </div>
      </div>
      <div id="orgProfile"></div>

    </div>
    {!! $orgChart->script() !!}

  </div>
</div>
@endsection