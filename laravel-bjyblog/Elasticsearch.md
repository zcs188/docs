想在线实验可以使用[腾讯云开发者实验室](https://cloud.tencent.com/developer/labs/lab/10433)；  
elasticsearch 需要 java8 以上；  
这里安装最新版的 java10 ；  
下载 jdk  
```bash   
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http:%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/10.0.1+10/fb4372174a714e6b8c52526dc134031e/jdk-10.0.1_linux-x64_bin.rpm"  
```  
因为版本会一直升级；  
如果执行上面这段代码返回了 ERROR 404: Not Found ；  
那说明有新版本了；  
那就自己去官网复制最新的下载链接；  
[http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html) ;  
![](/uploads/article/20180603/5b13f876ad730.jpg)  
选中 Accept License Agreement 然后在 jdk-10.0.1_linux-x64_bin.rpm 上右键复制链接地址；  
替换上面命令中的下载链接；  

安装 jdk 注意文件名要跟链接中的保持一直；  
```bash  
sudo rpm -ivh jdk-10.0.1_linux-x64_bin.rpm  
```  
能查看到版本号则表示安装成功；  
```bash  
java -version  
```  

下载 elasticsearch ；  
```bash  
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.4.rpm  
```  

安装 elasticsearch ；  
```bash  
sudo rpm -ivh elasticsearch-6.2.4.rpm  
```  

安装完成后编辑配置项  
```bash  
vim /etc/elasticsearch/elasticsearch.yml  
```  
去掉下面三行的注释；  
```bash  
bootstrap.memory_lock: true  
network.host: 192.168.0.1  
http.port: 9200  
```  
然后把 network.host 改成 `localhost`  
![](/uploads/article/20180603/5b13f885156ea.jpg)  

启动 elasticsearch ；  
```bash  
sudo systemctl daemon-reload  
sudo systemctl enable elasticsearch.service  
sudo systemctl start elasticsearch  
```  

稍等片刻给 elasticsearch 个启动的时间；  
因为 elasticsearch 启动的略慢；  
后续涉及到重启 elasticsearch 的时候也都记得稍等片刻；  

然后查看 9200 端口检查是否成功启动；  
```bash  
netstat -plntu  
```  
![](/uploads/article/20180603/5b13f88f7ea53.jpg)  

如果半天过后仍然没有启动起来；  
可能是内存不够出错；  
```bash  
vim /etc/elasticsearch/jvm.options  
```  
把内存改为自己服务器内存的一半以下；  
比如说这里改为 512M ；  
![](/uploads/article/20180606/5b17771055b51.jpg)  
尝试启动；  
```bash  
sudo systemctl restart elasticsearch  
```  

查看状态是否正常；  
```bash  
curl 'localhost:9200'  
```  
![](/uploads/article/20180603/5b13f89b8e846.jpg)  

至此 elasticsearch 算是安装完成了；  
但是如果想用来搜索中文；  
还需要安装中文分词；  
怎么算分词呢？  
[全文搜索和中文分词](https://baijunyao.com/article/153) 文章中已经简单介绍过了；  
这里我们从 elasticsearch 实战一遍；  
比如说 `白俊遥技术博客` 这句话；  
elasticsearch内置的分词器对中文相当不友好；  
只会一个只一个字的分；  
```bash  
curl -H 'Content-Type: application/json'  -XGET 'localhost:9200/_analyze?pretty' -d '{"text":"白俊遥技术博客"}'  
```  
![](/uploads/article/20180603/5b13f8b4333cf.jpg)  

所以我们需要一个中文分词器；  
这里选择和 elasticsearch 配套的 ik-analyzer ；  

安装 ik-analyzer ；  
```bash  
/usr/share/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.2.4/elasticsearch-analysis-ik-6.2.4.zip  
```  
如果报下面这种错误的话可能是网络不好；  
```bash  
Exception in thread "main" java.net.ConnectException: Connection timed out (Connection timed out)  
at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)  
```  
沐浴更衣大念帅白最帅；  
再试几次即可；  

然后重新启动下服务；  
```bash  
sudo systemctl restart elasticsearch  
```  

看下 ik-analyzer 的效果；  
```bash  
curl -H 'Content-Type: application/json'  -XGET 'localhost:9200/_analyze?pretty' -d '{"analyzer":"ik_max_word","text":"白俊遥技术博客"}'  
```  
![](/uploads/article/20180603/5b13f8d104254.jpg)  
我们可以看到 技术 和 博客 两个词语已经成功组合到了一起；  
然而本博主 白俊遥 的名字被硬生生的拆成了3个字这怎么忍；  

还好强大的 analysis-ik 支持自定义词库；  
增加自定义词库；  
```bash  
vim /etc/elasticsearch/analysis-ik/IKAnalyzer.cfg.xml  
```  
![](/uploads/article/20180603/5b13f8e5b6947.jpg)  
增加一个 白俊遥 到词库；  
```bash  
echo '白俊遥' > /etc/elasticsearch/analysis-ik/baijunyao.dic  
```  

重新启动下服务；  
```bash  
sudo systemctl restart elasticsearch  
```  
再看下分词效果 ；  
```bash  
curl -H 'Content-Type: application/json'  -XGET 'localhost:9200/_analyze?pretty' -d '{"analyzer":"ik_max_word","text":"白俊遥技术博客"}'  
```  
![](/uploads/article/20180603/5b13f8fe670c5.jpg)  
双击 666 ；  

回到项目增加配置项；  
/.env ;
```bash
SCOUT_DRIVER=elasticsearch
```
生成索引；  
```bash
php artisan elasticsearch:import "App\Models\Article"
```

