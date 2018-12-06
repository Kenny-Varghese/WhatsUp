var express = require('express');
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/users"
var app = express();
var port = process.env.PORT || 3035;
// var open = require('open');
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url,{ useNewUrlParser: true }, function(err,db){
      console.log("Connected to database");
});

var login = mongoose.model('Login', {username_login: String, password_login: String});
var message = mongoose.model('Message', {username_login: String, messageString: String});
var signup = mongoose.model('Signup', {name: String, email: String, username_login: String, password_login: String})


app.get("/addname", function(req,res) {
      login.find({}, (err, login)=> {
            res.send(login);
      })
          
//  
});

app.post("/addname2", (req, res) => {
    var myData = new login(req.body);
    console.log("test 1");
    console.log(req.body);
    res.redirect('loginPage/loginPage.html');

});
app.get("/signup", function(req,res) {
    signup.find({}, (err, login)=> {
          res.send(signup);
    })
        
//  
});

app.post("/signup", (req, res) => {
  var myData = new signup(req.body);
  console.log("test 1");
  console.log(req.body);
  res.redirect('loginPage/loginPage.html');

});


app.listen(port, function(){
    console.log("yayyy working!");
});
