@extends('layouts.auth')

@section('content')
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-10 col-sm-8 col-xs-6">
      <div class="card">
        <div class="card-header">{{ Auth::guard('organization')->user()->name }}'s Profile</div>

        <div class="card-body">
          @if (session('status'))
          <div class="alert alert-success" role="alert">
            {{ session('status') }}
          </div>
          @endif
          {!! $orgChart->container() !!}
        </div>
        <div id="orgProfile"></div>

      </div>

    </div>
    {!! $orgChart->script() !!}

  </div>
</div>
@endsection