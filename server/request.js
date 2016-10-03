var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');

var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

app.get('/', function (req, res) {
  //重定向
  // res.redirect('https://www.baidu.com')
  var page = "<form method='post' action='/posts'>"+
                "<input type='text' name='title'/>"+
                "<input type='submit' />"+
             "</form>"
  res.send(page)
})

app.get('/posts', function (req, res) {
  // console.log('<h1>All My Blog</h1>');
  Post.find().exec(function(err, posts) {
      res.send(posts)
  });
})

app.post('/posts/', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  var post = new Post({title: req.body.title});
  post.save(function(err){
    if(err) console.log(err);
    console.log('saved!');
  })
})

app.listen(3000, function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
