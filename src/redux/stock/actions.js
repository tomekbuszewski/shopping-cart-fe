export const ADD_TO_STOCK = "@STOCK/ADD_TO_STOCK";
export const REMOVE_FROM_STOCK = "@STOCK/REMOVE_FROM_STOCK";
export const SET_SOLD_OUT = "@STOCK/SET_SOLD_OUT";

export const addToStock = payload => ({ type: ADD_TO_STOCK, payload });
export const removeFromStock = payload => ({ type: REMOVE_FROM_STOCK, payload });
export const setSoldOut = payload => ({ type: SET_SOLD_OUT, payload });
