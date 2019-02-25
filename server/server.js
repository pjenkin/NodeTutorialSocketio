const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

console.log('using dot dot only', __dirname + '/../public');   // current directory + public
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\server/../public
// awkward looking directory hopping because of ''..''
console.log('publicPath using path.join : ',publicPath);
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\public
// tidier path using path.join


// challenge 9-106: express app, middleware to server public, listen on 3000 (with message)

var app = express();
// var server = http.createServer((request, response) => { });
var server = http.createServer(app);    // can even use express variable as http module argument
var io = socketIO(server);


// var port = 3000;      // just 3000 for now
const port = process.env.PORT || 3000;

app.get('/public', (request, response) =>
{
  var publicPage = '<html><p>Hello, pseudo- placeholder public page text here!</p></html>';
  response.send(publicPage);
});

app.use(express.static(publicPath));

io.on('connection', (socket) =>
{
  console.log('new user connected')

  // new event name and data with event
  // socket.emit('newEmail');
  socket.emit('newEmail',
  {
      from: 'mike@example.com',
      text: 'copying from video',
      createAt: Date.now()
  });

  // challenge 9-108: newMessage : from, text, createdAt
  // receive from client:- createMessage : from, text
  var fromString = 'PNJServer@example.com';    // https://www.w3schools.com/js/js_reserved.asp - from
  var textBody = 'Hello from PNJ on server';
  var createdAt = Date.now();
  socket.emit('newMessage',
  {
      from: fromString,
      text: textBody,
      createdAt: createdAt
  });


  socket.on('createEmail', (newEmail) =>
  {
    console.log('createEmail', newEmail);
  });

  // challenge 9-108: newMessage : from, text, createdAt
  // receive from client:- createMessage : from, text

  socket.on('createMessage', (createMessage) =>
  {
    // createMessage.createdAt = Date.now();    // ??
    console.log('received createMessage ', createMessage);
  })

  // challenge 9-107
  socket.on('disconnect', () =>
  {
    console.log('a user disconnected');
  });
});


server.listen(port, () =>
{
  console.log(`Started on port ${port}`);
});
