import { combineReducers } from 'redux';
import user from './user';
import basket from './basket';
import books from './books';

export default combineReducers({
  user,
  basket,
  books,
});
