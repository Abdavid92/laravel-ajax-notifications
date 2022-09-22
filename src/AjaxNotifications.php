<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Illuminate\Support\Str;

/**
 * Class AjaxNotifications
 * @package Abdavid92\LaravelAjaxNotifications
 */
class AjaxNotifications
{
    /**
     * @var Storage
     */
    private $storage;

    /**
     * AjaxNotifications constructor.
     *
     * @param Storage $storage
     */
    public function __construct(Storage $storage)
    {
        $this->storage = $storage;
    }

    /**
     * Send a notification.
     *
     * @param Notification $notification
     * @return string Notification id.
     */
    public function send(Notification $notification): string
    {
        if (! $notification->id) {
            $notification->id = Str::random();
        }

        $this->storage->put($notification);

        return $notification->id;
    }

    /**
     * Get a notification for the given id.
     *
     * @param string $id
     * @return Notification|null
     */
    public function get(string $id): ?Notification
    {
        return $this->storage->get($id);
    }

    /**
     * Delete a notification.
     *
     * @param string $id
     */
    public function delete(string $id)
    {
        $this->storage->delete($id);
    }

    public function has($id): bool
    {
        return $this->get($id) != null;
    }
}
