import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { validateLogin } from '../utils/validation';

class Login extends Component {

  state = {
    email: '',
    password: '',
    message: {
      type: '',
      body: ''
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (validateLogin(this.state.email, this.state.password)) {
      this.setState(
        {
          message: { type: 'SUCCESS', body: 'Logged in' },
          email: '',
          password: ''
        },
        () => {
          this.props.loginSuccessful(this.state.email);
        }
      );
    } else {
      this.setState({
        message: { type: 'ERROR', body: 'Wrong password or email' },
        email: '',
        password: ''
      });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        data-test="form"
        className="flex flex-col items-center w-1/2 mx-auto mt-8"
      >
        <Message message={this.state.message} />
        <label htmlFor="email" className="mb-4 w-full">
          Email 
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="zero@cool.gg"
            className="my-4 p-2 rounded shadow border w-full"
            autoComplete="username email"
          />
        </label>
        <label htmlFor="password" className="mb-4  w-full">
          Password 
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="8 length, 1 uppercase, 1 digit"
            className="mb-8 mt-4 p-2 rounded shadow border  w-full"
            autoComplete="current-password"
          />
        </label>
        <input
          type="submit"
          value="Login"
          className="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded"
        />
      </form>
    );
  }
}

Login.propTypes = {
  loginSuccessful: PropTypes.func.isRequired
};

export default Login;
