var socket = io();

// socket.on('connect', () =>
socket.on('connect', function ()
// function keyword not arrow function for client browser compatibility
{
  console.log('Connected to server');

  // socket.emit('createEmail',
  // {
  //   to: 'mike@example.com',
  //   text: 'Hello from Peter.'
  // });

  // challenge 9-108:- createMessage : from, text
  // NB createdAt made on server to prevent spoofing
  // receive from client:- newMessage : from, text, createdAt
  var fromString = 'PNJClient@example.com';    // https://www.w3schools.com/js/js_reserved.asp - from
  var textString = 'Hello from PNJ on client';
  // socket.emit('createMessage',
  // {
  //   from: fromString,
  //   text: textString
  // });


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
  let formattedTime = moment(newMessage.createdAt).format('h:mm a');
  let li = $('<li>/</li>');
  li.text(`${newMessage.from} ${formattedTime} : ${newMessage.text}`);
  // NB templaet strings not recommended for client/front end b/c browser compatibility (2019)

  // build up list of messages
  $('#messages').append(li);
});

// challenge 9-118: use moment in newLocationMessage
socket.on('newLocationMessage', function (message)
{
  let formattedTime = moment(message.createdAt).format('h:mm a');
  let li = $('<li></li>');
  let a = $('<a target="_blank">My current location (mapped)</a>');
  li.text(`${message.from}: ${formattedTime}`);   // NB text() function
  a.attr('href', message.url);     // 1 argument to get; 2 arguments to set (anti-injection)
  li.append(a);
  $('#messages').append(li);
});


socket.emit('createMessage',
{
  from: 'PJ',
  text: 'Hello from client'
}, function (feedbackData)
  {
    // callback client side for feedback from message (cf server)
    console.log('message received on client: ', feedbackData);
  }
);

$('#message-form').on('submit',function (event)
{
  event.preventDefault();
console.log('form input default prevented');

  let messageTextbox = $('[name=message]');

  // instead of default, generate/send a message
  socket.emit('createMessage',
  {
    from: 'User',
    text: messageTextbox.val()    /* value of any element with name 'message' */
  }, function ()
  {
    // started empty; callback present to fulfil required feedback/ACK/callback signature
    messageTextbox.val('');    // clear message input pane
  });
});

let locationButton = $('#send-location');
locationButton.on('click', function ()
{
  if (!navigator.geolocation)
  {
    return alert('Geolocation is not supported by your browser.');
    /* could use bootstrap or foundation dialogue */
  }

  locationButton.attr('disabled', 'disabled').text('Sending location ...');    // avoid multiple clicking during geolocation sending

  /* (1) success, and (2) error handler callbacks */
  navigator.geolocation.getCurrentPosition(function (position)
  {
    locationButton.removeAttr('disabled').text('Send location');
    console.log(position);
    socket.emit('createLocationMessage',
    {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  },
  // error handler callback
   function ()
  {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });

});           // reusable variable
// $(#send-location).on     // once only
