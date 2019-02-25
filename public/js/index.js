var socket = io();

// socket.on('connect', () =>
socket.on('connect', function ()
// function keyword not arrow function for client browser compatibility
{
  console.log('Connected to server');

  socket.emit('createEmail',
  {
    to: 'mike@example.com',
    text: 'Hello from Peter.'
  });

  // challenge 9-108:- createMessage : from, text
  // NB createdAt made on server to prevent spoofing
  // receive from client:- newMessage : from, text, createdAt
  var fromString = 'PNJClient@example.com';    // https://www.w3schools.com/js/js_reserved.asp - from
  var textString = 'Hello from PNJ on client';
  socket.emit('createMessage',
  {
    from: fromString,
    text: textString
  });


});

// socket.on('disconnect', () =>
socket.on('disconnect', function ()
{
  console.log('Disconnected from server');
});

// custom event
// socket.on('newEmail', function ()
socket.on('newEmail', function (email)
{
  console.log('New email', email);
});

// challenge 9-108:- createMessage : from, text
// NB createdAt made on server to prevent spoofing
// receive from client:- newMessage : from, text, createdAt

socket.on('newMessage', function (newMessage)
{
  console.log('Got newMessage: ', newMessage);
});
