<?php

use Abdavid92\LaravelAjaxNotifications\Http\Controllers\AjaxNotificationsController;
use Illuminate\Support\Facades\Route;

Route::prefix('ajax-notifications')
    ->middleware(config('ajaxnotifications.middlewares', ['web', 'auth']))
    ->group(function () {

    Route::get('/', [AjaxNotificationsController::class, 'all'])
        ->name('ajax-notifications.all');

    Route::get('/{id}', [AjaxNotificationsController::class, 'get'])
        ->name('ajax-notifications.get');

    Route::get('/first', [AjaxNotificationsController::class, 'first'])
        ->name('ajax-notifications.first');

    Route::get('/last', [AjaxNotificationsController::class, 'last'])
        ->name('ajax-notifications.last');

    Route::delete('/{id}', [AjaxNotificationsController::class, 'delete'])
        ->name('ajax-notifications.delete');
});