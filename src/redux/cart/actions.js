// Actions
export const ADD_TO_CART = "@CARD/ADD_TO_CART";
export const REMOVE_FROM_CART = "@CARD/REMOVE_FROM_CART";
export const CHANGE_QTY = "@CARD/CHANGE_QUANTITY";

// Action creators
export const addToCart = payload => ({  type: ADD_TO_CART, payload });
export const removeFromCart = payload => ({ type: REMOVE_FROM_CART, payload });
export const changeQuantity = payload => ({ type: CHANGE_QTY, payload });

// Helpers
export const OPERATION_QTY_PLUS = "PLUS";
export const OPERATION_QTY_MINUS = "MINUS";
