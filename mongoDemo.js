var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err,db){
      if(err){
            throw err;
      }
      console.log("Database created!");
      var dbo = db.db("mydb");
      var firstObj = { firstName: "Rohan", lastName: "Saxena" };
      var secondObj = { firstName: "Kenny", lastName: "Varghese" };
      //This is how to create a collection with name users
      dbo.createCollection("users", function(err,res){
            if(err){
                  throw err;
            }
            console.log("Collection Created!");
            db.close();
      });

      //This is how to insert an object
      dbo.collection("users").insertOne(firstObj, function(err,res){
            if(err){
                  throw err;
            }
            console.log("first object inserted!");
            db.close();
      })

      dbo.collection("users").insertOne(secondObj, function(err,res){
            if(err){
                  throw err;
            }
            console.log("second object inserted!");
            db.close();
      })

      //This is how to find all objects in a collection and put in an array
      dbo.collection("users").find({}).toArray(function(err,result){
            if(err){
                  throw err;
            }
            //console.log(JSON.stringify(result[0].firstName));
      });

      //How to determine whether an object in a collection is found
      dbo.collection("users").find({firstName: "Pam"}, {$exists: true}).toArray(function(err,result){
            if(result.length == 0){
                  console.log("not found");
            }
            else{
                  console.log("found");
            }
      });

      //Query Search
      var query = {firstName: "Kenny"};
      dbo.collection("users").find(query).toArray(function(err,result){
            if(err){
                  throw err;
            }
            console.log("query search for " + query.firstName);
            console.log(result);
            db.close();
      });

      // //This is how to delete an entire collection
      // dbo.collection("users").drop(function(err, delOK) {
      //       if (err) {
      //             throw err;
      //       }
      //       if (delOK) {
      //             console.log("Collection deleted");
      //       }
      //       db.close();
      // });
      /*This code is not working right but we can delete a collection from
      the command line, by running "mongo" and then "db.<collection_name>.drop()"
      you have to be in the right database for this to work*/


});
