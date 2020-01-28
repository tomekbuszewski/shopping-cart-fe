import { ADD_TO_STOCK, SET_SOLD_OUT, REMOVE_FROM_STOCK } from "./actions";

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
      }
    }

    case REMOVE_FROM_STOCK: {
      return Object.keys(state).reduce((acc, item) => {
        if (item !== payload) {
          return {
            ...acc,
            [item]: state[item],
          }
        }
      }, {});
    }

    case SET_SOLD_OUT: {
      return {
        ...state,
        [payload.id]: {
          ...[state.id],
          qty: 0,
        }
      }
    }

    default: {
      return state;
    }
  }
}
