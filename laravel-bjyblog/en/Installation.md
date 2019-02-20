Clone laravel-bjyblog with git:
```bash
git clone https://gitee.com/baijunyao/laravel-bjyblog.git && cd laravel-bjyblog.test  
```
Rename the `.env.example` file to `.env` :
```bash  
cp .env.example .env  
```  
Change `.env` config  
For example:
| config | value | 
| ------ | ----- |
| APP_NAME | bjyblog |
| APP_URL | https://baijunyao.com |
| DB_DATABASE | laravel_bjyblog |
| DB_USERNAME | laravel_bjyblog |
| DB_PASSWORD | \*\*\* |

Composer install: 
```bash  
composer install  
```  
Application Key:
```bash  
php artisan key:generate  
```  
Migrate: 
```bash  
php artisan migrate  
```  
Seed:
```bash  
php artisan db:seed  
```  
If you visit the site before `db:seed`, you need to clear cache:
```bash
php artisan cache:clear
```
