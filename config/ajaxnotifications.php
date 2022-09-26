<?php

return [

    /**
     * Storage driver. Support (session, database).
     * Session driver is based in user session, good for simples notifications.
     * Database driver is based in a database table named notifications. Before to use this driver
     * you must be publish an run database migration.
     */
    'storage' => 'session',

    /**
     * Indicate if notifications must be deleted after returned.
     */
    'flash' => false
];