'use strict';
// BAD
//function withdraw(clients, balances, client, amount) {
//  for (let i = 0; i < clients.length; i++) {
//    if (clients[i] === client && balances[i] >= amount) {
//      return (balances[i] -= amount);
//    }
//    if (clients[i] === client && balances[i] < amount) {
//      return -1;
//    }
//  }
//}

// GOOD
//function withdraw(clients, balances, client, amount) {
//  //VALIDATE
//}

//BAD
//const withdraw = (clients, balances, client, amount) => {
//  const balance = balances[clients.indexOf(client)];
//  return balance > amount ? balance - amount : -1;
//};

////test data
//const users = ['John', 'Tom', 'Rim'];
//const balances = [100, 20, -100];
//console.log(withdraw(users, balances, 'Tom', 10));
//console.log(balances);

//VITALIY
//const withdraw = (clients, balances, client, amount) => {
//  const indexClient = clients.indexOf(client);

//  if (amount > balances[indexClient]) {
//    return -1;
//  }

//  return balances[indexClient] - amount;
//};

//function withdraw(clients, balances, client, amount) {
//  for (let i = 0; i < clients.length; i++) {
//    if (clients[i] === client && balances[i] >= amount) {
//      return (balances[i] -= amount);
//    } else if (clients[i] === client && balances[i] < amount) {
//      return -1;
//    }
//  }
//}

// VITALYI
//const withdraw = (clients, balances, client, amount) => {
//  let indexClient = clients.indexOf(client);
//  return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
//};

//function withdraw(clients, balances, client, amount) {
//  let index = clients.indexOf(client);

//  if (balances[index] >= amount) {
//    return (balances[index] -= amount);
//  }

//  return -1;
//}

//const withdraw = (clients, balances, client, amount) => {
//  let result = 0;
//  clients.forEach(function (name, index) {
//    if (name.includes(client) && balances[index] >= amount) {
//      result = balances[index] - amount;
//    } else if (name.includes(client) && balances[index] < amount) {
//      result = -1;
//    }
//  });
//  return result;
//};
