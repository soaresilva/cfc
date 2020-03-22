@extends('layouts.auth')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Dashboard</div>

        <div class="card-body">
          You are now managing {{ Auth::guard('organization')->user()->name }}'s Carbon Footprint Calculator.

        </div>
      </div>
    </div>
  </div>
</div>
@endsection