<?php


namespace Abdavid92\LaravelAjaxNotifications\Responses;


use Illuminate\Http\JsonResponse;
use Abdavid92\LaravelAjaxNotifications\Contracts\FailedNotificationResponse as Contract;

class FailedNotificationResponse implements Contract
{

    function toResponse(): JsonResponse
    {
        return response()->json([], 404);
    }
}