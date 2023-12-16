<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobsResource;
use App\Models\Jobs;
use Illuminate\Http\Request;

class JobsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    return JobsResource::collection(Jobs::where("id", ">", "0")->orderbY("id", "desc")->paginate(1000));
    // return response(["data" => "Abood"]);
  }
  public function jobDetails(Request $request, Jobs $jobId)
  {
    // return response(["data" => "Abood"]);
    return JobsResource::collection(Jobs::where("id", $jobId->id)->orderbY("id", "desc")->paginate(1000));
  }
}