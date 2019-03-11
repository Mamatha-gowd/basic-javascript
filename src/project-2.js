// Do not change any of the function names

const getBiggest = (x, y) => x > y ? x : y

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  if (language === 'German') return 'Guten Tag!'
  if (language === 'Spanish') return 'Hola!'
  if (language === 'Chinese') return 'Ni Hao!'
  else return 'Hello!'
};

const isTenOrFive = (num) => num === 10 || num === 5

const isInRange = (num) => num > 20 && num < 50

const isInteger = (num) => (Math.floor(num) - num === 0)


const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
  else if (num % 3 === 0) return 'fizz'
  else if (num % 5 === 0) return 'buzz'
  else return num
};


const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) return false
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};


const returnFirst = (arr) => arr[0]

const returnLast = (arr) => arr[arr.length - 1]



const getArrayLength = (arr) => arr.length

const incrementByOne = (arr) => arr.map((elem) => elem + 1)


const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  arr.push(item)
  return arr
};


const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item)
  return arr
};

const wordsToSentence = (words) => words.join(' ');

const contains = (arr, item) => arr.includes(item)


const addNumbers = (numbers) => numbers.reduce((sum, num) => sum + num)


const averageTestScore = (testScores) => testScores.reduce((sum, score) => sum + score) / testScores.length



const largestNumber = (numbers) => Math.max(...numbers)



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
