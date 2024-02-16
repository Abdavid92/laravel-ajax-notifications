<?php


namespace Abdavid92\LaravelAjaxNotifications\Contracts;

/**
 * Interface UserProvider
 * @package Abdavid92\LaravelAjaxNotifications\Contracts
 */
interface UserProvider
{
    /**
     * Get authenticated user.
     *
     * @return mixed
     */
    function get(): mixed;
}