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

___

## 用代码在数据库添加数据

1.确保有数据  req.body.title

2.建立代码和数据库的连接
  mongoose.connect('mongo://xxx')

3.创建Schmea  在models/post.js 中创建

4.创建model  module.export = mongoose.model('Post', PostSchema)

5.导入Post model

6.实例化 Post model  得到 post 这个对象

7.保存 post 到数据库

___

### strikingly.com

### wordpress

___

重定向，redirect

___

## 前后台分离

- 后台只负责json数据，不负责html/css

- 前后台沟通的数据格式是json，前台请求数据的方式：发ajax
