// obj, string, any
// return obj
//function addPropertyV1(obj, key, value) {
//  obj[key] = value;
//  return obj;
//}

//function addPropertyV2(obj, key, value) {
//  const res = Object.assign(obj, { [key]: value });
//  return res;
//}

//function addPropertyV3(obj, key, value) {
//  const res = Object.assign({}, obj, { [key]: value });
//  return res;
//}

//function addPropertyV4(obj, key, value) {
//  return { ...obj, [key]: value };
//}

// examples
//const user = {
//  firstName: 'Tom',
//};
//console.log(addPropertyV1(user, 'lastName', '007'));
//const user = {
//  firstName: 'Tom',
//};
//console.log(addPropertyV4(user, 'lastName', 'Bond'));
