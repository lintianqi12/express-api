var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/write', function (req, res) {
  var page = "<form method='post' action='/posts'>"+
                "<input type='text' name='title'/>"+
                "<input type='submit' />"+
             "</form>"
  res.send(page)
})

app.get('/posts/:id', function (req, res) {
  console.log('GET /posts/:id');
})

app.put('/posts/:id', function (req, res) {
  res.send("PUT /posts/:id")
})

app.post('/posts/', function (req, res) {
  res.send("The Blog Title is " + req.body.title)
})

app.delete('/posts/:id', function (req, res) {
  res.send("DELETE /posts/:id")
})

app.listen(3000, function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
