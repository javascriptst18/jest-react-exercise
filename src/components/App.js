import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import {
  removeUserFromLocalStorage,
  saveUserToLocalStorage
} from '../utils/localStorage';

class App extends Component {

  state = {
    user: this.props.user
  };

  loginSuccessful = (email) => {
    this.setState({ user: email }, () => {
      saveUserToLocalStorage(email);
    });
  };

  logout = () => {
    removeUserFromLocalStorage();
    this.setState({ user: '' });
  };

  render() {
    return (
      <div>
        {this.state.user && (
          <button
            onClick={this.logout}
            className="fixed pin-t p-l bg-purple-dark text-white text-center p-4 rounded-br user"
          >
            {this.state.user}
          </button>
        )}
        <Login loginSuccessful={this.loginSuccessful} />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string.isRequired
};

export default App;
