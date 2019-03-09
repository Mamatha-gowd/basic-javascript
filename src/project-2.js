
// Do not change any of the function names

const getBiggest = (x, y) => (x >= y ? x : y);

const greeting = language => {
  switch (language) {
    case "German":
      return "Guten Tag!";
    case "Spanish":
      return "Hola!";
    case "Chinese":
      return "Ni Hao!";
    default:
      return "Hello!";
  }
};

const isTenOrFive = num => num === 10 || num === 5;

const isInRange = num => num < 50 && num > 20;

const isInteger = num => Math.floor(num) === num;

const fizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else {
    return num;
  }
};

const isPrime = num => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const returnFirst = arr => arr.shift();

const returnLast = arr => arr.pop();

const getArrayLength = arr => arr.length;

const incrementByOne = arr => arr.map(num => (num += 1));

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => words.join(" ");

const contains = (arr, item) => arr.includes(item);

const addNumbers = numbers => numbers.reduce((acc, num) => acc + num);

const averageTestScore = testScores =>
  testScores.reduce((acc, score) => acc + score) / testScores.length;

const largestNumber = numbers =>
  numbers.reduce((acc, num) => Math.max(acc, num));

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
