'use strict';

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, acamulator
// return: acamulator

// callback
// input: (prevValue, currentValue)
// return: результат дій з цими значеннями
const res = transactions.reduce((acc, elem) => acc + elem);
console.log(res);
