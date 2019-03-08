
// Do not change any of the funcxtion names

const multiplyByTen = num => num * 10;

multiplyByTen(4);

const subtractFive = num => num - 5;

const areSameLength = (str1, str2) => str1.length === str2.length;

const areEqual = (x, y) => x === y;

const lessThanNinety = num => num < 90;

const greaterThanFifty = num => num > 50;

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const divide = (x, y) => x / y;

const multiply = (x, y) => x * y;

const getRemainder = (x, y) => x % y;

const isEven = num => num % 2 === 0;

const isOdd = num => num % 2 === 1;

const square = num => Math.pow(num, 2);

const cube = num => Math.pow(num, 3);

const raiseToPower = (num, exponent) => Math.pow(num, exponent);

const roundNumber = num => (num % 1 >= 0.5 ? Math.ceil(num) : Math.floor(num));

const roundUp = num => Math.ceil(num);

const addExclamationPoint = str => `${str}!`;

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

const getGreeting = name => `Hello ${name}!`;

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => length * width;

const getTriangleArea = (base, height) => 0.5 * base * height;

const getCircleArea = radius => Math.floor(Math.PI * radius * radius);

const getRectangularPrismVolume = (length, width, height) =>
  length * width * height;


module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
