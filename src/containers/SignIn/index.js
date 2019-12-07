import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BaseInput from '../../components/ui/BaseInput';
import BaseButton from '../../components/ui/BaseButton';

import { signIn } from '../../actions/user';

import './signIn.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      isError: false,
    };
  }

  checkValidation = () => {
    const { username } = this.state;
    const isError = username.length < 4 || username.length > 16;
    this.setState({ isError });
    return isError;
  };

  handleKeyUp = e => {
    const { keyCode } = e;
    if (keyCode === 13) this.logIn();
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      isError: false,
      [name]: value,
    });
  };

  logIn = async () => {
    const isError = this.checkValidation();
    if (isError) return;
    const { username } = this.state;
    const { onSignIn } = this.props;
    const user = await axios.post('signin', { username });
    onSignIn(user.data);
    this.setDataToLocalStorage(user.data);
  };

  setDataToLocalStorage = user => {
    localStorage.setItem('token', user.token);
    localStorage.setItem('username', user.username);
  };

  render() {
    const { username, isError } = this.state;
    return (
      <>
        <div className="signin-wrapper position-absolute min-vh-100 min-vw-100" />
        <div className=" min-vh-100 min-vw-100 d-flex justify-content-center align-items-center position-relative">
          <div className="signin-form w-25 d-flex justify-content-center align-items-center flex-column border border-dark px-4 py-3">
            <BaseInput
              value={username}
              name="username"
              id="username"
              className="form-control m-2"
              label="Username"
              isError={isError}
              errorText="Minimum 4, maximum 16 symbols"
              placeholder="Enter your username..."
              handleChanges={this.onInputChange}
              handleKeyUp={this.handleKeyUp}
            />
            <BaseButton
              handleClick={this.logIn}
              text="Login"
              name="login"
              className="border rounded m-2 py-1 px-3"
            />
          </div>
        </div>
      </>
    );
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: data => dispatch(signIn(data)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
