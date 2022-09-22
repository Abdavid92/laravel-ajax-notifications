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
     * Get all notifications.
     *
     * @return array<Notification>
     */
    function all(): array
    {
        return $this->storage->all();
    }

    /**
     * Get first notification.
     *
     * @return Notification|null
     */
    function first(): ?Notification
    {
        $notifications = $this->all();

        if (count($notifications))
            return $notifications[array_key_first($notifications)];

        return null;
    }

    /**
     * Get last notification.
     *
     * @return Notification|null
     */
    function last(): ?Notification
    {
        $notifications = $this->all();

        if (count($notifications))
            return $notifications[array_key_last($notifications)];

        return null;
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

    /**
     * Indicate if the given notification id exists.
     *
     * @param $id
     * @return bool
     */
    public function has($id): bool
    {
        return $this->get($id) != null;
    }

    /**
     * Indicate if some notification exists.
     *
     * @return bool
     */
    public function some(): bool
    {
        return count($this->all());
    }
}
