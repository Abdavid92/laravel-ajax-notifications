<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Illuminate\Support\Facades\Storage;
use Throwable;

class FileStorage extends AbstractStorage
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

                $json = Storage::disk(self::DISK)
                    ->get(self::DIR.'/'.$id.'.json');

                return $this->fromJson($json);
            } else {

                $files = Storage::disk(self::DISK)
                    ->files(self::DIR);

                $collection = collect();

                foreach ($files as $f) {

                    $json = Storage::disk(self::DISK)
                        ->get($f);

                    $collection->push($this->fromJson($json));
                }

                return $collection->sortBy(self::SORT_BY);
            }
        } catch (Throwable $e) {

        }

        return null;
    }

    function put(Notification $notification)
    {
        $this->updateTimestampFields($notification);

        Storage::disk(self::DISK)->put(
            self::DIR.'/'.$notification->id.'.json',
            $notification->toJson(),
            [
                'disk' => self::DISK
            ]
        );
    }

    function delete(string $id)
    {
        Storage::disk(self::DISK)
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