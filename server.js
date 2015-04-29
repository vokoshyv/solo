var app = require('./server-config.js');
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var io = require('socket.io')(app);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/client/chat.html');
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  })
});

io.on('disconnect', function(){
  console.log('user disconnected');
})

// http.listen(3000, function(){
//   console.log('listening on *: 3000');
// });

// var port = (process.env.PORT)? process.env.PORT : 0000;
var port = 8000;

app.listen(port, function(){
  console.log('Listening to port ', port);
});

app.use(express.static('client'));


// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });