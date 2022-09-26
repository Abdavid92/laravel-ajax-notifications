<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;

class DatabaseStorage implements Storage
{

    function get(?string $id = null)
    {
        if ($id) {
            return Notification::find($id);
        }

        return Notification::all();
    }

    function put(Notification $notification)
    {
        $notification->save();
    }

    function delete(string $id)
    {
        if ($notification = Notification::find($id)) {
            $notification->delete();
        }
    }
}
