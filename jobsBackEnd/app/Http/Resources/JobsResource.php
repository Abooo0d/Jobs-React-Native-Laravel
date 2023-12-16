<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobsResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      "id" => $this->id,
      "job_title" => $this->job_title,
      "company_name" => $this->company_name,
      "image" => $this->image,
      "location" => $this->location,
      "highLight" => $this->highLight,
      "description" => $this->description,

    ];
  }
}