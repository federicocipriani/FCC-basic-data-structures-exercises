// Practice with filter and map functions
// The goal is to return a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.

const squareList = (arr) => {
  let newArr = arr.filter(item => Number.isInteger(item) & item > 0).map(item => Math.pow(item,2));
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
