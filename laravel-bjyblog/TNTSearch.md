TNTSearch+jieba-php这套组合可以在不依赖第三方的情况下实现中文全文搜索；
特别的适合博客这种小项目；
因为依赖 SQLite 存储索引；
再确认下自己的 php 开启了以下扩展；
```bash
pdo_sqlite
sqlite3
mbstring
```

修改 .env 配置项；
```bash
SCOUT_DRIVER=tntsearch
TNTSEARCH_TOKENIZER=jieba
```

生成索引；
```bash
php artisan scout:import "App\Models\Article"
```
