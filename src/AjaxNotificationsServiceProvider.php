<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Abdavid92\LaravelAjaxNotifications\Http\Controllers\AjaxNotificationsController;
use Illuminate\Support\Facades\Blade;
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
        $this->registerDirectives();
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->instance(Storage::class, function ($app, $args) {
            return new SessionStorage($args);
        });
    }

    protected function registerRoutes()
    {
        Route::prefix('ajax-notifications')->group(function () {

            Route::get('/{id}', AjaxNotificationsController::class);
        });
    }

    protected function registerDirectives()
    {
        Blade::if('notification', function ($value = null) {

            $notifications = ajax_notifications();

            if ($value) {
                return $notifications->has($value);
            }

            return $notifications->some();
        });
    }
}