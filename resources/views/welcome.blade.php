<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Carbon Footprint Calculator</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>
        html,
        body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            margin: 0;
        }

        .full-height {
            /* height: 100vh; */
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            /* font-size: 84px; */
        }

        .links>a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-top: 10rem;
            margin-bottom: 30px;
        }
    </style>
</head>

<body>
    <div class="flex-center position-ref full-height">
        <div class="top-right links">
            {{-- Checking if an user or organization are logged in --}}
            @if (Auth::check() || Auth::guard('organization')->check())
            <a href="{{ url('/home') }}">Home</a>
            @else
            <a href="{{ route('login') }}">Login</a>

            @if (Route::has('org-login'))
            <a href="{{ route('org-login') }}">Login as Organization</a>
            @endif

            @if (Route::has('register'))
            <a href="{{ route('register') }}">Register</a>
            @endif

            @if (Route::has('org-register'))
            <a href="{{ route('org-register') }}">Register as Organization</a>
            @endif

            @endif
        </div>




            <div id="root"></div>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>

    </div>
</body>

</html>