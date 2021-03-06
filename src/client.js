var io = require('socket.io-client');
//var socket = io.connect("wss://palaver-server.herokuapp.com/");//used to connect to the heroku server
var stdin = process.stdin;
var socket = io.connect("http://localhost:3000");//used to connect to the localhost for testing

console.log("trying to connect")
var userName = ""
var userColor = "";
//run this client if you want to test to see if the server is running
socket.on("connect", function(){
//inital connection
  console.log("connection established");

  socket.emit("messageServer", { username:userName, message:"CONNECTION TEST ESTABLISHED" });

  //this interval will send a message to all users and the server to test.
  //it will send the messages every 5 seconds
  setInterval(function(){
    //socket.emit("messageServer", { username:"TEST", message:"CONNECTION TEST ESTABLISHED" });
    //socket.emit("messageAll", { username:userName, message:"CONNECTION TEST ESTABLISHED" });
    //socket.emit("requestClientList");

  }, 5000);

	//when a message is recieved
	socket.on("message",function(data){
	  console.log(data.username + ": " + data.message);
	});
  socket.on("onInvite", function(data) {
    console.log("invited to " + data.roomname);
  });
  socket.on("LoginError",function(data){
	  console.log("An Error Occured while logging in.");
	});
  socket.on("LoginSuccessful",function(data){
	  console.log("Login Successful");
    console.log(data);
	});

  socket.on("receiveUserMetadata", function(data){
    userName = data.username;
    userColor = data.usercolor;
    console.log(data.username + " " + data.usercolor);
  });
  stdin.on('data', function (data) {
    var Str = data.toString().substr(0, data.length -1);
    //console.log(data.toString().substr(0,) + "|");
      if(Str.substr(0,8) == "/newroom"){
        var name = Str.substr(9).trim();

        socket.emit("roomTryJoinCreate",{roomName:name,username:userName, usercolor:userColor});
      }
      if(Str.substr(0,9) == "/allrooms"){
        socket.emit("requestAllRooms");
      }
      if(Str.substr(0,8) == "/myrooms"){
        socket.emit("requestCurrentlyJoinedRooms");
      }
      if(Str.substr(0,8) == "/message"){
        var name = Str.substr(9).trim();
        var msge = "TEST ROOM";
        var obj = {roomName:name, message:msge, username:userName.toString()};

        socket.emit("messageRoom", obj);
      }
      if(Str.substr(0,6) == "/leave"){
        var name = Str.substr(7).trim();
        socket.emit("leaveRoom", {roomName:name, username:userName});
      }
      if(Str.substr(0,6) == "/login"){
        socket.emit("login", {username:"test120", password:"jordan"});
      }
      if(Str.substr(0,5) == "/join"){
        var name = Str.substr(6).trim();
        socket.emit("joinRoom", {roomName:name});
      }

      if(Str.substr(0,9) == "/fillRoom"){
        var name = Str.substr(9).trim();
        socket.emit("requestInviteOthers", {roomname:"TESTROOM"});
      }
      if(Str.substr(0,7) == "/inroom"){
        var name = Str.substr(8).trim();
        socket.emit("requestClientsInRoom", {roomname:name});
      }


  });



});
