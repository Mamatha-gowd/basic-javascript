// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x === y) {
    return x;
  }
  return x > y ? x : y;
};

const greeting = language => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'

  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === 'Chinese') {
    return 'Ni Hao!';
  }
  return 'Hello!';
};

const isTenOrFive = num => {
  // return true if num is 10 or 5
  return num === 10 || num === 5 ? true : false;
};

const isInRange = num => {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20 ? true : false;
};

const isInteger = num => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  return Math.floor(num) === num ? true : false;
};

const fizzBuzz = num => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = num => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const returnFirst = arr => {
  return arr[0];
};

const returnLast = arr => {
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  return arr.length;
};

const incrementByOne = arr => {
  return arr.map(ele => ele + 1);
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

  return arr.includes(item);
};

const addNumbers = numbers => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((acc, ele) => {
    return (acc += ele);
  }, 0);
};

const averageTestScore = testScores => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return (
    testScores.reduce((acc, ele) => {
      return (acc += ele);
    }, 0) / testScores.length
  );
};

const largestNumber = numbers => {
  // numbers is an array of integers
  // return the largest integer
  return Math.max(...numbers);
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};

// why no to nesting ternary operator???

// 7: 10  error  Do not nest ternary expressions                                                      no - nested - ternary
// 10: 18  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 27: 21  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 29: 36  error  Unnecessary use of boolean literals in conditional expression                        no - unneeded - ternary
// 32: 19  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 34: 33  error  Unnecessary use of boolean literals in conditional expression                        no - unneeded - ternary
// 37: 19  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 43: 36  error  Unnecessary use of boolean literals in conditional expression                        no - unneeded - ternary
// 46: 18  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 60: 17  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 75: 21  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 79: 20  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 83: 24  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 87: 24  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 105: 25  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 120: 20  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 128: 26  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
// 138: 23  error  Expected parentheses around arrow function argument having a body with curly braces  arrow - parens
