<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Illuminate\Support\Collection;
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
     * @var boolean
     */
    private $flash;

    /**
     * AjaxNotifications constructor.
     *
     * @param Storage $storage
     */
    public function __construct(Storage $storage)
    {
        $this->storage = $storage;
        $this->flash = config('ajaxnotifications.flash', false);
    }

    /**
     * Get all notifications.
     *
     * @return Collection<Notification>
     */
    function all(): Collection
    {
        return tap($this->filterByUser($this->storage->get()), function ($items) {


            $this->flash($items);
        });
    }

    /**
     * Get first notification.
     *
     * @return Notification|null
     */
    function first(): ?Notification
    {
        $notifications = $this->all();

        if ($notifications->isNotEmpty())
            return tap($notifications->first(), function ($item) {

                $this->flash($item);
            });

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

        if ($notifications->isNotEmpty())
            return tap($notifications->last(), function ($item) {

                $this->flash($item);
            });

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
            $notification->id = Str::random(40);
        }

        if (! $notification->notifiable) {

            $notification->notifiable()->associate(auth()->user());
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
        return tap($this->storage->get($id), function ($item) {
            $this->flash($item);
        });
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
        return $this->storage->get($id) != null;
    }

    /**
     * Indicate if some notification exists.
     *
     * @return bool
     */
    public function some(): bool
    {
        return $this->storage->get()->isNotEmpty();
    }

    private function flash($items)
    {
        if (is_null($items))
            return;

        if ($this->flash) {

            if ($items instanceof Collection) {

                foreach ($items as $item) {

                    $this->delete($item->id);
                }
            } else {

                $this->delete($items->id);
            }
        }
    }

    private function filterByUser($items)
    {
        if ($items instanceof Collection) {

            $user = auth()->user();

            $toAdd = collect();

            foreach ($items as $item) {

                if ($item->notifiable_id === $user->id) {
                    $toAdd->push($item);
                }
            }

            return $toAdd;
        }

        return $items;
    }
}
