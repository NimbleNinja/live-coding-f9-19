const formElem = document.querySelector('.login-form');
const url = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

console.log('form created');

function createUserHandler(e) {
  e.preventDefault();
  console.log('test');

  const user = {
    email: 'testmail@mail.com',
    name: 'Oleg Zaporozhets',
    password: '123456',
  };

  console.log(JSON.stringify(user));

  // inp: url, [options]
  // return: promise
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    // callback
    // inp: res of prev
    // ret:
    .then(response => {
      return response.json();
    })
    .then(body => console.log(body));
}

formElem.addEventListener('submit', createUserHandler);
