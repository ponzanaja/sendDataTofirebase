var express = require('express')
var bodyParser = require('body-parser')
var firebase = require('firebase');
var app = require('express')();
var config = {
    apiKey: "AIzaSyDA_HOpzHHsdcsOX36Gh80_i4MCYHHJr5c",
    authDomain: "userdatabase-71afb.firebaseapp.com",
    databaseURL: "https://userdatabase-71afb.firebaseio.com",
    storageBucket: "userdatabase-71afb.appspot.com",
    messagingSenderId: "49200232033"
};

var port = process.env.PORT || 7777;
firebase.initializeApp(config);
var Users = firebase.database().ref('users')

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
    var data = {
      UID : 12312412412,
      follower : [" "],
      state : "1"
    }
      Users.push(data)
});
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
