import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const App = () => {
  return (
    <>
      <Spinner />
      <Login />
      <Logout />
    </>
  );
};

export default App;
