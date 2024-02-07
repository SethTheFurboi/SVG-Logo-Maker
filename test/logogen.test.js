const shapegen = require('../lib/shapegen.js');

describe('shapegen', () => {
  test('should show a black circle', () => {
    const testshape = shapegen("","",circle,"")

    const expectedanswer = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
    
    </svg>`

    expect(testshape).toEqual(expectedanswer);
  });
});
