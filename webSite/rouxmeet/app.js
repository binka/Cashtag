var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var stockRoutes = require('./routes/stockPage');
var routes = require('./routes/index');
var fs = require('fs');
var obj;
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
app.use('/:symbol', stockRoutes);

/// setup routes for every date represented on the chart
/*
app.get('/:symbol', function(req,res){ // this is the last data point on the stock chart, and the body of this function is what happens when you click on it
  fs.readFile("./public/data/AAPL.json" , 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.send(obj);
  });
});
*/
app.get('/:symbol/:date', function(req,res){ // this is the last data point on the stock chart, and the body of this function is what happens when you click on it
    console.log(JSON.stringify(req.params.symbol));
    MongoClient.connect("mongodb://54.149.244.192/", function(err, db) { // Start MongoClient (Connect to the Server)
      if (err) { // In Case of the Error Occurence Exit the Function. The Server will not Go down This Way.
        return;
      }
      console.log("Inside the Mongo Client");
      console.log(req.params.date); // Grab the ":date" Part of the Route inside app.get('/:symbol/:date'); This will be Used to Access Data in MongoDB
      var date = new Date(Number(req.params.date)); // Convert the Date into the JS Time Stamp
      function pad(num, size) { // Auxilary Function That Helps to Convert the JS Time Stamp into the YYYY-MM-DD Format
          var s = "0" + num;
          return s.substr(s.length-size);
      }
      var formattedDate = date.getFullYear() + "-" + pad((date.getMonth()), 2) + "-" + pad(date.getDate(),2); // Convert the JS Time Stamp into the YYYY-MM-DD Format
      console.log(formattedDate);
      var newDB = db.db("cashtag"); // The Object That Represents the DB Name
      var dbCollection = JSON.stringify(req.params.symbol); // The req.params.symbol Has Quotation Marks Around It. Take Them Off
      var collection = newDB.collection(dbCollection.substring(1, dbCollection.length-1)); // The Object That Represents the Collection inside Mongo

      collection.find({'created_at':{'$regex': formattedDate + '.*'}}, {"limit": 500}).toArray(function(err, result){ //looking for random tweets. Will be more specific.
          var defaultTwit = [["Surprisingly, no Twits about This Stock Symbol are Found in StockTwits for This Day.", "Oops... No Tweets for This Day"]];
          var resArray = [];
          for (i = 0; i < result.length; i++){
            var tempArray = [];
            var basicSentiment = result[i]["entities"]["sentiment"];

            tempArray.push(result[i]["body"]);
            tempArray.push(result[i]["user"]["username"]);
            tempArray.push(formattedDate);
            if (basicSentiment != null){ // Add Sentiment if There is One.
              tempArray.push(JSON.stringify(basicSentiment["basic"]));
            };
            resArray.push(tempArray);
          }
          console.log(resArray);
          if (resArray.length > 0) { // If the Response is Empty (No Twits Found), Return the Default Twit
            res.send(resArray);
          } else {
            res.send(defaultTwit);
          }
      });
  });

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
