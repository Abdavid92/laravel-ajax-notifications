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

    /**
     * AjaxNotifications constructor.
     *
     * @param array|null $args
     */
    public function __construct(?array $args = null)
    {
        if ($args) {
            $this->setConfig($args);
        }
    }

    function all(): array
    {
        $notifications = $this->getNotifications();

        $result = [];

        foreach ($notifications as $key => $value) {

            $result[] = new Notification(
                $key,
                $value['body'],
                $value['header']
            );
        }

        return $result;
    }

    function get(string $id): ?Notification
    {
        $notifications = $this->getNotifications();

        if (array_key_exists($id, $notifications)) {

            $data = $notifications[$id];

            return new Notification(
                $id,
                $data['header'],
                $data['body']
            );
        }

        return null;
    }

    function put(Notification $notification)
    {
        $notifications = $this->getNotifications();

        $notifications[$notification->id] = [
            'header' => $notification->header,
            'body' => $notification->body
        ];

        Session::put(self::MASTER_SESSION_KEY, $notifications);
    }

    function delete(string $id)
    {
        $notifications = $this->getNotifications();

        if (array_key_exists($id, $notifications)) {

            unset($notifications[$id]);

            Session::put(self::MASTER_SESSION_KEY, $notifications);
        }
    }

    private function setConfig(array $config)
    {
        if (array_key_exists('session_id', $config)) {

            Session::setId($config['session_id']);
        }
    }

    private function getNotifications(): array
    {
        return Session::get(self::MASTER_SESSION_KEY, []);
    }
}