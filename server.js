var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/client/html');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("서버열림ㅉㅈ")
});