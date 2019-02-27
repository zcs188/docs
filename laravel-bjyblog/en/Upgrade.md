This blog will be updated every Saturday.  
There are two ways to upgrade to the latest version.  
### Use git
If you log in to the production server.  
You can pull the latest code and update.  
```bash
git pull 
composer install --no-dev
php artisan bjyblog:update
```
### Use envoy
If you are in local.  
You can use envoy.  
Modify the .env file.  
```bash
DEPLOY_IP=47.94.110.251
DEPLOY_PORT=22
DEPLOY_USER=root
DEPLOY_PATH=/www/baijunyao.com
DEPLOY_BRANCH=master
```
| config | description |
| --- | ---- |
| DEPLOY_IP | your server ip |
| DEPLOY_PORT | ssh port | 
| DEPLOY_USER | ssh user | 
| DEPLOY_PATH | blog path |
| DEPLOY_BRANCH | git branch |
Install [Envoy](https://laravel.com/docs/5.5/envoy).  
Run follow command when need update.  
```bash 
envoy run deploy
```