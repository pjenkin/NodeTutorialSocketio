const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const {generateMessage, generateLocationMessage} = require('./utils/message');
const{isRealString} = require('./utils/validation');

console.log('using dot dot only', __dirname + '/../public');   // current directory + public
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\server/../public
// awkward looking directory hopping because of ''..''
console.log('publicPath using path.join : ',publicPath);
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\public
// tidier path using path.join


// challenge 9-106: express app, middleware to server public, listen on 3000 (with message)

let app = express();
// var server = http.createServer((request, response) => { });
let server = http.createServer(app);    // can even use express variable as http module argument
let io = socketIO(server);


// var port = 3000;      // just 3000 for now
const port = process.env.PORT || 3000;

app.get('/public', (request, response) =>
{
  let publicPage = '<html><p>Hello, pseudo- placeholder public page text here!</p></html>';
  response.send(publicPage);
});

app.use(express.static(publicPath));

io.on('connection', (socket) =>
{
  console.log('new user connected')

  // new event name and data with event
  // socket.emit('newEmail');
  // socket.emit('newEmail',
  // {
  //     from: 'mike@example.com',
  //     text: 'copying from video',
  //     createAt: Date.now()
  // });

  // challenge 9-108: newMessage : from, text, createdAt
  // receive from client:- createMessage : from, text
  // var fromString = 'PNJServer@example.com';    // https://www.w3schools.com/js/js_reserved.asp - from
  // var textBody = 'Hello from PNJ on server';
  // var createdAt = Date.now();
  // socket.emit('newMessage',
  // {
  //     from: fromString,
  //     text: textBody,
  //     createdAt: createdAt
  // });


  socket.on('createEmail', (newEmail) =>
  {
    console.log('createEmail', newEmail);
  });


  // challenge 9-110 (1) socket.emit from Admin "welcome to chat app" (2) socket.broadcast.emit from Admin "New user joined"
  // NB within io.on('connection', (socket) =>.......

  // socket.emit('newMessage',
  // {
  //       from: 'Admin',
  //       text: 'Welcome to chat app',
  //       // createdAt: new Date().getTime()
  // });

  socket.emit('newMessage', generateMessage('Admin','Welcome to chat app'));

  // socket.broadcast.emit('newMessage',
  // {
  //       from: 'Admin',
  //       text: 'New user joined',
  //       createdAt: new Date().getTime()
  // });

  // to all except user joining
  socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));



  socket.on('join', (params, callback) =>
  {
console.log('in socket.on join');
    // check for valid name and room name in params
    if (!isRealString(params.name) || !isRealString(params.room))
    {
console.log('params validation error');
      callback('Name and room name are required please!');
    }
    callback();
  });




  // challenge 9-108: newMessage : from, text, createdAt
  // receive from client:- createMessage : from, text

  // socket.on('createMessage', (createMessage) =>
  socket.on('createMessage', (createMessage, callback) =>
  {
    // createMessage.createdAt = Date.now();    // ??
    console.log('received createMessage ', createMessage);
    // io.emit (not socket.emit) - send to *all* connections
    // io.emit('newMessage',
    // {
    //   from: createMessage.from,
    //   text: createMessage.text,
    //   createdAt: new Date().getTime()
    // });

    // broadcast - specifying origin socket
    // socket.broadcast.emit('newMessage',
    // {
    //     from: createMessage.from,
    //     text: createMessage.text,
    //     createdAt: new Date().getTime()
    // });

    // feedback from server (needs complmentary callback cf client)
    // callback();
    // callback(
    //   {
    //   }
    callback();


    io.emit('newMessage', generateMessage(createMessage.from, createMessage.text));
    // oops, I should've used io.emit not socket.emit to send only to 1 user
  })

  /* NB block comments used where copy-pasting code into word processor as notes */
  /* geolocation handling */
  socket.on('createLocationMessage', (coords) =>
  {
    // io.emit('newMessage', generateMessage('Admin',`${coords.latitude}, ${coords.longitude}`));
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  }
  );

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
