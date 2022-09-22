<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Abdavid92\LaravelAjaxNotifications\Http\Controllers\AjaxNotificationsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AjaxNotificationsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->registerRoutes();
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->instance(Storage::class, function ($app, $sessionId = null) {
            return new SessionStorage($sessionId);
        });
    }

    protected function registerRoutes()
    {
        Route::prefix('ajax-notifications')->group(function () {

            Route::get('/{id}', AjaxNotificationsController::class);
        });
    }
}