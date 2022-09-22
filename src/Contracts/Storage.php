<?php


namespace Abdavid92\LaravelAjaxNotifications\Contracts;


use Abdavid92\LaravelAjaxNotifications\Notification;

/**
 * Interface Storage Notifications storage contract.
 *
 * @package Abdavid92\LaravelAjaxNotifications\Contracts
 */
interface Storage
{
    /**
     * Get all notifications.
     *
     * @return array
     */
    function all(): array;

    /**
     * Get a notification if exists.
     *
     * @param string $id
     * @return Notification|null
     */
    function get(string $id): ?Notification;

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
    function delete(string $id);
}