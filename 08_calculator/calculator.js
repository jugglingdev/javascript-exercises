const add = function(num1, num2) {
	return parseInt(num1 + num2);
};

const subtract = function(num1, num2) {
	return parseInt(num1 - num2);
};

const sum = function(array) {
	let sum = 0;
  for (let item in array) {
    sum += array[item];
  }
  return sum;
};

const multiply = function(array) {
  let answer = 1;
  for (let item in array) {
    answer *= array[item];
  }
  return answer;
};

const power = function(num, expo) {
	return parseInt(num ** expo);
};

const factorial = function(num) {
	let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
