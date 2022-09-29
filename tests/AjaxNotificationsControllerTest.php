<?php


namespace Abdavid92\LaravelAjaxNotifications\Tests;


use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;

class AjaxNotificationsControllerTest extends TestCase
{
    /**
     * @var AjaxNotifications
     */
    private $notifications;

    protected function setUp(): void
    {
        parent::setUp();
        $this->notifications = app(AjaxNotifications::class);
    }

    public function test_all()
    {
        $response = $this->get(route('ajax-notifications.all'));

        $response->assertOk();

        print_r($response->content());
    }

    public function test_get()
    {
        $first = $this->notifications->first();

        $response = $this->get(route('ajax-notifications.get', ['id' => $first->id]));

        $response->assertOk();

        print_r($response->content());
    }
}