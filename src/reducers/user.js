import { SIGN_IN, SIGN_OUT } from '../actions/user';

const initialState = {
  username: '',
  avatar: '',
  isAuthenticated: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        username: payload.username,
        avatar: payload.avatar,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        username: '',
        avatar: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
