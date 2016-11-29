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
var data = []
var data2 =[1,2,3,4,5,6];
var port = process.env.PORT || 7777;
firebase.initializeApp(config);
var Users = firebase.database().ref('users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
Users.on('child_changed', function(snapshot) {
  var x = snapshot.val().UID
  var index =data.findIndex(datas => datas.UID == x )
  data.splice(index,1);
  data.push(snapshot.val());
  data.sort();
  initData();
});
Users.on('child_added', function(snapshot){
  data.push(snapshot.val())
  });


initData();



/*var data3 = {
  UID : '12312412412',
  follower : [" "],
  state : "1"
}
  Users.push(data3)

Users.on('value', function(snapshot){
      snapshot.forEach(function (childSnap){
        var value = childSnap.val();
        if(value.UID === '939326652838978')
        {
          data.push(value)
          console.log(data);
        }

      });

  //var x = users.find(user => user.UID === id)

});
*/




app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');



    /*var data = {
      UID : 12312412412,
      follower : [" "],
      state : "1"
    }
      Users.push(data)*/
});
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

function initData(){



setTimeout(function (){console.log(data);},4000)




}
