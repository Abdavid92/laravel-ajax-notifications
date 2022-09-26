<?php


namespace Abdavid92\LaravelAjaxNotifications\Contracts;


use Illuminate\Http\JsonResponse;

interface FailedNotificationResponse
{
    /**
     * Get a json response with a notification.
     *
     * @return JsonResponse
     */
    function toResponse(): JsonResponse;
}