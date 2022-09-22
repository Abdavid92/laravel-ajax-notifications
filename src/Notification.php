<?php


namespace Abdavid92\LaravelAjaxNotifications;

use JsonSerializable;

/**
 * Class Notification
 * @package Abdavid92\LaravelAjaxNotifications
 */
class Notification implements JsonSerializable
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

    /**
     * Notification constructor.
     * @param string|null $id
     * @param array|null $body
     * @param array|null $header
     */
    public function __construct(?string $id = null, ?array $body = null, ?array $header = null)
    {
        $this->id = $id;
        $this->header = $header;
        $this->body = $body;
    }

    public function jsonSerialize()
    {
        return json_encode($this);
    }
}