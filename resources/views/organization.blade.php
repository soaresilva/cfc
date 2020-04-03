@extends('layouts.auth', [
'title' => 'Organization profile'
])

@section('content')
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-10 col-sm-12 col-xs-6">
      <div class="card">
        <div class="card-header">{{ Auth::guard('organization')->user()->name }}'s Profile</div>
        <div class="card-body card-body-link">
          <a href="{{ url('/') }}">Search for flights!</a>
        </div>
        <div class="card-body card-body-chart">
          @if (session('status'))
          <div class="alert alert-success" role="alert">
            {{ session('status') }}
          </div>
          @endif
          {!! $orgChart->container() !!}
        </div>
        <div id="orgProfile" class="card-body card-body-react"></div>
        {!! $orgChart->script() !!}
      </div>
    </div>
  </div>
</div>
@endsection