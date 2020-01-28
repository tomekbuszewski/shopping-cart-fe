import { createSelector } from "reselect";

const getAllProductsInCartFunction = (store) => {
  const { cart, stock } = store;

  return Object.keys(cart).map((item) => ({
    item: stock[item].item,
    qty: cart[item],
  }));
};
export const getAllProductsInCart = createSelector(
  getAllProductsInCartFunction,
  (f) => f,
);

const getProductFunction = (store, id) => store.cart[id];
export const getProduct = createSelector(getProductFunction, f => f);

const isItemInCartFunction = (store, id) => Boolean(store.cart[id]);
export const isItemInCart = createSelector(isItemInCartFunction, f => f);

const getCartTotalFunction = store => {
  return Object.keys(store.cart).reduce((acc, item) => {
    const qty = store.cart[item];
    const price = store.stock[item].item.price;
    const total = qty * price;

    return acc + total;
  }, 0);
};
export const getCartTotal = createSelector(getCartTotalFunction, f => f);
