var express = require('express')
var app = express()

app.get('/posts', function (req, res) {
  console.log('GET /posts');
  res.send(posts.html)
})

app.get('/posts/:id', function (req, res) {
  console.log('GET /posts/:id');
})

app.put('/posts/:id', function (req, res) {
  res.send("PUT /posts/:id")
})

app.post('/posts', function (req, res) {
  res.send("POST /posts")
})

app.delete('/posts/:id', function (req, res) {
  res.send("DELETE /posts/:id")
})

app.listen(3000, function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
