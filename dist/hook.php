<?php

if (!is_file('./config.php')) {
    die('缺少配置文件');
}

$config = include 'config.php';
$password = empty($config['password']) ? '' : $config['password'];
$path = empty($config['path']) ? '' : $config['path'];

if (empty($_POST['password'])) {
    die('参数错误');
}

if ($password !== $_POST['password']) {
    die('密码错误');
}

$bash = <<<PHP
cd $path;
git pull;
PHP;

shell_exec($bash);