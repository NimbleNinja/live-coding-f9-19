import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    isLoggegIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggegIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggegIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggegIn } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggegIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
