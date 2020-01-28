// Actions
export const ADD_TO_CART = "@CARD/ADD_TO_CART";
export const REMOVE_FROM_CART = "@CARD/REMOVE_FROM_CART";
export const CHANGE_QTY = "@CARD/CHANGE_QUANTITY";
export const HYDRATE_CART = "@CARD/HYDRATE_CART";

// Action creators
export const addToCart = payload => ({  type: ADD_TO_CART, payload });
export const removeFromCart = payload => ({ type: REMOVE_FROM_CART, payload });
export const changeQuantity = payload => ({ type: CHANGE_QTY, payload });
export const hydrateCart = payload = ({ type: HYDRATE_CART, payload });
