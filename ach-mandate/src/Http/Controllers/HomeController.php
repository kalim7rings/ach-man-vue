<?php

namespace AchMandate\Http\Controllers;

//use App\Utilities\AbortOptVerification;
//use GrievanceVue\Http\Services\GrievanceService;
use Illuminate\Routing\Controller;

class HomeController extends Controller {

    const GRIEVANCE_SEND_ATTEMPT = 'grievanceSendAttempt';
    const GRIEVANCE_RESEND_ATTEMPT = 'grievanceResendAttempt';

    public function index()
    {
        // dd('hiiii..');
        return view('ach-mandate::index');
    }
}
