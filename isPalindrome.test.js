const isPalindrome = require("./index");

it("the empty string is a palindrome", () => {
  const toTest = "";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it("a string constituted only by a single character is a palindrome", () => {
  const toTest = "c";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"rr" is a palindrome', () => {
  const toTest = "rr";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"bad" is not a palindrome', () => {
  const toTest = "bad";
  const result = isPalindrome(toTest);

  expect(result).toBe(false);
});

it('"dad" is a palindrome', () => {
  const toTest = "dad";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"Level" palindrome works with lowercase and uppercase', () => {
  const toTest = "level";

  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});
