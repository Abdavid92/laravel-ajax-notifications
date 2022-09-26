<?php

namespace Abdavid92\LaravelAjaxNotifications;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Notification
 * @package Abdavid92\LaravelAjaxNotifications
 *
 * @property string $id
 * @property array $header
 * @property array $body
 *
 * @method static Notification|null find(string $id)
 */
class Notification extends Model
{
    use HasFactory;

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
        'body'
    ];
}
