var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("amtica");
  dbo.createCollection("login", function(err, res) {
    if (err) throw err;
    console.log("Login Collection created!");
  });
  dbo.createCollection("test", function(err, res) {
    if (err) throw err;
    console.log("Test Collection created!");
    db.close();
  });
});