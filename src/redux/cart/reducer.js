import {
  ADD_TO_CART,
  CHANGE_QTY,
  REMOVE_FROM_CART,
  OPERATION_QTY_PLUS, OPERATION_QTY_MINUS,
} from "./actions";

const initialState = {};

const filterOutItems = (id, state) => Object.keys(state).reduce((acc, item) => {
  if (item !== id) {
    return {
      ...acc,
      [item]: state[item],
    };
  }

  return acc;
}, {});

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART: {
      if (payload in state) {
        return {
          ...state,
          [payload]: state[payload] + 1,
        };
      }

      return {
        ...state,
        [payload]: 1,
      };
    }

    case CHANGE_QTY: {
      const currentQty = state[payload.id];

      if (currentQty === 1 && payload.operation === OPERATION_QTY_MINUS) {
        return filterOutItems(payload.id, state);
      }

      return {
        ...state,
        [payload.id]:
          payload.operation === OPERATION_QTY_PLUS
            ? currentQty + 1
            : currentQty - 1,
      };
    }

    case REMOVE_FROM_CART: {
      return filterOutItems(payload, state);
    }

    default: {
      return state;
    }
  }
}
