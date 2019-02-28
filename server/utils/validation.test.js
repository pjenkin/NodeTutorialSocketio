const expect = require('expect');
const {isRealString} = require('./validation');

// challenge 9-122 - write test for validation

// import isRealString - it should: ...
// (1) reject non-string values (number, bool) (2) reject only-spaces string (3) allow string with non-space characters ('  PNJ'?)

describe('isRealString validation', () =>
  {
    it('should correctly check strings', () =>
    {
      expect(isRealString(4)).toBeFalsy();              // (1)
      expect(isRealString(true)).toBeFalsy();           // (1)
      expect(isRealString('    ')).toBeFalsy();         // (2)
      expect(isRealString('PNJ')).toBeTruthy();         // (3)
      expect(isRealString('  LOTR  ')).toBeTruthy();    // (3)
    });
    // NB video solution had separate 'it' for each of 1-3
  });
