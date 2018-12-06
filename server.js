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



app.get("/addname", function(req,res) {
      login.find({}, (err, login)=> {
            res.send(login);
      })
          
//       var exec = require('child_process').exec,child;
//       child = exec('loginPage/loginPage.html',
//       function (error, stdout, stderr) {
//         console.log('tab opened');
//         if (error !== null) {
//           console.log('exec error: ' + error);
//         }
//     });
    // res.render("index:");
});

app.post("/addname2", (req, res) => {
    var myData = new login(req.body);
    console.log("test 1");
    console.log(req.body);
    res.redirect('loginPage/loginPage.html');

//     myData.save((err) => {
//           sendStatus(500);
//           res.sendStatus(200);
//    });
//    window.open('google.com')
//    open('loginPage/loginPage.html');
   // window.open('loginPage/loginPage.html', '_self', false);
});


app.listen(port, function(){
    console.log("yayyy working!");
});
