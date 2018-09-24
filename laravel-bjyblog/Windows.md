先讲一个 windows 开发环境下搭建；  
此处以 phpstudy 为示例；  
官网链接：[http://www.phpstudy.net](http://www.phpstudy.net)  
下载安装我就不讲了；  

安装完运行；  
如果提示防火墙  
![](/uploads/article/20170625/594fc9cf78bfa.jpg)  
通通点允许访问即可；  

点击切换版本；  
可以各种切换环境；  
![](/uploads/article/20170625/594fca14b7b7d.jpg)  
当选择php7的时候；  
如果报缺少VC库的错误；  
![缺少VC库](/uploads/article/20170625/594fc99841636.jpg)  
点确定；  
按提示下载响应的VC库并安装；  

好了；重点需要讲的虚拟主机的配置来了；  
点击其他选项；  
![](/uploads/article/20170625/594fc9fc96c94.jpg)  
站点域名管理  
![](/uploads/article/20170625/594fca2db22e7.jpg)  
网站域名就是开发时候用的虚拟的域名；  
我这里以 bjy.dev 为例；  
这里建议虚拟的域名都以 .dev 为后缀；  
避免使用 .com 和真是的域名冲突；  
网站目录就是项目的目录；  
比如说: `E:\document\bjyblog-laravvel`  
如果是 laravel 项目；  
则需要指定到项目的 public 目录  
比如说：`E:\document\bjyblog-laravvel\public`  
然后点击新增；  
保存设置并生成配置文件；  

虚拟主机的设置就完成了；  
为了让自定义的虚拟域名生效；  
点击打开 hosts ；  
![](/uploads/article/20170625/594fd00592e82.jpg)  
然后把自己自定义的虚拟域名；  
一行一个的添加进来就行了；  
比如说：  
```hosts
127.0.0.1     bjy.dev
```
127.0.0.1为固定值；  
bjy.dev 为自定义的虚拟域名；  
![](/uploads/article/20170625/594fca4000bfd.jpg)  

另外需要开启 openssl 和 fileinfo 扩展；  
可以按下图勾选即可；  
![](/uploads/article/20171123/5a163eac84ea8.jpg)  

默认我们的 url 都是带 index.php/... ；  
如果我们想去掉这个 index.php 就需要 rewrite 了；  

如果使用的是 Apache ；  
开启 mod_rewrite 模块即可；  
![](/uploads/article/20180308/5aa0ab05bd225.jpg)  

如果是 Nginx ；  
则在配置项中加上这句  
```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```
![](/uploads/article/20180308/5aa0ab10428f1.jpg)