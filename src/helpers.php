<?php

use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;

if (! function_exists('ajax_notifications')) {

    /**
     * Get a {@link AjaxNotifications} instance.
     *
     * @param array|null $args
     * @return AjaxNotifications
     */
    function ajax_notifications(?array $args = null): AjaxNotifications
    {
        return app(AjaxNotifications::class, [app(Storage::class, $args ?? [])]);
    }
}