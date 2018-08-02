Windows 上面可以用来测试；  
生产环境则建议使用 Linux；  
这里示例是使用 CentOS 7.4 ；  
使用宝塔面板；  
如果还没有服务器建议购买阿里云的或者是腾讯云的；  
这台服务器需要是未安装过 php 的环境；  
如果服务器已经被折腾过一番；  
建议备份下数据后重装下环境；  
阿里云和腾讯云都有重装系统的选项；  
![](https://baijunyao.com/uploads/article/20180422/5adc6cd93935a.jpg)  

一般应用于生产环境的的服务器都是安装的不带桌面的版本 linux 系统；  
面对着黑乎乎的命令行窗口；  
对于不熟悉服务器的童鞋来说；  
搭建 LNMP 环境来说是一件比较折腾的事；  
即便是稍微熟悉点的童鞋管理服务器也会觉得繁琐；  
这时候如果可以通过界面代替命令行来操作服务器那想必是极好的；  
[宝塔](https://bt.cn)就是这样一款国产的免费的面板；  

要使用宝塔面板首先需要开启端口；  
腾讯云：[https://www.bt.cn/bbs/thread-1229-1-1.html](https://www.bt.cn/bbs/thread-1229-1-1.html)  
阿里云：[https://www.bt.cn/bbs/thread-2897-1-1.html](https://www.bt.cn/bbs/thread-2897-1-1.html)  
华为云：[https://www.bt.cn/bbs/thread-3923-1-1.html](https://www.bt.cn/bbs/thread-3923-1-1.html)  
然后执行下面的命令即可；  
```bash  
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh  
```  
中途如果询问 Do you want to install Bt-Panel to the /www directory now?(y/n): 输入 y 回车即可；  
然后就可以打开王者农药了但是不要匹配组队；  
进入游戏领领奖励抽抽奖的时间很快就装完了；  
![](https://baijunyao.com/uploads/article/20180422/5adc6ce5a57d3.jpg)  
安装成功后会有登录链接账号以及密码；  
浏览器里打开链接输入账号密码登录；  
登录成功后在首页会自动弹出环境类型选择；  
这里我们使用LNMP；  
选最新的php7.2 ；  
选择编译安装；  
![](https://baijunyao.com/uploads/article/20180422/5adc6cf630881.jpg)  
如果不小心关掉了没关系哈；  
在首页刷新下就又会自动弹出来了；  
点了一键安装后就可以匹配游戏了；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d085e2c3.jpg)  
这个稍微会比较慢；  
全程自动化安装不用管她；  
输完两局后再回来就完成了；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d1485b09.jpg)  
我们还需要安装一些 php 的扩展；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d301721a.jpg)  
再打开农药；  
这次开一局输完回来就安装完成了；  
取消被禁用的 proc_open 函数；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d3df41d0.jpg)  
新建一个站点；  
我这里以 laravel-bjyblog.test 为例；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d4949d6d.jpg)  
可以把域名解析到服务器的 ip 了；  
地址栏输入域名即可访问项目；  
如果没有解析域名；  
可以直接访问 ip 也行；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d58079da.jpg)  
到这站点已经创建成功了；  
下面我们来安装 laravel-bjyblog ；  
回到命令行我们这里使用 git 安装 laravel-bjyblog ；  
先进入站点；  
```bash  
cd /www/wwwroot/laravel-bjyblog.test  
```  
删除默认的文件  
```bash  
rm -rf index.html .htaccess 404.html  
```  
初始化项目  
```bash  
git init  
```  
设置项目仓库地址  
```bash  
git remote add origin https://gitee.com/baijunyao/laravel-bjyblog.git  
```  
拉取项目  
```bash  
git pull origin master  
```  
接着就是上篇文章[如何正确的下载安装使用别人的laravel项目？](https://baijunyao.com/article/148)讲的安装项目了；  
我们需要复制跟目录下的 `.env.example` 文件并重命名为 `.env` ；  
```bash  
cp .env.example .env  
```  
使用 vim 编辑 .env 或者使用我们创建站点时候的 ftp ；  
```bash  
vim .env  
```  
我们需要改成自己的实际配置；  
APP_NAME 就是自己的项目名称比如我的白俊遥博客；  
APP_URL 就是我们的项目链接比如说我的 http://laravel-bjyblog.test；  
DB_DATABASE 就是我们的数据库名比如说 laravel_bjyblog；  
DB_USERNAME 数据库用户名比如说 laravel_bjyblog ；  
DB_PASSWORD 数据库密码比如说 \*\*\* ；  
宝塔并没有安装 composer ;  
我们自己安装下；  
```bash  
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"  
php composer-setup.php  
php -r "unlink('composer-setup.php');"  
```  
设置国内镜像  
```bash  
composer config -g repo.packagist composer https://packagist.phpcomposer.com  
```  
使用 composer ；  
```bash  
composer install  
```  
生成 key ；  
```bash  
php artisan key:generate  
```  
生成数据表；  
```bash  
php artisan migrate  
```  
生成初始化的数据；  
```bash  
php artisan db:seed  
```  
项目已经安装完成了；  
但是这时候还不能访问；  
我们还需要配置下站点；  
把网址目录指向到 public；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d732277b.jpg)  
定义伪静态；  
![](https://baijunyao.com/uploads/article/20180422/5adc6d80bf43c.jpg)  
把所有者改为 www  
```bash  
chown -R www:www * .*  
```  
赋予权限  
```bash  
chmod -R 755 *  
```  
现在可以访问下域名或者 ip ；  
一个 laravel-bjyblog 博客已经展现在你面前了；  
如果有新的版本需要更新；  
直接拉取下；  
```bash  
git pull origin master  
```  
安装扩展包；  
```bash  
composer install   
```  
执行表迁移；  
```bash  
php artisan migrate  
```  
如果测试没问题了要把博客正式对外发布了；  
还需要做点工作；  
首先修改 .env   
```bash  
vim .env  
```  
把 `APP_ENV` 改为 `production` ;  
把 `APP_DEBUG` 改为 `false` ;  
执行 composer ;  
```bash  
composer install --no-dev  
```  
完工；  