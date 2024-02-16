<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;

abstract class AbstractStorage implements Storage
{
    /**
     * Sort by update_at field.
     */
    protected const SORT_BY = 'updated_at';

    /**
     * Update timestamp fields.
     *
     * @param Notification $notification
     */
    protected function updateTimestampFields(Notification $notification): void
    {
        $oldNotification = $this->get($notification->id);

        if ($oldNotification) {
            $notification->created_at = $oldNotification->created_at;
            $notification->updated_at = now();
        } else {
            $notification->created_at = now();
            $notification->updated_at = $notification->created_at;
        }
    }
}