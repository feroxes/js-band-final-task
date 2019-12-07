import { SAVE_BOOKS_LIST } from '../actions/books';

const initialState = {
  bookList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        bookList: [...payload],
      };
    default:
      return state;
  }
};
