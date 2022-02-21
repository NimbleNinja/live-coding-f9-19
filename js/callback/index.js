function sum(from, to, resolver) {
  let sum = 0;

  for (let index = from; index <= to; index += 1) {
    sum += index;
  }

  resolver(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}
sum(1, 4, printResult);

function alertResult(res) {
  alert('Result is ' + res);
}
sum(1, 4, alertResult);

function sendResult(res) {
  // send res
}
sum(1, 4, sendResult);
