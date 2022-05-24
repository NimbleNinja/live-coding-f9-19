'use strict';

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func
// return: array

// input: element, [index, array]
// return: bollean

// option 1
//function filterCallback(number) {
//  console.log('filterCallback called is ' + num);

//  return number > 5;
//}

//const filterRes = anotherNumbersList.filter(filterCallback);
//console.log(filterRes);

// option 2
//const filterRes = anotherNumbersList.filter(function (number) {
//  return number > 5;
//});
//console.log(filterRes);

// option 3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);

// --- map
const numbersList = [5, 0, 8, 10, -4, 50, 220];

const mapRes = numbersList.map(el => el * el);
console.log(mapRes);

// --- find
// input: callback
// return: el

// callback => find
// input: el
// return: el

// option 1
//const findRes = numbersList.find(el => {
//  if (el % 2 === 1) {
//    return true;
//  } else {
//    return false;
//  }
//});

// option 2
const findRes = numbersList.find(el => el % 2 !== 0);

// some
// input:
// return:

// --- forEach
// input: func
// return: undefined

// callback
// input: el
// return: undefined

numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});
