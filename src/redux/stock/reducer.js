import { ADD_TO_STOCK, SET_SOLD_OUT, REMOVE_FROM_STOCK } from "./actions";
import { ADD_TO_CART, CHANGE_QTY, OPERATION_QTY_PLUS } from "../cart/actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_STOCK: {
      return {
        ...state,
        [payload.id]: {
          item: {
            ...payload,
            id: String(payload.id),
          },
          qty: 5,
        },
      };
    }

    case ADD_TO_CART: {
      return {
        ...state,
        [payload]: {
          ...state[payload],
          qty: state[payload].qty - 1,
        },
      };
    }

    case CHANGE_QTY: {
      const { id, operation } = payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          qty:
            operation === OPERATION_QTY_PLUS
              ? state[id].qty - 1
              : state[id].qty + 1,
        },
      };
    }

    case REMOVE_FROM_STOCK: {
      return Object.keys(state).reduce((acc, item) => {
        if (item !== payload) {
          return {
            ...acc,
            [item]: state[item],
          };
        }
      }, {});
    }

    case SET_SOLD_OUT: {
      return {
        ...state,
        [payload.id]: {
          ...[state.id],
          qty: 0,
        },
      };
    }

    default: {
      return state;
    }
  }
};
