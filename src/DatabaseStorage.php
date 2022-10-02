<?php

namespace Abdavid92\LaravelAjaxNotifications;


class DatabaseStorage extends AbstractStorage
{

    function get(?string $id = null)
    {
        if ($id) {
            return Notification::find($id);
        }

        return Notification::all()->sortBy(self::SORT_BY);
    }

    function put(Notification $notification)
    {
        if ($existsNotification = Notification::find($notification->id)) {

            $existsNotification->forceFill([
                'header' => $notification->header,
                'body' => $notification->body
            ])->save();

        } else {

            $notification->save();
        }
    }

    function delete(string $id)
    {
        if ($notification = Notification::find($id)) {
            $notification->delete();
        }
    }
}
