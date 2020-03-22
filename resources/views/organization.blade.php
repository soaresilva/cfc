@extends('layouts.auth')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Dashboard</div>

        <div class="card-body">
          Hi there! {{ Auth::guard('organization')->check() ? "Logged In" : "Logged Out" }}
          {{ Auth::guard('organization')->user()->name }}

        </div>
      </div>
    </div>
  </div>
</div>
@endsection