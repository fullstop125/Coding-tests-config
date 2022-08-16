const capital = require('./capital');

test('capital', () => {
  expect(capital('hello')).toBe('Hello');
});
