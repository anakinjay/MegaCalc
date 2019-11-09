import { describe, Try } from "riteway";
import {
  add,
  subtract,
  multiply,
  divide,
  squareRoot,
  exponent,
  toDecimal
} from ".";

describe("add()", async assert => {
  assert({
    given: "two positive integers, 2 and 3",
    should: "return 5",
    actual: add(2, 3),
    expected: 5
  });

  assert({
    given: "two negative integers, -2 and -4",
    should: "return 6",
    actual: add(-2, -4),
    expected: -6
  });

  assert({
    given: "two decimal numbers, 1.5 and 2.25",
    should: "return 3.75",
    actual: add(1.5, 2.25),
    expected: 3.75
  });

  assert({
    given: "two binary numbers, 0b11 and 0b10",
    should: "return 5",
    actual: add(0b11, 0b10),
    expected: 5
  });

  assert({
    given: "two octal numbers, 0o1 and 0o7",
    should: "return 8",
    actual: add(0o1, 0o7),
    expected: 8
  });

  assert({
    given: "two hexadecimal numbers, 0x1 and 0xF",
    should: "return 16",
    actual: add(0x1, 0xf),
    expected: 16
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(add, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(add, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("subtract()", async assert => {
  assert({
    given: "two positive integers, 3 and 2",
    should: "return 1",
    actual: subtract(3, 2),
    expected: 1
  });

  assert({
    given: "two negative integers, -3 and -5",
    should: "return 2",
    actual: subtract(-3, -5),
    expected: 2
  });

  assert({
    given: "two decimals, 2.25 and 1.1",
    should: "return 1.15",
    actual: subtract(2.25, 1.1),
    expected: 1.15
  });

  assert({
    given: "two binary numbers, 0b11 and 0b10",
    should: "return 1",
    actual: subtract(0b11, 0b10),
    expected: 1
  });

  assert({
    given: "two octal numbers, 0o1 and 0o7",
    should: "return -6",
    actual: subtract(0o1, 0o7),
    expected: -6
  });

  assert({
    given: "two hexadecimal numbers, 0x1 and 0xF",
    should: "return -14",
    actual: subtract(0x1, 0xf),
    expected: -14
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(subtract, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(subtract, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("multiply()", async assert => {
  assert({
    given: "two positive integers, 3 and 2",
    should: "return 6",
    actual: multiply(3, 2),
    expected: 6
  });

  assert({
    given: "two negative integers, -3 and -5",
    should: "return 15",
    actual: multiply(-3, -5),
    expected: 15
  });

  assert({
    given: "two decimals, 2.5 and 2.75",
    should: "return 6.875",
    actual: multiply(2.5, 2.75),
    expected: 6.875
  });

  assert({
    given: "two binary numbers, 0b11 and 0b10",
    should: "return 6",
    actual: multiply(0b11, 0b10),
    expected: 6
  });

  assert({
    given: "two octal numbers, 0o1 and 0o7",
    should: "return 7",
    actual: multiply(0o1, 0o7),
    expected: 7
  });

  assert({
    given: "two hexadecimal numbers, 0x1 and 0xF",
    should: "return 15",
    actual: multiply(0x1, 0xf),
    expected: 15
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(multiply, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(multiply, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("divide()", async assert => {
  assert({
    given: "two integers, 6 and 2",
    should: "return 3",
    actual: divide(6, 2),
    expected: 3
  });

  assert({
    given: "two negative integers, -4 and -2",
    should: "return 2",
    actual: divide(-4, -2),
    expected: 2
  });

  assert({
    given: "two decimals, 2.5 and 1.25",
    should: "return 2",
    actual: divide(2.5, 1.25),
    expected: 2
  });

  assert({
    given: "two binary numbers, 0b100 and 0b10",
    should: "return 2",
    actual: divide(0b100, 0b10),
    expected: 2
  });

  assert({
    given: "two octal numbers, 0o6 and 0o2",
    should: "return 3",
    actual: divide(0o6, 0o2),
    expected: 3
  });

  assert({
    given: "two hexadecimal numbers, 0xE and 0x7",
    should: "return 2",
    actual: divide(0xe, 0x7),
    expected: 2
  });

  assert({
    given: "second argument is 0",
    should: "throw error",
    actual: Try(divide, 3, 0).toString(),
    expected: "Error: Cannot divide by zero"
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(divide, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(divide, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("squareRoot()", async assert => {
  assert({
    given: "one integer, 9",
    should: "return 3",
    actual: squareRoot(9),
    expected: 3
  });

  assert({
    given: "one integer, 16",
    should: "return 4",
    actual: squareRoot(16),
    expected: 4
  });

  assert({
    given: "one decimal, 2.25",
    should: "return 1.5",
    actual: squareRoot(2.25),
    expected: 1.5
  });

  assert({
    given: "one binary, 0b100",
    should: "return 2",
    actual: squareRoot(0b100),
    expected: 2
  });

  assert({
    given: "one octal, 0o4",
    should: "return 2",
    actual: squareRoot(0o4),
    expected: 2
  });

  assert({
    given: "one hexadecimal, 0x10",
    should: "return 4",
    actual: squareRoot(0x10),
    expected: 4
  });

  assert({
    given: "argument is negative integer",
    should: "throw error",
    actual: Try(squareRoot, -4).toString(),
    expected: "Error: Cannot have square root of negative number"
  });

  assert({
    given: "argument is non-number",
    should: "throw error",
    actual: Try(squareRoot, null).toString(),
    expected: "TypeError: Argument is not a number"
  });
});

describe("exponent()", async assert => {
  assert({
    given: "2 to the 3rd power",
    should: "return 8",
    actual: exponent(2, 3),
    expected: 8
  });

  assert({
    given: "3 to the 2nd power",
    should: "return 9",
    actual: exponent(3, 2),
    expected: 9
  });

  assert({
    given: "2.5 to the 2nd power",
    should: "return 6.25",
    actual: exponent(2.5, 2),
    expected: 6.25
  });

  assert({
    given: "binary -- 0b11 to the 0b10 power",
    should: "return 9",
    actual: exponent(0b11, 0b10),
    expected: 9
  });

  assert({
    given: "octal -- 0o7 to the 0o2 power",
    should: "return 49",
    actual: exponent(0o7, 0o2),
    expected: 49
  });

  assert({
    given: "hexadecimal -- 0x4 to the 0x2 power",
    should: "return 16",
    actual: exponent(0x4, 0x2),
    expected: 16
  });

  assert({
    given: "first argument is non-number",
    should: "throw error",
    actual: Try(exponent, null, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  assert({
    given: "second argument is non-number",
    should: "throw error",
    actual: Try(exponent, 3).toString(),
    expected: "TypeError: Argument is not a number"
  });

  describe("toDecimal()", async assert => {
    assert({
      given: "a binary number",
      should: "return in decimal form",
      actual: toDecimal(0b111),
      expected: 7
    });

    assert({
      given: "an octal number",
      should: "return in decimal form",
      actual: toDecimal(0o7),
      expected: 7
    });

    assert({
      given: "a hexadecimal number",
      should: "return in decimal form",
      actual: toDecimal(0xa),
      expected: 10
    });

    assert({
      given: "a non-number",
      should: "throw error",
      actual: Try(toDecimal, null).toString(),
      expected: "TypeError: Argument is not a number"
    });
  });
});
