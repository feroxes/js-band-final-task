import { combineReducers } from 'redux';
import user from './user';
import basket from './basket';

export default combineReducers({
  user,
  basket,
});
