// inp: obj1, obj2
// ret: boolean

// algo
// get keys, values
// check lenght
// compare every key/value
//function compareObjects(obj1, obj2) {
//  const entriesObj1 = Object.keys(obj1);
//  const entriesObj2 = Object.keys(obj2);

//  if (entriesObj1.length !== entriesObj2.length) {
//    return false;
//  }

//  return entriesObj1.reduce((acc, key) => {
//    return acc && obj1[key] === obj2[key];
//  }, true);
//}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj4));
