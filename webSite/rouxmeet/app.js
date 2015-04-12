var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.get('/test/1368144000000', function(req,res){
  MongoClient.connect("mongodb://localhost/", function(err, db) {
     var newDB = db.db("newDB");
     newDB.collection("tempCollection", findItems);
     function findItems(err, words){
       words.find({"item":"ABC1"}, function(err, cursor){
         displayWords("Words starting with a, b or c: ", cursor);
         //console.log(cursor);
       });
     };
  function displayWords(msg, cursor, pretty){
    cursor.toArray(function(err, itemArr){
      //console.log("\n"+msg);
      res.send(itemArr[0]["item"]);
    });
  };
     //newDB.createCollection("newCollection", function(err, collection){
      // collection.stats(function(err, stats){
      //   res.send(JSON.stringify(stats.paddingFactorNote));
      //   db.close();
      // });
     //});
    });
  //res.send('Test');
});
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
