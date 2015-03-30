var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.get('/', routes.index);
app.get('/js/renderers/CSS3dRenderer.js', function(req, res){
  res.sendFile('/js/renderers/CSS3dRenderer.js');
});

var server = app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
});
