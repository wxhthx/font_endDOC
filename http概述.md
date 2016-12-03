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
* 3XX 重定向
 * 301 moved permanently 请求资源被分配新uri
 * 302 Found 临时性重定向
 * 303 See Other
 * 304 Not Modified 服务器端内容与浏览器缓存一致，没有变化
* 4XX 客户端错误
 * 400 Bad Request 报文存在语法错误
 * 401 Unauthorized 认证失败
 * 403 Forbidden 服务器端禁止访问
 * 404 Not Found
* 5XX 服务器错误
 * 500 Internal Server Error 服务器执行请求发生错误
 * 501 Service Unavailable 服务器超负荷或者停机维护

## HTTP首部
1. 通用首部
 * Cache-control 
 * Connection
 * Date
 * Pragma HTTP/1.1之前版本的历史遗留字段
 * Transfer-Encoding 规定了传输报文主题时采用的编码方式
 * Warning 告知用户一些与缓存相关问题的警告
2. 请求
 * Accept 通知服务器用户代理能够处理的媒体类型以及相对优先级
 * Accept-Charset 通知服务器用户代理能够处理的字符集
 * Accept-Encoding 通知服务器用户代理能够处理的内容编码
 * Accept-Language 通知服务器用户代理能够处理的语言
 * Expect
 * Host 告知服务器请求资源在互联网中主机名和端口号
 * If-Match 告知服务器匹配资源所有Etag值
 * If-Modified-Since
 * If-Range
3. 响应首部
 * Etag
 * Location