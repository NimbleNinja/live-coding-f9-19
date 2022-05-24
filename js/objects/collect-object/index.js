'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
//function buildObject(keysList, valuesList) {
//  const resObj = {};

//  for (let index = 0; index < keysList.length; index += 1) {
//    resObj[keysList[index]] = valuesList[index];
//  }

//  return resObj;
//}

//function buildObject(keysList, valuesList) {
//  return valuesList.reduce((acc, cur, i) => {
//    acc[keysList[i]] = cur;
//    return acc;
//  }, {});
//}

//function buildObject(keysList, valuesList) {
//  return keysList.reduce((acc, currValue, index) => {
//    return { ...acc, [currValue]: valuesList[index] };
//  }, {});
//}

const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, currValue, index) => ({ ...acc, [currValue]: valuesList[index] }), {});

// if code doesn`t work split by step

// testData
const obj1 = ['name', 'age', 'color'];
const obj2 = ['Tom', 19, 'black'];

const res = buildObject(obj1, obj2);
console.log(res);
