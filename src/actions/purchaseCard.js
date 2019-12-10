export const ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD';

export const addItemToCard = data => {
  return {
    type: ADD_ITEM_TO_CARD,
    payload: data,
  };
};
