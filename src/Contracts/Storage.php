<?php


namespace Abdavid92\LaravelAjaxNotifications\Contracts;


use Abdavid92\LaravelAjaxNotifications\Notification;
use Illuminate\Support\Collection;

/**
 * Interface Storage Notifications storage contract.
 *
 * @package Abdavid92\LaravelAjaxNotifications\Contracts
 */
interface Storage
{
    /**
     * Get a notification if exists or all notifications if id is null.
     *
     * @param string|null $id
     * @return Collection|Notification|null
     */
    function get(?string $id = null): Notification|Collection|null;

    /**
     * Put a notification. If was exists, override.
     *
     * @param Notification $notification
     */
    function put(Notification $notification);

    /**
     * Delete a notification for given id.
     *
     * @param string $id
     * @return mixed
     */
    function delete(string $id): mixed;
}
