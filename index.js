const isPalindrome = (inputTxt) => {
  const validation = /^[A-Za-z]+$/;
  const letters = validation.test(inputTxt);
  const lowRegInput = inputTxt.toLowerCase().replace(letters, "");
  const reverseStr = lowRegInput.split("").reverse().join("");
  if (letters || " ") {
    return reverseStr === lowRegInput;
  } else {
    return false;
  }
};

const result = isPalindrome;
console.log(result("ana"));

module.exports = isPalindrome;
