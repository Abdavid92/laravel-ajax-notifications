<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Abdavid92\LaravelAjaxNotifications\Contracts\Storage;
use Throwable;

class FileStorage implements Storage
{

    /**
     * Storage directory.
     */
    private const DIR = 'ajax-notifications';

    /**
     * Storage disk.
     */
    private const DISK = 'local';

    function get(?string $id = null)
    {
        try {

            if ($id) {

                $json = \Illuminate\Support\Facades\Storage::disk(self::DISK)
                    ->get(self::DIR.'/'.$id.'.json');

                return $this->fromJson($json);
            } else {

                $files = \Illuminate\Support\Facades\Storage::disk(self::DISK)
                    ->files(self::DIR);

                $collection = collect();

                foreach ($files as $f) {

                    $json = \Illuminate\Support\Facades\Storage::disk(self::DISK)
                        ->get($f);

                    $collection->push($this->fromJson($json));
                }

                return $collection->sortBy('created_at');
            }
        } catch (Throwable $e) {

        }

        return null;
    }

    function put(Notification $notification)
    {
        $oldNotification = $this->get($notification->id);

        if ($oldNotification) {
            $notification->created_at = $oldNotification->created_at;
            $notification->updated_at = now();
        } else {
            $notification->created_at = now();
            $notification->updated_at = $notification->created_at;
        }

        \Illuminate\Support\Facades\Storage::disk(self::DISK)->put(
            self::DIR.'/'.$notification->id.'.json',
            $notification->toJson(),
            [
                'disk' => self::DISK
            ]
        );
    }

    function delete(string $id)
    {
        \Illuminate\Support\Facades\Storage::disk(self::DISK)
            ->delete(self::DIR.'/'.$id.'.json');
    }

    private function fromJson($json): Notification
    {
        $json = json_decode($json, true);

        return new Notification([
            'id' => $json['id'],
            'header' => $json['header'] ?? null,
            'body' => $json['body'],
            'notifiable_id' => $json['notifiable_id'],
            'notifiable_type' => $json['notifiable_type'],
            'created_at' => $json['created_at'],
            'updated_at' => $json['updated_at']
        ]);
    }
}