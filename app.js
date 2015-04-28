var express = require('express');

var app = express();
// var io = require('socket.io')(app);

app.listen(8000, function(){
  console.log('Listening to 8000');
});

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });