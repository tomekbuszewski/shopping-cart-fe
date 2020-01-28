import { createSelector } from "reselect";

const getAllProductsInCartFunction = (store) => {
  const { cart } = store;

  return Object.keys(store.cart).map((item) => store.cart[item]);
};
export const getAllProductsInCart = createSelector(
  getAllProductsInCartFunction,
  (f) => f,
);

const getProductFunction = (store, id) => store.cart[id];
export const getProduct = createSelector(getProductFunction, f => f);
