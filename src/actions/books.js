export const SAVE_BOOKS_LIST = 'SAVE_BOOK_LIST';
export const SET_FILTER = 'SET_FILTER';

export const saveBooksList = data => {
  return {
    type: SAVE_BOOKS_LIST,
    payload: data,
  };
};

export const setFilter = data => {
  return {
    type: SET_FILTER,
    payload: data,
  };
};
