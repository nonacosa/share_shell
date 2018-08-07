## share_shell ---- 在网页上展示你的终端

- 安装

```shell
  sudo npm install share_shell -g
```

- 帮助

```shell
  tw --help   #1.0暂时用这个命令，没想到好的缩写
```

![tw --help](http://op0c7euw0.bkt.clouddn.com/share_shell.png)

- 查看版本

```shell
tw --version || tw -v
```

- 使用

```shell
 # 例如想 docker ps -a 秀一波你的docker容器
 tw share "docker ps -a" 或 tw s "docker ps -a"
 # 默认会生成一个 share_you_shell.html 到你执行命令的目录 打开即可分享 online 版本 2.0 提供
 
 # 指定路径
 
 tw share "ls -all" -p /usr/local/html/share_shell.html  #自动创建文件，存在默认覆盖


- todo -- [online](https://github.com/pkwenda/new-bee)

- why and idea  

![flag](http://op0c7euw0.bkt.clouddn.com/D6FCC662-038B-4557-8A64-AF0DB6B3EEB5.png)

