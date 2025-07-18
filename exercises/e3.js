// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val1 && arr[i] < val2) {
      return true; // Early return if item is found
    }
  }
  return false; // Default return if no item is found
}

/**
 * ====================================================
 * Please read the /exercises-info/e4.md file. It describes different types of syntax to write functions
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * Named function: getValueWithConditionOne;
 * Arrow Function name: getValueWithConditionTwo;
 * Variable name for the function expression: getValueWithConditionThree;
 * All three functions resolve the same task:
 * The function takes two numbers as arguments
 * If the numbers are both equal to 40, return the sum of them
 * Else return the doubled sum of them
 * getValueWithConditionOne(40, 40) => 80;
 * getValueWithConditionOne(20, 30) => 100;
 */

// Named function syntax
function getValueWithConditionOne(num1, num2) {
  if (num1 === 40 && num2 === 40) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 2;
  }
}

// Arrow function syntax
const getValueWithConditionTwo = (num1, num2) => {
  if (num1 === 40 && num2 === 40) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 2;
  }
};

// Function expression (with anonymous function)
const getValueWithConditionThree = function (num1, num2) {
  if (num1 === 40 && num2 === 40) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 2;
  }
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// Do not delete or change the lines beneath
const f = {
  doesArrayIncludeItemsBetweenVals:
    doesArrayIncludeItemsBetweenVals || undefined,
  getValueWithConditionOne: getValueWithConditionOne || undefined,
  getValueWithConditionTwo: getValueWithConditionTwo || undefined,
  getValueWithConditionThree: getValueWithConditionThree || undefined,
};
export { f };
