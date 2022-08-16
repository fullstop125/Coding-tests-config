const stringLength = require('./stringLength');

test('stringLength', () => {
  expect(stringLength('hello')).toBe(5);
});

test('check if it is greater than 1 and less than 10', () => {
  expect(stringLength('hello')).toBeGreaterThan(0);
  expect(stringLength('hello')).toBeLessThan(10);
});
