function openEvent(evt, page) {
    console.log("opened")
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
        }
    tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
                 tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    document.getElementById(page).style.display = "block";
     evt.currentTarget.className += " active";
}
function addUsers(){
    console.log("inside func");
    username = document.getElementById("username_login").value;
    password = document.getElementById("password_login").value;
    console.log(username);
    console.log(password);
    var insertUser = {username: username, password: password};
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, { useNewUrlParser: true }, function(err,db){
        if(err){
              throw err;
        }
        console.log("Database created!");
        var dbo = db.db("mydb");
        dbo.createCollection("users", function(err,res){
            if(err){
                  throw err;
            }
            console.log("Collection Created!");
            db.close();
      });

      //This is how to insert an object
      dbo.collection("users").insertOne(insertUser, function(err,res){
        if(err){
              throw err;
        }
        console.log("first object inserted!");
        db.close();
      });

       //This is how to find all objects in a collection and put in an array
      dbo.collection("users").find({}).toArray(function(err,result){
            if(err){
                  throw err;
            }
            console.log(result);
      });
    });
    window.open("loginPage/loginPage.html");
}
// function openLogin(){
//     username = document.getElementsByName("username");
//     password = document.getElementsByName("password");
//     if(username != null && password != null){
//         console.log("works");
//     }
//     // if(username == null){
//     //     window.alert("Please enter username");
//     // }
//     // if(password == null){
//     //     window.alert("Please enter password");
//     // }

//     window.location.replace("loginPage/loginPage.html");
// }
