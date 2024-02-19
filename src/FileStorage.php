<?php


namespace Abdavid92\LaravelAjaxNotifications;


use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Throwable;

class FileStorage extends AbstractStorage
{

    /**
     * Storage directory.
     */
    private string $dir;

    /**
     * Storage disk.
     */
    private const DISK = 'local';

    public function __construct()
    {
        $this->dir = config('ajaxnotifications.storages.file.directory', 'ajax-notifications');
    }

    function get(?string $id = null): Notification|Collection|null
    {
        try {

            if ($id) {

                $json = Storage::disk(self::DISK)
                    ->get($this->dir.'/'.$id.'.json');

                return $this->fromJson($json);
            } else {

                $files = Storage::disk(self::DISK)
                    ->files($this->dir);

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

    function put(Notification $notification): void
    {
        $this->updateTimestampFields($notification);

        Storage::disk(self::DISK)->put(
            $this->dir.'/'.$notification->id.'.json',
            $notification->toJson(),
            [
                'disk' => self::DISK
            ]
        );
    }

    function delete(string $id): mixed
    {
        return Storage::disk(self::DISK)
            ->delete($this->dir.'/'.$id.'.json');
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