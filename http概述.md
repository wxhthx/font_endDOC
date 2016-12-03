# `HTTP`概述
## `TCP/IP`分层
* 应用层（`HTTP`）
* 网络层 (`TCP`）
* 传输层 （`IP`）
* 数据链路层 （光纤）

## TCP三次握手简述
1. 客户端第一次将带有`SYN`头标志的数据包发给服务器
2. 服务器收到数据包后，将带有`SYN`/`ack`标志的数据返回给客户端确认；
3. 客户端将带有`ACK`标志头的数据发送给服务器，完成三次握手

## `HTTP`1.4协议节省通信量的措施
* `connection`: keep-alive
* 管线化（并发请求）


## 状态码
    `tips`：`HTTP`是无状态协议，彼此请求互相之前不能获知其他的状态
* `1XX`
 * `100`
* `2XX`
 * `200 OK`  服务器找到对应内容，正确完整返回给客户端
 * `204 No content` 请求成功，没有找到对应内容
 * `206 Partial Content` 范围请求
* `3XX` 重定向
 * `301 moved permanently` 请求资源被分配新uri
 * `302 Found` 临时性重定向
 * `303 See Other`
 * `304 Not Modified` 服务器端内容与浏览器缓存一致，没有变化
* 4XX 客户端错误
 * `400 Bad Request` 报文存在语法错误
 * `401 Unauthorized` 认证失败
 * `403 Forbidden` 服务器端禁止访问
 * `404 Not Found`
* `5XX` 服务器错误
 * `500 Internal Server Error` 服务器执行请求发生错误
 * `501 Service Unavailable` 服务器超负荷或者停机维护

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

## URI && URL
### URI: Uniform Resource Identifier 统一资源标志符
    URI包括URL和URN
### URL: Uniform Resource Location 统一资源定位符
    URL描述了一台特定服务器上某资源的特定位置，目前几乎所有的URI都是URL
    URL分为以下三部分
例子：Http://www.joes-hardware.com/seaconal/index-fall.html
 * URL方案（schema）Http://
 * 服务器地址  www.joes-hardware.com
 * 资源路径  seaconal/index-fall.html

## 从输入URL到页面加载中间经历哪些过程
1. DNS解析
2. TCP连接
3. 浏览器发送HTTP请求
4. 服务器收到请求信息，查找或者处理资源/数据并返回报文给浏览器
5. 浏览器解析并渲染页面
6. 连接关闭
