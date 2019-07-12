 
 
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://img.shields.io/badge/build-passing-brightgreen.svg)
 <a href="https://github.com/pkwenda/share_shell/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-4EB1BA.svg?style=flat-square" alt="Build Status"></a>
 [![Build Status](https://img.shields.io/badge/version-1.0.0-green.svg)](https://www.npmjs.com/package/share_shell)
 [![](https://badge.juejin.im/entry/5b6b23cae51d4519873fa488/likes.svg?style=flat-square)](https://juejin.im/post/5b6b086cf265da0f8d368935)
 
 

## share_shell         share your shell on html

### 安装

```shell
  sudo npm install share_shell -g
```

### 帮助

```shell
  tw --help   #1.0暂时用这个命令，没想到好的缩写
```

![tw --help](http://op0c7euw0.bkt.clouddn.com/share_shell.png)

### 查看版本

```shell
tw --version || tw -v
```

### 使用

```shell
 # tw share "要展示的命令" -p "路径"
 # 例如想 docker ps -a 秀一波你的docker容器
 tw share "docker ps -a" 或 tw s "docker ps -a"  # 默认生成 share_you_shell.html 到当前目录  
 
 # 指定路径
 
 tw share "ls -all" -p /usr/local/html/share_shell.html  #自动创建文件，存在默认覆盖

```


 
- 为什么做这个？灵感是什么？ 

> 源自 [youtube](https://www.youtube.com/watch?v=NPbiyTVU6YA&lc=z23fgjp5zvjyspkx504t1aokgij4o0rzwvzjn3zexosirk0h00410.1533224892000721) 一段对话 ,感兴趣的可以关注一波

 
