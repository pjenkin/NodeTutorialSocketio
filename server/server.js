const path = require('path');

const publicPath = path.join(__dirname, '../public');

console.log('using dot dot only', __dirname + '/../public');   // current directory + public
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\server/../public
// awkward looking directory hopping because of ''..''
console.log('publicPath using path.join : ',publicPath);
// C:\Users\peter.DESKTOP-3GCVT7E\source\repos\Node\NodeChatApp\public
// tidier path using path.join
