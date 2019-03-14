// Do not change any of the function names

const getBiggest = (x, y) =>
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  (x > y ? x : y);
const greeting = (language) => {
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

const isTenOrFive = num =>
  // return true if num is 10 or 5
  // otherwise return false
  num === 10 || num === 5;
const isInRange = num =>
  // return true if num is less than 50 and greater than 20
  num > 20 && num < 50;
const isInteger = num =>
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  num === Math.floor(num);
const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 5 !== 0 && num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'buzz';
  } else if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 2) {
    return true;
  }
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const returnFirst = arr =>
  // return the first item from the array
  arr[0];
const returnLast = arr =>
  // return the last item of the array
  arr[arr.length - 1];
const getArrayLength = arr =>
  // return the length of the array
  arr.length;
const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
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

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  const ab = words.join(' ');
  return ab;
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  testScores.forEach((element) => {
    sum += element;
  });
  return sum / testScores.length;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let x = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > x) {
      x = numbers[i];
    }
  }
  return x;
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
  largestNumber,
};
