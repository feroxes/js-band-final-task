import React, { Component } from 'react';
import BaseInput from '../../components/ui/BaseInput';
import BaseButton from '../../components/ui/BaseButton';

import './signIn.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      isError: false,
    };
  }

  checkValidation = () => {
    const { userName } = this.state;
    const isError = userName.length < 4 || userName.length > 16;
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

  logIn = () => {
    const isError = this.checkValidation();
    if (!isError) return;
  };

  render() {
    const { userName, isError } = this.state;
    return (
      <>
        <div className="signin-wrapper position-absolute min-vh-100 min-vw-100" />
        <div className=" min-vh-100 min-vw-100 d-flex justify-content-center align-items-center position-relative">
          <div className="signin-form w-25 d-flex justify-content-center align-items-center flex-column border border-dark px-4 py-3">
            <BaseInput
              value={userName}
              name="userName"
              id="userName"
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

export default SignIn;
