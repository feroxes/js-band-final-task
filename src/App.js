import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './components/Header';
import SignIn from './containers/SignIn';
import Books from './containers/Books';
import BookDetails from './containers/BookDetails';
import PurchaseCard from './containers/PurchaseCard';
import NotFound from './containers/NotFound';

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
    const { isAuthenticated } = this.props;

    return (
      <div className="position-relative">
        {isAuthenticated && <Header />}
        <Switch>
          <Route exact path="/">
            <Redirect to={isAuthenticated ? '/books' : '/signin'} />
          </Route>
          <Route exact path="/signin" component={SignIn}>
            {isAuthenticated && <Redirect to="/books" />}
          </Route>
          <Route path="/books" exact component={Books}>
            {!isAuthenticated && <Redirect to="/signin" />}
          </Route>
          <Route path="/books/:id" component={BookDetails}>
            {!isAuthenticated && <Redirect to="/signin" />}
          </Route>
          <Route path="/card" component={PurchaseCard}>
            {!isAuthenticated && <Redirect to="/signin" />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: data => dispatch(signIn(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
