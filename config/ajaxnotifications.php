<?php

return [
    /**
     * Indicate if fetch notifications is enabled.
     */
    'enabled' => true,
    
    /**
     * Storage driver. Support (session, database, file).
     * Session driver is based in user session, good for simples notifications.
     * Database driver is based in a database table named notifications. Before to use this driver
     * you must be published a run database migration.
     * File driver is based in local file storage.
     */
    'storage' => 'session',

    /**
     * Indicate if notifications must be deleted after returned.
     */
    'flash' => true,

    /**
     * Interval to fetch notifications in frontend.
     */
    'fetch_interval' => 5000,

    /**
     * Routes middlewares.
     */
    'middlewares' => [
        'web',
        'auth:sanctum'
    ],

    /**
     * Storage drivers
     */
    'storages' => [
        'session' => [
            'session_key' => 'ajax-notifications'
        ],
        'file' => [
            'directory' => 'ajax-notifications'
        ]
    ],

    /**
     * Indicate if debug mode is enabled.
     */
    'debug' => env('APP_DEBUG', false)
];
