<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Ach Mandate | HDFC Home Loans</title>
    <meta name="description" content="Apply for HDFC Home Loan to avail quick processing and attractive interest rates. HDFC Home Loans are easy to apply with simple documentation and transparent process. Visit Now."/>
    <meta name="keywords" content="apply for home loan, apply for home loan online, home loan online">
    <link href="{{url_mix('/achmandate/app.css')}}" rel="stylesheet" type="text/css"/>
    @routes
    <script>
        window.achMandate = <?php echo json_encode([
            'baseUrl' => url('/'),
        ]); ?>
    </script>
</head>
<body>

<div id="app">
    @yield('content')
</div>

{{--
@include('grievance::partials.header')
@yield('content')
@include('grievance::partials.footer')
--}}

{{--<script src="{{ url_mix('/echmandate/app.js') }}"></script>--}}

<script src="{{ url_mix('achmandate/app.js') }}" defer></script>

</body>
</html>