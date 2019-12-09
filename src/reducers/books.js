import { SAVE_BOOKS_LIST } from '../actions/books';

const initialState = {
  booksList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: [...payload],
      };
    default:
      return state;
  }
};
