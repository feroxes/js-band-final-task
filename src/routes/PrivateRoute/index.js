import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, path, ...props }) => {
  function setRoute() {
    if (path === '/' && !isAuthenticated) {
      return (
        <Route {...props}>
          <Redirect to="/signin" />
        </Route>
      );
    }
    if (path === '/' && isAuthenticated) {
      return (
        <Route {...props}>
          <Redirect to="/books" />
        </Route>
      );
    }
    return (
      <Route
        {...props}
        render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />)}
      />
    );
  }
  return setRoute();
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);
