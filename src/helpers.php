<?php

use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;

if (! function_exists('ajax_notifications')) {

    function ajax_notifications(?string $sessionId = null): AjaxNotifications
    {
        return app(AjaxNotifications::class, [app(Storage::class, [$sessionId])]);
    }
}