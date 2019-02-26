var generateMessage = (from, text) =>
{
  return   {
    /* incredibly, (for mocha?) opening curly bracket must be on same line as return - semicolon inserted after 'return' by interpreter? */
    from: from,
    text: text,
    createdAt: new Date().getTime()
  };
};
// return the message object

module.exports = {generateMessage};
