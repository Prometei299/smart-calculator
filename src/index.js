class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.values = [initialValue];
    this.cellForOperators = [];
  }

  add(number) {
    // your implementation
    while (this.cellForOperators.length) {
      this.calculate();
    }

    this.cellForOperators.push("+");
    this.values.push(number); 

    return this;
  }
  
  subtract(number) {
    // your implementation
    while (this.cellForOperators.length) {
      this.calculate();
    }

    this.cellForOperators.push("-");
    this.values.push(number); 

    return this;
  }

  multiply(number) {
    // your implementation
    while (this.cellForOperators[this.cellForOperators.length - 1] === "*"
          || this.cellForOperators[this.cellForOperators.length - 1] === "/"
          || this.cellForOperators[this.cellForOperators.length - 1] === "^") {
      this.calculate();
    }

    this.cellForOperators.push("*");
    this.values.push(number);

    return this;
  }

  devide(number) {
    // your implementation
    while (this.cellForOperators[this.cellForOperators.length - 1] === "*"
          || this.cellForOperators[this.cellForOperators.length - 1] === "/"
          || this.cellForOperators[this.cellForOperators.length - 1] === "^") {
      this.calculate();
    }

    this.cellForOperators.push("/");
    this.values.push(number);

    return this;
  }

  pow(number) {
    // your implementation
    this.cellForOperators.push("^");
    this.values.push(number);

    return this;
  }
  calculate() {
    let a = this.values.pop(), b = this.values.pop();

    if (this.cellForOperators[this.cellForOperators.length - 1] === "+") {
      this.cellForOperators.pop();
      this.values.push(a + b);
    }
    if (this.cellForOperators[this.cellForOperators.length - 1] === "-") {
      this.cellForOperators.pop();
      this.values.push(b - a);
    }
    if (this.cellForOperators[this.cellForOperators.length - 1] === "*") {
      this.cellForOperators.pop();
      this.values.push(a * b);
    }
    if (this.cellForOperators[this.cellForOperators.length - 1] === "/") {
      this.cellForOperators.pop();
      this.values.push(b / a);
    }
    if (this.cellForOperators[this.cellForOperators.length - 1] === "^") {
      this.cellForOperators.pop();
      this.values.push(Math.pow(b, a));
    }
  }

  toString() {
    while (this.values.length > 1) {
      this.calculate();
    }

    return this.values.pop();
  }
}

module.exports = SmartCalculator;
