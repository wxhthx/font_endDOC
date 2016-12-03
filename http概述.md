# HTTP概述
## TCP/IP分层
* 应用层（HTTP）
* 网络层 (TCP）
* 传输层 （IP）
* 数据链路层 （光纤）

## TCP三次握手简述
1. 客户端第一次将带有SYN头标志的数据包发给服务器
2. 服务器收到数据包后，将带有SYN/ack标志的数据返回给客户端确认；
3. 客户端将带有ACK标志头的数据发送给服务器，完成三次握手

## HTTP1.4协议节省通信量的措施
* connection: keep-alive
* 管线化（并发请求）


## 状态码
    tips：HTTP是无状态协议，彼此请求互相之前不能获知其他的状态
* 1XX
 * 100
* 2XX
 * 200 OK  服务器找到对应内容，正确完整返回给客户端
 * 204 No content 请求成功，没有找到对应内容
 * 206 Partial Content 范围请求
* 3XX
 * 301 moved permanently 请求资源被分配新uri
 * 302 Found 临时性重定向
 * 303 See Other
 * 304 Not Modified 服务器端内容与浏览器缓存一致，没有变化