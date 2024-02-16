<?php


namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\UserProvider as Contract;

/**
 * @author Abel David.
 */
class UserProvider implements Contract
{

    function get(): mixed
    {
        return auth()->user();
    }
}