import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import SignIn from './containers/SignIn';
import { signIn } from './actions/user';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.getProfile(username);
    }
  }

  getProfile = async username => {
    const { onSignIn } = this.props;
    const user = await axios.post('signin', { username });
    onSignIn(user.data);
  };

  render() {
    return (
      <div className="position-relative">
        <Switch>
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
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
)(App);
