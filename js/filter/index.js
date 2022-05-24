'use strict';

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// callback
//
const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }

  return res;
};

// test data

const arr = [1, 2, 3, 4, 5, 6, 7];
const testCallback = ell => {
  return ell % 2 === 0;
};

console.log(filterArrayElements(arr, testCallback));
