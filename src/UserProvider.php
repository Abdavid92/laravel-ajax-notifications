<?php


namespace Abdavid92\LaravelAjaxNotifications;

use Abdavid92\LaravelAjaxNotifications\Contracts\UserProvider as Contract;

class UserProvider implements Contract
{

    function get()
    {
        return auth()->user();
    }
}