<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Abdavid92\LaravelAjaxNotifications\Contracts\FailedNotificationResponse;
use Abdavid92\LaravelAjaxNotifications\Contracts\NotificationResponse;
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
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../migrations' => database_path('migrations')
            ], 'notifications-migrations');

            $this->publishes([
                __DIR__ . '/../config/ajaxnotifications.php' => config_path('ajaxnotifications.php')
            ], 'notifications-config');
        }

        $this->defineRoutes();
        $this->registerDirectives();
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind('ajax-notifications.session', SessionStorage::class);
        $this->app->bind('ajax-notifications.database', DatabaseStorage::class);
        $this->app->bind('ajax-notifications.file', FileStorage::class);

        $this->app->bind(Storage::class, function ($app) {

            $storage = config('ajaxnotifications.storage', 'session');

            return $app->make('ajax-notifications.'.$storage);
        });

        $this->app->bind(
            NotificationResponse::class,
            Responses\NotificationResponse::class
        );

        $this->app->bind(
            FailedNotificationResponse::class,
            Responses\FailedNotificationResponse::class
        );

        $this->app->bind(
            \Abdavid92\LaravelAjaxNotifications\Contracts\UserProvider::class,
            UserProvider::class
        );
    }

    protected function defineRoutes(): void
    {
        $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');
    }

    protected function registerDirectives(): void
    {
        Blade::if('notification', function ($value = null) {

            $notifications = ajax_notifications();

            if ($value) {
                return $notifications->has($value);
            }

            return $notifications->some();
        });

        Blade::directive('ajaxnotifications', function () {

            $script = file_get_contents(__DIR__.'/../dist/laravel-ajax-notifications.js');

            return "<script>{$script}</script>";
        });
    }
}
