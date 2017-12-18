---
title: WebSocket相关笔记
date: 2013-04-21 00:00:00 Z
categories:
- article
tags:
- websocket
- html5
layout: post
'': html5
---

WebSocket 协议本质上是一个基于 TCP 的协议。为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息”Upgrade: WebSocket”表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

WebSocket不是一个新技术，只是HTML5规范中规定了一些接口，浏览器实现，供我们调用，然后通过一种特定的报文格式与后端通信，本质上其实是Socket通信

相比HTTP协议的几个问题：

1. 为一个WEB客户端潜在的建产多个TCP连接。
2. HTTP头信息臃肿，每次传输都附带。
3. 基于请求-响应模式，HTTP服务端不能主动推送(push)数据到客户端。

WebSocket有这么些个好处:

1. 只建立一个TCP连接
2. 服务器端与客户端可以互相推送数据
3. 轻量级的头信息，减少数据量
4. 接口简单，实现方便


## WebSocket 握手协议

    客户端到服务端： 
    GET ws://localhost:8090/TestWebSocket/test.do HTTP/1.1
    Pragma: no-cache
    Origin: http://localhost:8090
    Host: localhost:8090
    Sec-WebSocket-Key: kvapOIVORIYg1uWM5UeawQ==
    Upgrade: websocket
    Sec-WebSocket-Extensions: x-webkit-deflate-frame
    Cache-Control: no-cache
    Connection: Upgrade
    Sec-WebSocket-Version: 13
    
    服务端到客户端：
    HTTP/1.1 101 Switching Protocols
    Date: Sun, 21 Apr 2013 10:09:43 GMT
    Sec-WebSocket-Accept: GwjLfGrMUKdi2yDFRnqncUhuXwQ=
    Server: Apache-Coyote/1.1
    Connection: upgrade
    Upgrade: websocket
    

其中，`Upgrade:websocket` 表示客户端请求将通信协议由HTTP升级为WebSocket, 然后浏览器与服务器端会通过这个`Sec-WebSocket-Key`和`Sec-WebSocket-Accept`来进行握手协议，建立连接。

连接建立成功后，从Chrome的Network面板中可以看到这个请求一直处于Pending状态，表示与服务器端一直在连接着，可随时发送和接收数据。

## JAVA服务器端

Tomcat对WebSocket做了支持，可以编写继承自WebSocketServlet的Servlet, 然后用MessageInbound或StreamInbound来处理消息。较新版本的tomcat还可以直接获取到请求的request，从而操作Session。

我只试了在Tomcat7.0.32版本，更低的没试。因为WebSocket的标准也不太稳定，所以最好还是选用较新版本的Tomcat。

测试源码在这儿：

## 浏览器端

较高版本的Chrome中内置了`WebSocket`对象，使用方法大致可以描述为：new一个WebSocket对象，然后添加一些事件处理方法，发送消息，关闭连接，如：

	<script>
    var ws = new WebSocket("ws://localhost:8090/TestWebSocket/test.do");
    ws.onopen = function(evt) {
    	// 建立连接时...
        alert("open");
    };
    ws.onerror = function(evt) {
    	// 异常时...
        alert("error!!");
    }
    ws.onclose = function(evt) {
    	// 断开连接时...
    }
    ws.onmessage = function(data) {
    	// 接收数据...
        console.log(data);
    }
    
    // 发送数据
    ws.send("xxx");

	// 断开连接
    ws.close();
    </script>

WebSocket同样也可以发送二进制数据，可以直接send()一个Blob对象。前端调用起来还是蛮简单的。

## 有关Nginx转发配置

常常，我们可能需要使用Nginx来配置反向代理。但`Upgrade`和`Connection`这两个HTTP 头不是End-to-end类型的头，它在[这里](http://tools.ietf.org/html/rfc2616#section-13.5.1)被明确定义成了Hop-by-hop类型的，也就意味着它不会被代理服务器默认转发，不会被缓存。

[Nginx的文档](http://nginx.org/en/docs/http/websocket.html)表示 ，需要手动地明确这两个头，即为每一次请求转发手动为其赋值，如下：

    location /chat/ {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    
## 其它一些资源

在线连接Demo [http://www.websocket.org/echo.html](http://www.websocket.org/echo.html)






