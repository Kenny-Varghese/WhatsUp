var express = require('express');
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017"
var app = express();
var port = process.env.PORT || 3035;
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
var userGlobal;

app.use(express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/logins',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var loginSchema = mongoose.Schema({
      username: String,
      password: String
});
var Login = mongoose.model('login', loginSchema, 'users');


app.get("/addname", function(req,res) {
      login.find({}, (err, login)=> {
            res.send(login);
      })
});


app.post("/addname2", (req, res) => {
      req.body.username_login;
      req.body.password_login;
      var myData = new Login(req.body);
      console.log("test 1");
      console.log(req.body);
      res.redirect('loginPage.html');

});
app.get("/signup", function(req,res) {
      signup.find({}, (err, login)=> {
            res.send(signup);
      });
});

app.post("/signup", (req, res) => {
      userGlobal = req.body.username_signup;
      localStorage.setItem('storedUserName', req.body.username_signup);
      console.log("stored username: ", localStorage.getItem('storedUserName'));

      var newUser = new Login({username: req.body.username_signup, password: req.body.password_signup});
      newUser.save(function (err,userInfo){
            if (err){
                  return console.error(err);
            }
            console.log(userInfo.username + " saved to users collection");
      });
      res.redirect('loginPage.html');
});

// app.use(express.static('./dist'));
// io.on('connect', (socket) => {
//     socket.on('chat message', (msg) => {
//         if(socket.username) {
//             socket.broadcast.emit('chat message', {id: socket.username, message: msg});
//         }
//     });
//     socket.on('set username', (username) => {
//         socket.username = username;
//         socket.emit('username set', username);
//         socket.broadcast.emit('user joined', username);
//     });
// });


app.listen(port, function(){
      console.log("yayyy working!");
});
