<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>Carbon Footprint Calculator</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <script src="https://kit.fontawesome.com/4895718c7d.js" crossorigin="anonymous"></script>
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/bootstrap-dropdownhover.min.css" rel="stylesheet">


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
            z-index: 6;
        }

        .content {
            text-align: center;
        }

        .title {
            /* font-size: 84px; */
        }

        .links>a {
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
        }

        .links>a:hover {
            text-decoration: none;
            color: greenyellow;
        }


        .m-b-md {
            margin-top: 10rem;
            margin-bottom: 30px;
        }

        .dropdown,
        .dropdown-item {
            padding: 0 15px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
        }

        .dropdown:hover,
        .dropdown-item:hover {
            text-decoration: none;
            color: greenyellow;
        }

        .logregcontainer {
            display: flex;
        }
    </style>
</head>

<body>
    <div class="flex-center position-ref full-height">

        <nav class="top-right links dropdown-menu-right">
            {{-- Navbar for checked in users --}}
            @if (Auth::check())
            <div class="nav-item dropdown ml-auto">
                <span class="dropdown"
                    data-toggle="dropdown">{{ Auth::user()->first_name }}{{ " " }}{{ Auth::user()->surname  }}
                </span>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="{{ url('/home') }}">Profile</a>
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </div>

            {{-- Navbar for checked in organizations --}}
            @elseif (Auth::guard('organization')->check())
            <div class="nav-item dropdown ml-auto">
                <span class="dropdown" data-toggle="dropdown">{{ Auth::guard('organization')->user()->name }}
                </span>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="{{ url('/organization') }}">Profile</a>
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </div>
            {{-- Navbar for guests --}}

            @else
            <div class="logregcontainer">
                <div class="nav-item dropdown ml-auto">
                    <span class="dropdown" data-toggle="dropdown">
                        Login
                    </span>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="{{ route('login') }}">Login</a>
                        <a class="dropdown-item" href="{{ route('org-login') }}">Login as Organization</a>
                    </div>
                </div>

                <div class="nav-item dropdown ml-auto">
                    <span class="dropdown" data-toggle="dropdown">
                        Register
                    </span>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="{{ route('register') }}">Register</a>
                        <a class="dropdown-item" href="{{ route('org-register') }}">Register as Organization</a>
                    </div>
                </div>
            </div>
            @endif
        </nav>



        <div id="root"></div>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>

    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Bootstrap Dropdown Hover JS -->
    <script src="js/bootstrap-dropdownhover.min.js"></script>

</body>

</html>