var MongoClient = require('mongodb').MongoClient;
var client = new MongoClient(new Server('localhost', 27017,  { poolSize: 5}),
                             { retryMiliSeconds: 500 });
