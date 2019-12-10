import { combineReducers } from 'redux';
import user from './user';
import purchaseCard from './purchaseCard';
import books from './books';

export default combineReducers({
  user,
  purchaseCard,
  books,
});
