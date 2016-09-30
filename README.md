# 通过不同的 request 来实现

## Request

- VERD
 - get
 - post
 - put
 - delete

- PATH
  - /about
  - /posts


- GET /posts   读取所有文章

- POST /posts  新建一篇文章

- PUT /posts/:posts_id   更新特定一篇文章

- GET /posts/:posts_id   读取特定一篇文查

- DELET /posts/:posts_id   删除特定一篇文章

___

## express路由

- 跑在服务器上，响应客户端发出的request，决定哪部分后台代码要被执行
