const Calc = require('./calculator');

const case1 = new Calc(8, 2);
const case2 = new Calc(4, 6);

describe('Calculator', () => {
  test('add', () => {
    expect(case1.add()).toBe(10);
    expect(case2.add()).toBe(10);
  });
  test('sub', () => {
    expect(case2.sub()).toBe(-2);
    expect(case1.sub()).toBe(6);
  });
  test('mul', () => {
    expect(case1.mul()).toBe(16);
    expect(case2.mul()).toBe(24);
  });
  test('div', () => {
    expect(case1.div()).toBe(4);
    expect(case2.div()).toBe(0.6666666666666666);
  });
});