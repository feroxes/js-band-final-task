import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BasketIcon from '../ui/BasketIcon';
import BaseButton from '../ui/BaseButton';

import { signOut } from '../../actions/user';
import { clearLocalStorage } from '../../helpers';

class Header extends Component {
  logOut = () => {
    const { onSignOut } = this.props;
    onSignOut();
    clearLocalStorage();
  };

  render() {
    const { user } = this.props;
    const { avatar, username } = user;
    return (
      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
        <div>
          <Link to="/books">JS Band store</Link> / Yarik Harmash
        </div>
        <div className="d-flex align-items-center">
          <Link to="/card">
            <BasketIcon />
          </Link>
          <BaseButton
            handleClick={this.logOut}
            text="Sign out"
            name="signOut"
            className="border rounded py-2 bg-light mx-2"
          />
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-circle mx-2"
            style={{ width: '40px' }}
          />
          <h3 className="font-weight-bold mx-2">{username}</h3>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
