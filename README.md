# 欢迎来到`Minecraft-WebSocket`!
`WebSocket` 是一个伟大的协议，它本质上是`http`，不同的是，它不是一问一答，而是可以长连接，服务端和客户端想发就发。

本软件永久免费，使用`Mozilla lisence`！！！！！

本软件只适用于`Minecraft Bedrock Edition`


```
好处：
1. 移动端0.16+就有WebSocket了
2. 无限潜力
3. 免费mod
4. 无广告
5. 全体成员都支持
```

## Hello World
先在[Nodejs官网](http://nodejs.cn/download/)安装Node
然后`npm install mcws`下载我的项目，

然后这样打
```javascript
var mcws=require("mcws");

var server=new mcws(function(choise,message,conn){
if(choise=="create"){
conn.sendcommand("/say Hello world");
}
},6665);
```
随便使用一个文本编辑器，将其保存为`mcwstest.js`

在文件资源管理器的地址栏单击，输入`node mcwstest.js`

进入`Minecraft BedRock Edition`,输入`/connect 127.0.0.1:6665`

你就能最基本的看到`Helloworld`提示了！

更多功能请自行挖掘，
