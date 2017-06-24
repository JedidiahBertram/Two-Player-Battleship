const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// function onConnection(socket) {
//   socket.on('clicking', (data) => socket.broadcast.emit('clicking', data));
// }

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('A user disconnected');
  })
  socket.on('userDivClick', function(click) {
    console.log('a div has been clicked');
    socket.broadcast.emit('userDivClick', click);
  });
  socket.on('user div dbl click', function() {
    console.log('a div has been marked as ship');
  })
});

// http.listen(port, () => console.log('listening on port ' + port));
