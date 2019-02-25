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
