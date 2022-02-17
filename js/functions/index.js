// 1 ======================

function getSenseOfLife() {
  return 42;
}

//option 1
const res = getSenseOfLife();
console.log(res);

//option 2
console.log(getSenseOfLife());

// 2 ======================

function getSquared(num) {
  return num * num;
}

console.log(getSquared(4));
console.log(getSquared(-8));

// 3 ======================

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(sum(1, 5));

const first = 8;
const second = 10;

console.log(sum(first, second));

// 4 ======================

function print(old) {
  console.log(`I am ${old} years old.`);
  console.log(`Sens of life is ${getSenseOfLife()}`);
}

print(28);

// 5 ======================

function sendEmail(userId) {
  const email = getEmailById(userId);

  // send email
}

// arrow functions
// 1 ======================

// option 1
//const mult = (firstNum, secondNum) => firstNum * secondNum;

// option 2
const mult = (firstNum, secondNum) => {
  return firstNum * secondNum;
};

// test data

console.log(mult(20, 14));

// 2 ======================

const square = num => num * num;

// 3 ======================

const getMagicNumber = () => 17;

//!!!! вопрос на собесе

console.log((() => 17) === (() => 17)); // false

console.log((() => 17)() === (() => 17)()); // true, здесь функции вызваны
