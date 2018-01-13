var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test1', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('user').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});