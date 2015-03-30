var express = require('express'),
    jade = require('jade'),
    ejs = require('ejs');
var url = require('url');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.engine('html', ejs.renderFile);
var options = {
  host: '127.0.0.1',
};
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
app.get('/', function(req, res){
  var response = '<html><head><title>Simple Send</title></head><body><h1>Hello from Express</h1></body></html>';
  res.status(200);
  res.set({
    'Content-Type': 'text/html',
    'Content-Length': response.length
    });
  res.send(response);
  console.log('Response Finished?' + res.finished);
  console.log('\nHeaders Sent: ');
  console.log(res.headerSent);
});
app.get('/site', function(req, res){
  app.render('./css.html', function(err, renderedData) {
    res.send(renderedData);
    console.log("What's the matter?")
  });
});
