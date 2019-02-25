const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

console.log('using dot dot only', __dirname + '/../public');   // current directory + public
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\server/../public
// awkward looking directory hopping because of ''..''
console.log('publicPath using path.join : ',publicPath);
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\public
// tidier path using path.join


// challenge 9-106: express app, middleware to server public, listen on 3000 (with message)

var app = express();
var port = 3000;      // just 3000 for now

app.get('/public', (request, response) =>
{
  var publicPage = '<html><p>Hello, pseudo- placeholder public page text here!</p></html>';
  response.send(publicPage);
});

app.use(express.static(publicPath));



app.listen(port, () =>
{
  console.log(`Started on port ${port}`);
});
