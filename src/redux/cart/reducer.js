import { ADD_TO_CART, CHANGE_QTY, REMOVE_FROM_CART } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        [payload.id]: {
          item: payload,
          qty: 1,
        }
      }
    }

    case CHANGE_QTY: {
      return {
        ...state,
        [payload.id]: {
          ...[state.id],
          qty: payload.qty,
        },
      }
    }

    case REMOVE_FROM_CART: {
      return Object.keys(state).reduce((acc, item) => {
        if (item !== payload) {
          return {
            ...acc,
            [item]: state[item],
          }
        }
      }, {});
    }

    default: {
      return state;
    }
  }
}
