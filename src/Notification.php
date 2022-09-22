<?php


namespace Abdavid92\LaravelAjaxNotifications;

use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Http\JsonResponse;
use JsonSerializable;

/**
 * Class Notification
 * @package Abdavid92\LaravelAjaxNotifications
 */
class Notification implements JsonSerializable, Jsonable
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

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'header' => $this->header,
            'body' => $this->body
        ];
    }

    /**
     * @param int $options
     * @return JsonResponse
     */
    public function toJson($options = 0): JsonResponse
    {
        return new JsonResponse($this->jsonSerialize());
    }
}