const moment = require('moment');

let generateMessage = (from, text) =>
{
  return   {
    /* incredibly, (for mocha?) opening curly bracket must be on same line as return - semicolon inserted after 'return' by interpreter? */
    from,
    text,
    // createdAt: new Date().getTime()
    createdAt: moment().valueOf()
  };
};
// return the message object

let generateLocationMessage = (from, latitude, longitude) =>
{
  return   {
    // NB return d'require starting bracket on same line
    // ES 6 to assign 'from'
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    // createdAt: new Date().getTime()
    createdAt: moment().valueOf()
  }
};


module.exports = {generateMessage, generateLocationMessage};
