import { ADD_ITEM_TO_CARD, CLEAR_CARD } from '../actions/purchaseCard';

const initialState = {
  countOfProducts: 0,
  basket: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CARD:
      return {
        ...state,
        basket: [...state.basket, payload],
        countOfProducts: state.countOfProducts + Number(payload.count),
      };
    case CLEAR_CARD:
      return {
        ...state,
        basket: [],
        countOfProducts: 0,
      };
    default:
      return state;
  }
};
