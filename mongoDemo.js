var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err,db){
      if(err){
            throw err;
      }
      console.log("Database created!");
      var dbo = db.db("mydb");
      var insertObj = {name: "Rohan Saxena", age: 20 };

      //This is how to create a collection with name users
      dbo.createCollection("users", function(err,res){
            if(err){
                  throw err;
            }
            console.log("Collection Created!");
            db.close();
      });

      //This is how to insert an object
      dbo.collection("users").insertOne(insertObj, function(err,res){
            if(err){
                  throw err;
            }
            console.log("1 object inserted!");
            db.close();
      })

      //This is how to find an object
      dbo.collection("users").findOne({}, function(err,result){
            if(err){
                  throw err;
            }
            console.log(result.name);
            console.log(result.age);
      });


});
