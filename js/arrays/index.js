'use strict';

// var, let, const
// let message = 'hello';
// console.log(message);

const numbersList1 = [1, 2, 3, 4, 5];
//const numbersList1 = new Array(1, 2, 3, 4, 5);

console.log('before pop ', numbersList1);

// pop
// input: none
// return: number
const res = numbersList1.pop();
console.log(res);

console.log('after pop ', numbersList1);

// push
const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ', numbersList2);

// input: ell
// return: arr.length (number)
const pushRes = numbersList2.push(6);
console.log(pushRes);

console.log('after push ', numbersList2);

// shift
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ', numbersList3);

// input: none
// return: deleted ellement

const resShift = numbersList3.shift();
console.log(resShift);

console.log('after shift ', numbersList3);
