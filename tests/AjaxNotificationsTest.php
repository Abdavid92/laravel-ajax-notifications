<?php


namespace Abdavid92\LaravelAjaxNotifications\Tests;


use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Notification;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class AjaxNotificationsTest extends TestCase
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

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function test_send()
    {
        $first_id = $this->notifications->send(new Notification([
            'body' => [
                'title' => 'Notification 1',
                'description' => 'A simple notification'
            ]
        ]));

        $last_id = $this->notifications->send(new Notification([
            'body' => [
                'title' => 'Notification 2',
                'description' => 'Other simple notification'
            ]
        ]));

        //Override first notification
        $this->notifications->send(new Notification([
            'id' => $first_id,
            'body' => [
                'title' => 'Notification 1',
                'description' => 'A modified notification'
            ]
        ]));

        $this->test_all();

        $notification = $this->notifications->get($first_id);

        $this->assertNotNull($notification);

        echo $notification;

        $first = $this->notifications->first();

        $this->assertNotNull($first);

        $this->assertEquals($first_id, $first->id);

        $last = $this->notifications->last();

        $this->assertNotNull($last);

        $this->assertEquals($last_id, $last->id);

        echo $first;
        echo $last;
    }

    public function test_all()
    {
        $collection = $this->notifications->all();

        $this->assertNotEmpty($collection);
    }
}