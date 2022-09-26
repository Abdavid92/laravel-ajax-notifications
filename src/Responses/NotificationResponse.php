<?php

namespace Abdavid92\LaravelAjaxNotifications\Responses;

use Abdavid92\LaravelAjaxNotifications\Contracts\NotificationResponse as Contract;
use Abdavid92\LaravelAjaxNotifications\Notification;
use Illuminate\Http\JsonResponse;

class NotificationResponse implements Contract
{

    function toResponse(Notification $notification): JsonResponse
    {
        return response()->json($notification);
    }
}
