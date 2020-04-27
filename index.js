module.exports=function(onmessage,port){
var ws = require("nodejs-websocket");
var child_process = require('child_process');
global.fs = require("fs")
console.log("Started to Create...")
Date.prototype.format = function(fmt)
{ 
var o = {
"M+" : this.getMonth()+1, //月份
"d+" : this.getDate(), //日
"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
"H+" : this.getHours(), //小时
"m+" : this.getMinutes(), //分
"s+" : this.getSeconds(), //秒
"q+" : Math.floor((this.getMonth()+3)/3), //季度
"S" : this.getMilliseconds() //毫秒
};
if(/(y+)/.test(fmt))
fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
for(var k in o)
if(new RegExp("("+ k +")").test(fmt))
fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
return fmt;
}
return ws.createServer(function(conn){
	conn.sendcommand=function(execstr){
	conn.sendText(`{
	"body": {
		"origin": {
			"type": "player"
		},
		"commandLine": "`+execstr+`",
		"version": 1
	},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "commandRequest",
		"version": 1,
		"messageType": "commandRequest"
	}
}`);
}
	onmessage("create",`{
  "body": {
    "eventName": "socketcreated",
,
    "properties": {
		"text":"A User Connect You!"
	}
  }
	}`,conn);
setTimeout(function(){
		var eventlist=["BossKilled","BlockBroken","BlockPlaced","ItemUsed","CraftingSessionCompleted","PlayerTravelled","ScreenChanged","MobKilled","EntitySpawned","PlayerMessage","CommandResponse"];
	for (var ss=0;ss<eventlist.length;ss++)
	        conn.sendText(`{
	"body": {
		"eventName": "`+eventlist[ss]+`"
	},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe",
		"version": 1,
		"messageType": "commandRequest"
	}
}`);
},5000);
conn.on("text", function (str) {
	onmessage("text",JSON.parse(str),conn);
})
    conn.on("close", function (code, reason) {
        console.log("关闭连接",+code+","+reason)
});
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
});


}).listen(port)

console.log("WebSocket done")



}