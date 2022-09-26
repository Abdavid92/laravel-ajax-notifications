<?php

use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;

if (! function_exists('ajax_notifications')) {

    /**
     * Get a {@link AjaxNotifications} instance.
     *
     * @return AjaxNotifications
     */
    function ajax_notifications(): AjaxNotifications
    {
        return app(AjaxNotifications::class);
    }
}