export const ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD';
export const CLEAR_CARD = 'CLEAR_CARD';

export const addItemToCard = data => {
  return {
    type: ADD_ITEM_TO_CARD,
    payload: data,
  };
};
export const clearCard = () => {
  return {
    type: CLEAR_CARD,
  };
};
