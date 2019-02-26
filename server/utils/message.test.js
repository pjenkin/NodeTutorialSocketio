const expect = require('expect');
const {generateMessage} = require('./message');

// challenge 9-111
describe('generateMessage', () =>
 {
   it('should generate the correct message object', () =>
   {
       // (act) gen message(from/text), store response
       // (assert) (1) from correct (2) text correct (3) createdAt is a number (typeof)

       var fromString = 'PNJ@example.com';
       var textString = 'Test text';

       var generatedMessage = generateMessage(fromString, textString);

       expect(generatedMessage.from).toEqual(fromString);   // (1)
       expect(generatedMessage.text).toEqual(textString);    // (2)
       expect(typeof generatedMessage.createdAt).toBe('number');     // (3) https://github.com/facebook/jest/issues/3457#issuecomment-299043100
   });
 });
