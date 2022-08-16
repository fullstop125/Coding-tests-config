class Calc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  sub() {
    return this.x - this.y;
  }

  mul() {
    return this.x * this.y;
  }

  div() {
    return this.x / this.y;
  }
}
module.exports = Calc;