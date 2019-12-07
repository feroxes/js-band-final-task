export const SAVE_BOOKS_LIST = 'SAVE_BOOK_LIST';

export const saveBooksList = data => {
  return {
    type: SAVE_BOOKS_LIST,
    payload: data,
  };
};
