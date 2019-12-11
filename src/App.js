import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './components/Header';
import SignIn from './containers/SignIn';
import Books from './containers/Books';
import BookDetails from './containers/BookDetails';
import PurchaseCard from './containers/PurchaseCard';
import NotFound from './containers/NotFound';
import { signIn, sendRequest } from './actions/user';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.getProfile(username);
    }
  }

  getProfile = async username => {
    const { onSignIn, onSendRequest } = this.props;
    onSendRequest();
    const user = await axios.post('signin', { username });
    onSignIn(user.data);
  };

  render() {
    const { isAuthenticated, isLoading } = this.props;

    return (
      <div className="position-relative">
        {isAuthenticated && <Header />}
        <Switch>
          <PrivateRoute component={{}} path="/" exact />
          <PublicRoute component={SignIn} path="/signin" exact restricted />
          <PrivateRoute component={Books} path="/books" exact />
          <PrivateRoute component={BookDetails} path="/books/:id" exact />
          <PrivateRoute component={PurchaseCard} path="/card" exact />
          <PublicRoute component={NotFound} restricted={false} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSendRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: data => dispatch(signIn(data)),
  onSendRequest: () => dispatch(sendRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
