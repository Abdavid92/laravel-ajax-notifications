<?php


namespace Abdavid92\LaravelAjaxNotifications\Tests;


use Abdavid92\LaravelAjaxNotifications\AjaxNotificationsServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $user = tap(new User(), function ($user) {
            $user->name = 'Admin';
            $user->email = 'admin@mail.com';
            $user->password = Hash::make('12345678');
            $user->save();
        });

        $this->actingAs($user);
    }

    /**
     * Ignore package discovery from.
     *
     * @return array<int, array>
     */
    public function ignorePackageDiscoveriesFrom(): array
    {
        return [];
    }

    /**
     * Define database migrations.
     *
     * @return void
     */
    protected function defineDatabaseMigrations(): void
    {
        $this->loadLaravelMigrations();
        $this->loadMigrationsFrom(__DIR__ . '/../migrations');
    }

    /**
     * Get package providers.
     *
     * @param  Application  $app
     *
     * @return array<int, string>
     */
    protected function getPackageProviders($app): array
    {
        return [
            AjaxNotificationsServiceProvider::class
        ];
    }

    /**
     * Define environment setup.
     *
     * @param  Application  $app
     * @return void
     */
    protected function defineEnvironment($app): void
    {
        $app['config']->set('ajaxnotifications.storage', 'session');
        $app['config']->set('ajaxnotifications.flash', false);
    }
}