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
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import { signIn, setLoading } from './actions/user';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

class App extends Component {
  componentDidMount() {
    const { onSetLoading } = this.props;
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.getProfile(username);
    } else onSetLoading(false);
  }

  getProfile = async username => {
    const { onSignIn, onSetLoading } = this.props;
    onSetLoading(true);
    try {
      const user = await axios.post('signin', { username });
      onSignIn(user.data);
    } catch (e) {
      console.error(`${e.name}: ${e.message}`);
    }
  };

  render() {
    const { isAuthenticated, isLoading } = this.props;
    return (
      <div className="position-relative min-vh-100">
        {isAuthenticated && <Header />}
        {isLoading !== null && !isLoading ? (
          <Switch>
            <PrivateRoute component={{}} path="/" exact />
            <PublicRoute component={SignIn} path="/signin" exact restricted />
            <PrivateRoute component={Books} path="/books" exact />
            <PrivateRoute component={BookDetails} path="/books/:id" exact />
            <PrivateRoute component={PurchaseCard} path="/card" exact />
            <PublicRoute component={NotFound} restricted={false} />
          </Switch>
        ) : (
          <Spinner />
        )}
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  onSetLoading: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoading: null,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: data => dispatch(signIn(data)),
  onSetLoading: data => dispatch(setLoading(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
