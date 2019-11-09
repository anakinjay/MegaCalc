export const add = (first, second) => {
  checkValidType([first, second]);

  return first + second;
};

export const subtract = (first, second) => {
  checkValidType([first, second]);

  return first - second;
};

export const multiply = (first, second) => {
  checkValidType([first, second]);

  return first * second;
};

export const divide = (first, second) => {
  checkValidType([first, second]);

  if (second === 0) {
    throw new Error("Cannot divide by zero");
  }

  return first / second;
};

export const squareRoot = first => {
  checkValidType([first]);

  if (first < 0) {
    throw new Error("Cannot have square root of negative number");
  }

  return Math.sqrt(first);
};

export const exponent = (first, second) => {
  checkValidType([first, second]);

  return Math.pow(first, second);
};

export const toDecimal = num => {
  checkValidType([num]);

  return parseInt(num, 10);
};

const checkValidType = params => {
  for (const param of params) {
    if (typeof param !== "number") {
      throw new TypeError("Argument is not a number");
    }
  }
};
