使用 [thinkphp-bjyblog](https://github.com/baijunyao/thinkphp-bjyblog)  的童鞋我并没有抛弃你们；  
我还准备好了命令行；  
可以把数据一键从 thinkphp-bjyblog 迁移到 laravel-bjyblog；  
为了防止配置错误造成数据错乱；  
建议先在本地环境测试；  
同时备份好数据；  
把 thinkphp-bjyblog 的数据转成 sql 文件下载到本地；  
举个栗子；  
thinkphp-bjyblog 的数据库叫：`tpblog`；  
laravel-bjyblog 的数据库叫：`laravelblog`;  
把 sql 文件导入到 `tpblog` ；  
修改 .env 配置；  
```
OLD_DB_HOST=127.0.0.1
OLD_DB_PORT=3306
OLD_DB_DATABASE=tpblog
OLD_DB_USERNAME=root
OLD_DB_PASSWORD=
```

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelblog
DB_USERNAME=root
DB_PASSWORD=
```
把账号密码替换成自己的；  
然后运行 `php artisan migration:fromThinkPHPBjyBlog` 命令；  
然后根据 [更新记录](https://baijunyao.com/docs/laravel-bjyblog/更新记录.html) 升级；
