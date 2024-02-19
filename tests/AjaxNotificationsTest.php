<?php


namespace Abdavid92\LaravelAjaxNotifications\Tests;


use Abdavid92\LaravelAjaxNotifications\AjaxNotifications;
use Abdavid92\LaravelAjaxNotifications\Notification;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class AjaxNotificationsTest extends TestCase
{
    /**
     * @var AjaxNotifications
     */
    private AjaxNotifications $notifications;

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

        $last = $this->notifications->last();

        $this->assertNotNull($last);

        // Compare with $first_id because the first notifications was modified,
        // for that reason no more the first notification else the last.
        $this->assertEquals($first_id, $last->id);

        echo $first;
        echo '\n';
        echo $last;
    }

    public function test_all()
    {
        $collection = $this->notifications->all();

        $this->assertNotEmpty($collection);
    }

    public function test_delete()
    {
        foreach ($this->notifications->all() as $n) {
            $this->notifications->delete($n->id);
        }

        $this->assertEmpty($this->notifications->all());
    }
}