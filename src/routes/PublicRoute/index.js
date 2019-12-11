import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && restricted ? <Redirect to="/books" /> : <Component {...props} />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  restricted: PropTypes.bool.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(PublicRoute);
