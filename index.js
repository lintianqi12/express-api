var express = require('express')
var app = express()

app.get('/:name', function (req, res) {

  var userName = req.params.name

  var page = "<html>"+
              "<body>"+
                "<h1>"+
                userName + "的购物车" + "<h1>"+
              "</body>"+
            "</html>"
  res.send(page)
})

app.post('/:name', function (req, res) {
  res.send("lala")
})

app.listen(3000, function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
