var generateMessage = (from,text) =>
{
  return
  {
    from,
    text,
    createdAt: new Date().getTime()
  };
};
// return the message object

module.exports = {generateMessage};
