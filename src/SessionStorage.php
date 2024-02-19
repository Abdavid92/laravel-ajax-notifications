<?php

namespace Abdavid92\LaravelAjaxNotifications;


use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Session;

/**
 * Class SessionStorage
 * @package Abdavid92\LaravelAjaxNotifications
 */
class SessionStorage extends AbstractStorage
{
    /**
     * Master session key.
     */
    private string $master_session_key;

    public function __construct()
    {
        $this->master_session_key = config('ajaxnotifications.storages.session.session_key', 'ajax-notifications');
    }

    function get(string $id = null): Notification|Collection|null
    {
        $notifications = $this->getNotifications();

        if ($id) {

            if (array_key_exists($id, $notifications)) {

                $data = $notifications[$id];

                return new Notification([
                    'id' => $id,
                    'header' => $data['header'],
                    'body' => $data['body'],
                    'notifiable_id' => $data['notifiable_id'],
                    'notifiable_type' => $data['notifiable_type'],
                    'created_at' => $data['created_at'],
                    'updated_at' => $data['updated_at']
                ]);
            }

            return null;
        }

        $collection = collect();

        foreach ($notifications as $key => $value) {

            $collection->add(new Notification([
                'id' => $key,
                'header' => $value['header'],
                'body' => $value['body'],
                'notifiable_id' => $value['notifiable_id'],
                'notifiable_type' => $value['notifiable_type'],
                'created_at' => $value['created_at'],
                'updated_at' => $value['updated_at']
            ]));
        }

        return $collection->sortBy(self::SORT_BY);
    }

    function put(Notification $notification): void
    {
        $this->updateTimestampFields($notification);

        $notifications = $this->getNotifications();

        $notifications[$notification->id] = [
            'header' => $notification->header,
            'body' => $notification->body,
            'notifiable_id' => $notification->notifiable_id,
            'notifiable_type' => $notification->notifiable_type,
            'created_at' => $notification->created_at,
            'updated_at' => $notification->updated_at
        ];

        Session::put($this->master_session_key, $notifications);
        Session::save();
    }

    function delete(string $id): bool
    {
        $notifications = $this->getNotifications();

        if (array_key_exists($id, $notifications)) {

            unset($notifications[$id]);

            Session::put($this->master_session_key, $notifications);
            Session::save();

            return true;
        }

        return false;
    }

    private function getNotifications(): array
    {
        return Session::get($this->master_session_key, []);
    }
}
