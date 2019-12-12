import { SEND_REQUEST, SIGN_IN, SIGN_OUT } from '../actions/user';

const initialState = {
  username: '',
  avatar: '',
  isAuthenticated: false,
  isLoading: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN:
      return {
        ...state,
        username: payload.username,
        avatar: payload.avatar,
        isAuthenticated: true,
        isLoading: false,
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
