使用 [thinkphp-bjyblog](https://github.com/baijunyao/thinkphp-bjyblog)  的童鞋我并没有抛弃你们；  
我还准备好了命令行；  
可以把数据一键从 thinkphp-bjyblog 迁移到 laravel-bjyblog；  
建议先在本地环境测试；  
把 thinkphp-bjyblog 的数据导入到本地；  
比如说名为 oldblog 的数据库中；
配置 .env 的如下配置；  
```
OLD_DB_HOST=127.0.0.1
OLD_DB_PORT=3306
OLD_DB_DATABASE=oldblog
OLD_DB_USERNAME=root
OLD_DB_PASSWORD=
```
然后运行 `php artisan migration:fromThinkPHPBjyBlog`
