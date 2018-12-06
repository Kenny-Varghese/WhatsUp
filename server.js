var express = require('express');
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/users"
var app = express();
var port = process.env.PORT || 3035;
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url,{ useNewUrlParser: true }, function(err,db){
      console.log("Connected to database");
});

var login = mongoose.model('Login', {username_login: String, password_login: String});
var message = mongoose.model('Message', {username_login: String, messageString: String});



app.get("/addname", function(req,res) {
      login.find({}, (err, login)=> {
            res.send(login);
      })
    // res.render("index:");
});

app.post("/addname2", (req, res) => {
    var myData = new login(req.body);
    console.log("test 1");
    console.log(req.body);
    myData.save((err) => {
          sendStatus(500);
          res.sendStatus(200);
   });
  window.open('loginPage/loginPage.html');
   // window.open('loginPage/loginPage.html', '_self', false);
});


app.listen(port, function(){
    console.log("yayyy working!");
});
