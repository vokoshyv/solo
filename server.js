var app = require('./server-config.js');
var express = require('express');

// var io = require('socket.io')(app);

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