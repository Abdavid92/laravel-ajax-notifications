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

    function put(Notification $notification)
    {
        Session::put($notification->id, [
            'header' => $notification->header,
            'body' => $notification->body
        ]);
    }

    function get(string $id): ?Notification
    {
        if ($data = Session::get($id)) {

            return tap(new Notification(), function (Notification $notification) use ($data) {

                $notification->header = $data['header'];
                $notification->body = $data['body'];
            });
        }

        return null;
    }

    function delete(string $id)
    {
        Session::remove($id);
    }

    private function setConfig(array $config)
    {
        if (array_key_exists('session_id', $config)) {

            Session::setId($config['session_id']);
        }
    }
}