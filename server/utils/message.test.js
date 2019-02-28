const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

// challenge 9-111
describe('generateMessage', () =>
 {
   it('should generate the correct message object', () =>
   {
       // (act) gen message(from/text), store response
       // (assert) (1) from correct (2) text correct (3) createdAt is a number (typeof)

       let fromString = 'PNJ@example.com';
       let textString = 'Test text';

       let generatedMessage = generateMessage(fromString, textString);

       expect(generatedMessage.from).toEqual(fromString);   // (1)
       expect(generatedMessage.text).toEqual(textString);    // (2)
       expect(typeof generatedMessage.createdAt).toBe('number');     // (3) https://github.com/facebook/jest/issues/3457#issuecomment-299043100
   });
 });

 // challenge 9-115
describe('generateLocationMessage', () =>
{
  it('should generate correct location object', () =>
  {
    // (1) 'from' correct, (2) 'createdAt' number, (3) URL correct e.g. 1,1

    // Arrange
    let latitude, longitude = 1;
    let fromString = 'bonkers';
    let url = 'https://www.google.com/maps?q=1,1';

    // Act
    let generatedLocationMessage = generateLocationMessage(fromString, 1, 1);

    // Assert
    expect(generatedLocationMessage.from).toEqual(fromString);          // (1)
    expect(typeof generatedLocationMessage.createdAt).toBe('number');   // (2)
    expect(generatedLocationMessage.url).toEqual(url);                  // (3)
    // expect(generatedLocationMessage).toInclude({fromString, url});   // extra - https://jestjs.io/docs/en/expect.html#tohaveproperty
    expect(generatedLocationMessage).toHaveProperty('from');            // extra
    expect(generatedLocationMessage).toHaveProperty('url');             // extra

  });


});
