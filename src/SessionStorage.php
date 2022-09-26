<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Illuminate\Support\Facades\Session;

/**
 * Class SessionStorage
 * @package Abdavid92\LaravelAjaxNotifications
 */
class SessionStorage implements Storage
{
    /**
     * Master session key.
     */
    private const MASTER_SESSION_KEY = 'ajax-notifications';

    function get(string $id = null)
    {
        $notifications = $this->getNotifications();

        if ($id) {

            if (array_key_exists($id, $notifications)) {

                $data = $notifications[$id];

                return new Notification([
                    'id' => $id,
                    'header' => $data['header'],
                    'body' => $data['body']
                ]);
            }

            return null;
        }

        $collection = collect();

        foreach ($notifications as $key => $value) {

            $collection->add(new Notification([
                'id' => $key,
                'header' => $value['header'],
                'body' => $value['body']
            ]));
        }

        return $collection;
    }

    function put(Notification $notification)
    {
        $notifications = $this->getNotifications();

        $notifications[$notification->id] = [
            'header' => $notification->header,
            'body' => $notification->body
        ];

        Session::put(self::MASTER_SESSION_KEY, $notifications);
        Session::save();
    }

    function delete(string $id)
    {
        $notifications = $this->getNotifications();

        if (array_key_exists($id, $notifications)) {

            unset($notifications[$id]);

            Session::put(self::MASTER_SESSION_KEY, $notifications);
            Session::save();
        }
    }

    private function getNotifications(): array
    {
        return Session::get(self::MASTER_SESSION_KEY, []);
    }
}
