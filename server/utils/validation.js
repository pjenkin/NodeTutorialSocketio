var isRealString = (str)  =>
{
  // shred white trailing/leading spaces
  return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};
