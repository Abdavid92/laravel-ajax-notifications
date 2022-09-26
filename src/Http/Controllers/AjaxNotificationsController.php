<?php


namespace Abdavid92\LaravelAjaxNotifications\Http\Controllers;

use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Contracts\FailedNotificationResponse;
use Abdavid92\LaravelAjaxNotifications\Contracts\NotificationResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

/**
 * Class AjaxNotificationsController
 * @package Abdavid92\LaravelAjaxNotifications\Http\Controllers
 */
class AjaxNotificationsController extends Controller
{
    /**
     * @var AjaxNotifications
     */
    private $notifications;

    public function __construct(AjaxNotifications $notifications)
    {
        $this->notifications = $notifications;
    }

    /**
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        return response()->json(
            $this->notifications->all()
        );
    }

    /**
     * @param string $id
     * @return JsonResponse
     */
    public function get(string $id): JsonResponse
    {
        if ($notification = $this->notifications->get($id)) {

            return app(NotificationResponse::class)->toResponse($notification);
        }

        return app(FailedNotificationResponse::class)->toResponse();
    }

    /**
     * @return JsonResponse
     */
    public function first(): JsonResponse
    {
        if ($notification = $this->notifications->first()) {

            return app(NotificationResponse::class)->toResponse($notification);
        }

        return app(FailedNotificationResponse::class)->toResponse();
    }

    public function last()
    {
        if ($notification = $this->notifications->last()) {

            return app(NotificationResponse::class)->toResponse($notification);
        }

        return app(FailedNotificationResponse::class)->toResponse();
    }
}
