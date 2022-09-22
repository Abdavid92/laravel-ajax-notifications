<?php


namespace Abdavid92\LaravelAjaxNotifications\Http\Controllers;

use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
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
     * @param string $id
     * @return JsonResponse
     */
    public function __invoke(string $id): JsonResponse
    {
        if ($notification = $this->notifications->get($id)) {

            return response()->json($notification);
        }

        return response()->json([], 404);
    }
}