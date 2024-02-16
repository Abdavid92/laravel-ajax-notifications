<?php

namespace Abdavid92\LaravelAjaxNotifications;


use Illuminate\Support\Collection;

class DatabaseStorage extends AbstractStorage
{

    function get(?string $id = null): Notification|Collection|null
    {
        if ($id) {
            return Notification::find($id);
        }

        return Notification::all()->sortBy(self::SORT_BY);
    }

    function put(Notification $notification): void
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

    function delete(string $id): mixed
    {
        if ($notification = Notification::find($id)) {
            return $notification->delete();
        }

        return false;
    }
}
