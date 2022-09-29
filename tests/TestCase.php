<?php


namespace Abdavid92\LaravelAjaxNotifications\Tests;


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
    protected function defineDatabaseMigrations()
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
    protected function getPackageProviders($app)
    {
        return [
            'Abdavid92\LaravelAjaxNotifications\AjaxNotificationsServiceProvider',
        ];
    }

    /**
     * Define environment setup.
     *
     * @param  Application  $app
     * @return void
     */
    protected function defineEnvironment($app)
    {
        $app['config']->set('ajaxnotifications.storage', 'file');
    }
}