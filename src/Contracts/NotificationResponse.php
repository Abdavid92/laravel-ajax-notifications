<?php


namespace Abdavid92\LaravelAjaxNotifications\Contracts;


use Abdavid92\LaravelAjaxNotifications\Notification;
use Illuminate\Http\JsonResponse;

/**
 * Interface NotificationResponse contract.
 *
 * @package Abdavid92\LaravelAjaxNotifications\Contracts
 */
interface NotificationResponse
{
    /**
     * Get a json response with a notification.
     *
     * @param Notification $notification
     * @return JsonResponse
     */
    function toResponse(Notification $notification): JsonResponse;
}
