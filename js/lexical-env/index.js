/* eslint-disable */

const message = 'Test';
const weight = 55;

if (false) {
  function sum(a, b) {
    return a + b;
  }
}
//not a func
sum(1, 2);

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
run();

/* eslint-disable */

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// createMessenger LEX ENV
// {
//   'enviromentRecord': {
//     'message'
//     'sender'
//     'sendMessage'
//     'setSender'
//     'setMessage'
//   },
//   'outherLexicalEnv': global
// }

// run() LEX ENV
// {
//   'enviromentRecord': {
//
//   },
//   'outherLexicalEnv': global
// }
