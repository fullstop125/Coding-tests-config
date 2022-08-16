const reverseString = require('./reverseString');

test('reverseString', () => {
  expect(reverseString('hello')).toBe('olleh');
});
test('reverseString', () => {
  expect(reverseString('sami')).toBe('imas');
});
