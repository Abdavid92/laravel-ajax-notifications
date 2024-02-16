<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * Class Notification
 * @package Abdavid92\LaravelAjaxNotifications
 * @author Abel David.
 *
 * @property string $id
 * @property array $header
 * @property array $body
 * @property Model $notifiable
 * @property string $created_at
 * @property string $updated_at
 *
 * @method static Notification|null find(string $id)
 */
class Notification extends Model
{
    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'header' => 'array',
        'body' => 'array'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'header',
        'body',
        'notifiable_id',
        'notifiable_type',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the notifiable model that the access notifications belongs to.
     *
     * @return MorphTo
     */
    public function notifiable(): MorphTo
    {
        return $this->morphTo('notifiable');
    }
}
