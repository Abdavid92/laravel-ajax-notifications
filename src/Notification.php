<?php


namespace Abdavid92\LaravelAjaxNotifications;

/**
 * Class Notification
 * @package Abdavid92\LaravelAjaxNotifications
 */
class Notification
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var array
     */
    public $header;

    /**
     * @var array
     */
    public $body;

    public function __construct(?string $id = null, ?array $body = null, ?array $header = null)
    {
        $this->id = $id;
        $this->header = $header;
        $this->body = $body;
    }
}