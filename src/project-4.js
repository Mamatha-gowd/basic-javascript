/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument
// eslint-disable-next-line indent
cb(collection[0]);
};

const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback
  cb(collection.length);
};

const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
  cb(collection[collection.length - 1]);
};

const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  cb(x * y);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false
  cb(collection.includes(item));
};
const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
  const array = [];
  for (let i = 0; i < collection.length; i++) {
    if (!array.includes(collection[i])) {
      array.push(collection[i]);
    }
  }
  cb(array);
};

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};