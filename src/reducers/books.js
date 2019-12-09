import { SAVE_BOOKS_LIST, SET_FILTER } from '../actions/books';

const initialState = {
  booksList: [],
  filters: {
    search: '',
    price: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: [...payload],
      };
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.name]: payload.value,
        },
      };
    default:
      return state;
  }
};
