### Change .env file
| key | value |
| ----- | ---- |
| APP_ENV | production |
| APP_DEBUG | false |
| DEBUGBAR_ENABLED | false |
If `redis` is installed ;  
Change `CACHE_DRIVER` to `redis` ;  
If `Supervisor` is installed;
Change `QUEUE_DRIVER` to `redis` ;  
### Composer
composer install --no-dev --optimize-autoloader
### Schedules
```bash
crontab -e
```
Add the following code
```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```
Change `/path-to-your-project` to your project path;